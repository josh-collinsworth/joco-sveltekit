// @ts-nocheck — Ported from Deno runtime; null-safety on WebGL handles is runtime-guaranteed
import { createShallowIsometricProjection } from "../math";
import { createProgram } from "../shaders";
import type { WebGLMode } from "../types";

// ── Cube shaders ──────────────────────────────────────────────────────

const CUBE_VERT = `
attribute vec3 aPosition;
attribute vec3 aNormal;
attribute float aAnimOffset;
attribute float aAnimSpeed;

uniform mat4 uProjection;
uniform float uTime;
uniform vec3 uWireCenter;
uniform float uStep;
uniform vec2 uMouseClip;
uniform float uAspect;
uniform float uReducedMotion;
varying float vFaceBrightness;
varying float vPositionFactor;
varying float vOriginDist;
varying float vMouseDist;

void main() {
  // Derive cube center from vertex position
  vec3 cubeCenter = floor(aPosition / uStep + 0.5) * uStep;

  // Base scale: Manhattan distance from wireframe center (isometric diamond rings)
  vec3 diff = abs(cubeCenter - uWireCenter) / uStep;
  float wireDist = diff.x + diff.y + diff.z;
  float baseScale;
  if (wireDist < 0.5) {
    baseScale = 1.15;
  } else if (wireDist < 1.5) {
    baseScale = 1.0;
  } else {
    float falloff = (wireDist - 1.0) / 20.0;
    baseScale = mix(1.0, 0.12, clamp(falloff, 0.0, 1.0));
  }

  float scale = baseScale;

  // Scale vertex position relative to its cube center
  vec3 pos = cubeCenter + (aPosition - cubeCenter) * scale;

  // Subtle floating hover — wave radiates outward in screen space
  // Use screen-space distance so overlapping cubes in isometric view move together
  vec4 centerClip = uProjection * vec4(cubeCenter, 1.0);
  float screenDist = length(centerClip.xy / centerClip.w);
  if (uReducedMotion < 0.5) {
    float wave = sin(uTime * 0.7 - screenDist * 1.8);
    // Flatten peaks, snap through middle: sign-preserving power curve
    wave = sign(wave) * pow(abs(wave), 0.75);
    pos.y += wave * 0.065;
  }

  // Face lighting: directional light from upper-right-front
  vec3 lightDir = normalize(vec3(0.4, 1.0, 0.3));
  vFaceBrightness = max(dot(aNormal, lightDir), 0.0) * 0.4 + 0.6;

  vec4 clipPos = uProjection * vec4(pos, 1.0);
  gl_Position = clipPos;

  // Linear gradient in screen space: upper-left (dark) → lower-right (bright).
  // clipPos.x: -1=left, +1=right. clipPos.y: -1=bottom, +1=top.
  // (x - y) is smallest at upper-left (-1,+1)=-2, largest at lower-right (+1,-1)=+2.
  vPositionFactor = clamp((clipPos.x - clipPos.y + 2.0) / 4.0, 0.0, 1.0);

  // Distance from screen origin (always active, the base opacity ring)
  vec2 dOrigin = centerClip.xy / centerClip.w;
  dOrigin.x *= uAspect;
  vOriginDist = length(dOrigin);

  // Distance from mouse cursor (only meaningful when hovering)
  vec2 dMouse = centerClip.xy / centerClip.w - uMouseClip;
  dMouse.x *= uAspect;
  vMouseDist = length(dMouse);
}
`;

const CUBE_FRAG = `
precision mediump float;
varying float vFaceBrightness;
varying float vPositionFactor;
varying float vOriginDist;
varying float vMouseDist;
uniform float uMouseActive;

void main() {
  // deploy-neutral-900: #0f152a
  vec3 darkColor = vec3(0.059, 0.082, 0.165);
  // deploy-neutral-500: #64708b
  vec3 lightColor = vec3(0.392, 0.439, 0.545);

  // Positional gradient: brighter toward lower-right, faded upper-left.
  float gradient = pow(vPositionFactor, 2.0);
  vec3 baseColor = mix(darkColor, lightColor, gradient);

  // Brighten under cursor
  float cursorProximity = (1.0 - smoothstep(0.0, 4.0, vMouseDist)) * uMouseActive;
  float brightness = 1.0 + cursorProximity * 0.2;

  vec3 color = baseColor * vFaceBrightness * brightness;

  // Base ring: always centered on screen origin
  float originAlpha = 1.0 - smoothstep(0.0, 8.0, vOriginDist);
  originAlpha = pow(originAlpha, 1.5);

  // Cursor ring: follows mouse, only when hovering
  float cursorAlpha = 1.0 - smoothstep(0.0, 4.0, vMouseDist);
  cursorAlpha = pow(cursorAlpha, 1.5);

  // Combine: take the brighter of the two, blend in cursor ring on hover
  float alpha = max(originAlpha, cursorAlpha * uMouseActive);
  alpha = clamp(alpha, 0.0, 1.0);

  if (alpha < 0.01) discard;
  gl_FragColor = vec4(color, alpha);
}
`;

// ── Grid line shaders ────────────────────────────────────────────────
// Simple opaque lines drawn as screen-space quads (same technique as wireframe).

const LINE_VERT = `
attribute vec3 aEndA;
attribute vec3 aEndB;
attribute float aWhichEnd;
attribute float aSide;

uniform mat4 uProjection;
uniform vec2 uResolution;
uniform float uLineWidth;

varying vec2 vScreenPos;

void main() {
  vec4 clipA = uProjection * vec4(aEndA, 1.0);
  vec4 clipB = uProjection * vec4(aEndB, 1.0);

  vec2 screenA = clipA.xy / clipA.w;
  vec2 screenB = clipB.xy / clipB.w;

  vec2 dir = screenB - screenA;
  vec2 dirNorm = normalize(dir);
  vec2 perp = vec2(-dirNorm.y, dirNorm.x);

  vec4 clipPos = mix(clipA, clipB, aWhichEnd);
  vec2 offset = perp * aSide * uLineWidth / uResolution;
  clipPos.xy += offset * clipPos.w;

  vScreenPos = clipPos.xy / clipPos.w;
  // Push lines further from camera so cubes occlude them
  clipPos.z += 0.65 * clipPos.w;
  gl_Position = clipPos;
}
`;

const LINE_FRAG = `
precision mediump float;
uniform vec4 uColor;
uniform highp vec2 uResolution;
uniform highp vec2 uSweepCenter;

varying vec2 vScreenPos;

void main() {
  float aspect = uResolution.x / uResolution.y;

  vec2 d = vScreenPos - uSweepCenter;
  d.x *= aspect;
  float dist = length(d);
  float alpha = smoothstep(1.8, 0.0, dist);
  alpha = alpha * alpha * alpha * 0.28;

  float a = uColor.a * alpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(uColor.rgb * a * pow(a, 0.7), a);
}
`;

// ── Grid wireframe overlay shaders ──────────────────────────────────
// Screen-space quad edges for every grid cube, hover-revealed.
// Same technique as the dedicated wireframe cube but static (no rotation).

const GRID_WIRE_VERT = `
attribute vec3 aEndA;
attribute vec3 aEndB;
attribute float aWhichEnd;
attribute float aSide;
attribute vec3 aCubeCenter;

uniform mat4 uProjection;
uniform vec2 uResolution;
uniform float uLineWidth;
uniform vec3 uRippleCenterA;
uniform float uRippleTimeA;
uniform vec3 uRippleCenterB;
uniform float uRippleTimeB;
uniform float uStep;
uniform float uStaticMode;
uniform vec2 uClickPos[4];
uniform float uClickAge[4];
uniform float uAspect;

varying float vAlpha;

void main() {
  vec4 clipA = uProjection * vec4(aEndA, 1.0);
  vec4 clipB = uProjection * vec4(aEndB, 1.0);

  vec2 screenA = clipA.xy / clipA.w;
  vec2 screenB = clipB.xy / clipB.w;

  vec2 dir = screenB - screenA;
  vec2 dirNorm = normalize(dir);
  vec2 perp = vec2(-dirNorm.y, dirNorm.x);

  vec4 clipPos = mix(clipA, clipB, aWhichEnd);
  vec2 offset = perp * aSide * uLineWidth / uResolution;
  clipPos.xy += offset * clipPos.w;

  // Ripple A: along row (same Z), distance along X
  vec3 diffA = floor(abs(aCubeCenter - uRippleCenterA) / uStep + 0.5);
  float sameYA = step(diffA.y, 0.5);
  float sameRowA = step(diffA.z, 0.5);
  float gridDistA = diffA.x;

  float fadeA;
  if (uStaticMode > 0.5) {
    fadeA = exp(-gridDistA * 0.15);
  } else {
    float tA = uRippleTimeA - gridDistA * 0.14;
    float ctA = clamp(tA, 0.0, 2.3);
    fadeA = smoothstep(0.0, 0.75, ctA) * (1.0 - smoothstep(1.2, 2.3, ctA));
  }
  float distFadeA = 1.0 / (1.0 + gridDistA * 0.03);
  float alphaA = fadeA * distFadeA * sameYA * sameRowA * 0.38;

  // Ripple B: along column (same X), distance along Z
  vec3 diffB = floor(abs(aCubeCenter - uRippleCenterB) / uStep + 0.5);
  float sameYB = step(diffB.y, 0.5);
  float sameColB = step(diffB.x, 0.5);
  float gridDistB = diffB.z;

  float fadeB;
  if (uStaticMode > 0.5) {
    fadeB = exp(-gridDistB * 0.15);
  } else {
    float tB = uRippleTimeB - gridDistB * 0.14;
    float ctB = clamp(tB, 0.0, 2.3);
    fadeB = smoothstep(0.0, 0.75, ctB) * (1.0 - smoothstep(1.2, 2.3, ctB));
  }
  float distFadeB = 1.0 / (1.0 + gridDistB * 0.03);
  float alphaB = fadeB * distFadeB * sameYB * sameColB * 0.38;

  // Click reveal: ripple outward from click point(s) in clip space
  vec4 cubeClip = uProjection * vec4(aCubeCenter, 1.0);
  vec2 cubeNDC = cubeClip.xy / cubeClip.w;
  float alphaClick = 0.0;
  for (int i = 0; i < 4; i++) {
    if (uClickAge[i] > 4.0) continue;
    vec2 dClick = cubeNDC - uClickPos[i];
    dClick.x *= uAspect;
    float clickDist = length(dClick);
    float clickProximity = 1.0 - smoothstep(0.0, 0.5, clickDist);
    clickProximity = pow(clickProximity, 1.8);
    float clickFade = 1.0 - smoothstep(0.0, 1.5, uClickAge[i]);
    alphaClick = max(alphaClick, clickProximity * clickFade * 0.15);
  }

  vAlpha = max(max(alphaA, alphaB), alphaClick);

  gl_Position = clipPos;
}
`;

const GRID_WIRE_FRAG = `
precision mediump float;
uniform vec3 uColor;
varying float vAlpha;

void main() {
  if (vAlpha < 0.01) discard;
  // Premultiplied alpha: wire color replaces destination rather than blending with it,
  // so brightness is consistent regardless of what's behind
  gl_FragColor = vec4(uColor * vAlpha, vAlpha);
}
`;

// ── Wireframe shaders ─────────────────────────────────────────────────
// Edges are drawn as screen-space quads for consistent line width.

const WIRE_VERT = `
attribute vec3 aEndA;
attribute vec3 aEndB;
attribute float aWhichEnd;
attribute float aSide;
attribute float aIsBack;

uniform mat4 uProjection;
uniform vec2 uResolution;
uniform float uLineWidth;
uniform float uTime;
uniform vec3 uWireCenter;

varying float vIsBack;

vec3 rotatePoint(vec3 p) {
  const float PI_HALF = 1.5707963;
  float duration = 2.5; // seconds per quarter turn
  float totalPhase = uTime / duration;
  float phase = floor(totalPhase);
  float t = totalPhase - phase;

  float eased = t * t * (3.0 - 2.0 * t); // smoothstep

  // Pseudo-random hash for deterministic randomness per phase
  float ax = 0.0;
  float ay = 0.0;
  float prevAxis = -1.0; // no previous move yet
  float prevDir = 0.0;

  // Accumulate all completed phases
  for (int i = 0; i < 256; i++) {
    if (float(i) >= phase) break;
    float fi = float(i);
    float hAxis = fract(sin(fi * 127.1) * 43758.5453);
    float hDir  = fract(sin(fi * 269.5 + 31.7) * 17654.321);
    float axis = hAxis > 0.5 ? 1.0 : 0.0;
    float dir  = hDir > 0.5 ? 1.0 : -1.0;
    // Never undo the previous move: if same axis + opposite dir, flip axis
    if (abs(axis - prevAxis) < 0.1 && dir * prevDir < 0.0) {
      axis = 1.0 - axis;
    }
    if (axis < 0.5) { ax += dir * PI_HALF; }
    else             { ay += dir * PI_HALF; }
    prevAxis = axis;
    prevDir = dir;
  }

  // Add the current in-progress phase
  float hAxis = fract(sin(phase * 127.1) * 43758.5453);
  float hDir  = fract(sin(phase * 269.5 + 31.7) * 17654.321);
  float curAxis = hAxis > 0.5 ? 1.0 : 0.0;
  float curDir  = hDir > 0.5 ? 1.0 : -1.0;
  if (abs(curAxis - prevAxis) < 0.1 && curDir * prevDir < 0.0) {
    curAxis = 1.0 - curAxis;
  }
  if (curAxis < 0.5) { ax += curDir * eased * PI_HALF; }
  else               { ay += curDir * eased * PI_HALF; }

  // Rotate around X then Y
  float cx = cos(ax), sx = sin(ax);
  vec3 rx = vec3(p.x, cx * p.y - sx * p.z, sx * p.y + cx * p.z);
  float cy = cos(ay), sy = sin(ay);
  return vec3(cy * rx.x + sy * rx.z, rx.y, -sy * rx.x + cy * rx.z);
}

void main() {
  // Endpoints are in local space (centered at origin); rotate then translate
  vec3 endA = rotatePoint(aEndA) + uWireCenter;
  vec3 endB = rotatePoint(aEndB) + uWireCenter;

  vec4 clipA = uProjection * vec4(endA, 1.0);
  vec4 clipB = uProjection * vec4(endB, 1.0);

  vec2 screenA = clipA.xy / clipA.w;
  vec2 screenB = clipB.xy / clipB.w;

  vec2 dir = screenB - screenA;
  vec2 dirNorm = normalize(dir);
  vec2 perp = vec2(-dirNorm.y, dirNorm.x);

  vec4 clipPos = mix(clipA, clipB, aWhichEnd);

  vec2 offset = perp * aSide * uLineWidth / uResolution;
  clipPos.xy += offset * clipPos.w;

  vIsBack = aIsBack;
  gl_Position = clipPos;
}
`;

const WIRE_FRAG = `
precision mediump float;
uniform vec4 uColor;
varying float vIsBack;

void main() {
  gl_FragColor = uColor;
}
`;

// ── Filled face shaders ──────────────────────────────────────────────
// Transparent filled faces on the wireframe cube, visible on hover.

const FACE_VERT = `
attribute vec3 aPosition;
uniform mat4 uProjection;
uniform vec3 uCenter;

void main() {
  gl_Position = uProjection * vec4(aPosition + uCenter, 1.0);
}
`;

const FACE_FRAG = `
precision mediump float;
uniform vec4 uColor;

void main() {
  gl_FragColor = uColor;
}
`;

// ── Glow billboard shaders ───────────────────────────────────────────
// A camera-facing quad centered on the wireframe cube with radial falloff.

const GLOW_VERT = `
attribute vec2 aQuadPos;

uniform mat4 uProjection;
uniform vec3 uWireCenter;
uniform float uGlowSize;

varying vec2 vUV;

// Isometric camera axes in world space (from rotateY(pi/4) * rotateX(atan(1/sqrt(2))))
const vec3 CAM_RIGHT = vec3(0.70711, 0.0, -0.70711);
const vec3 CAM_UP    = vec3(-0.40825, 0.81650, -0.40825);

void main() {
  vec3 worldPos = uWireCenter
    + CAM_RIGHT * aQuadPos.x * uGlowSize
    + CAM_UP    * aQuadPos.y * uGlowSize;
  gl_Position = uProjection * vec4(worldPos, 1.0);
  vUV = aQuadPos;
}
`;

const GLOW_FRAG = `
precision mediump float;
uniform vec3 uGlowColor;
uniform float uGlowIntensity;

varying vec2 vUV;

void main() {
  float dist = length(vUV);
  float glow = 1.0 - smoothstep(0.15, 1.0, dist);
  float a = glow * uGlowIntensity;
  gl_FragColor = vec4(uGlowColor * a * a, a);
}
`;

// ── Wireframe geometry builder ────────────────────────────────────────

function buildWireframeBuffer(
  cx: number,
  cy: number,
  cz: number,
  size: number,
): Float32Array {
  const s = size / 2;

  const corners = [
    [cx - s, cy - s, cz - s], // 0
    [cx + s, cy - s, cz - s], // 1
    [cx + s, cy + s, cz - s], // 2
    [cx - s, cy + s, cz - s], // 3
    [cx - s, cy - s, cz + s], // 4
    [cx + s, cy - s, cz + s], // 5
    [cx + s, cy + s, cz + s], // 6
    [cx - s, cy + s, cz + s], // 7
  ];

  // All 12 edges. isBack=1 for the 3 edges meeting at far corner 0.
  const edges: [number, number, number][] = [
    // Back edges (dimmed): meeting at corner 0 (-X,-Y,-Z)
    [0, 1, 1],
    [0, 4, 1],
    [0, 3, 1],
    // All other edges (full brightness)
    [1, 5, 0],
    [5, 4, 0],
    [3, 2, 0],
    [7, 3, 0],
    [1, 2, 0],
    [4, 7, 0],
    [5, 6, 0],
    [2, 6, 0],
    [6, 7, 0],
  ];

  // Per vertex: aEndA(3), aEndB(3), aWhichEnd(1), aSide(1), aIsBack(1) = 9 floats
  const verts: number[] = [];
  for (const [ai, bi, isBack] of edges) {
    const a = corners[ai];
    const b = corners[bi];
    verts.push(...a, ...b, 0, -1, isBack);
    verts.push(...a, ...b, 0, 1, isBack);
    verts.push(...a, ...b, 1, 1, isBack);
    verts.push(...a, ...b, 0, -1, isBack);
    verts.push(...a, ...b, 1, 1, isBack);
    verts.push(...a, ...b, 1, -1, isBack);
  }

  return new Float32Array(verts);
}

// ── Grid wireframe geometry builder ──────────────────────────────────

function buildGridWireframeBuffer(
  step: number,
  cubeSize: number,
  wireSizeMult: number,
  gridX: number,
  gridY: number,
  gridZ: number,
): Float32Array {
  const size = cubeSize * wireSizeMult;
  const s = size / 2;

  // Unit cube corners (centered at origin).
  // View depth ∝ (y - x + z) from RotX(atan(1/√2)) * RotY(π/4).
  // Corner 1 (+X,-Y,-Z) → depth -3s = FURTHEST from camera.
  // Corner 7 (-X,+Y,+Z) → depth +3s = NEAREST to camera.
  const corners = [
    [-s, -s, -s], // 0
    [+s, -s, -s], // 1 — far corner (back, hidden behind solid cube)
    [+s, +s, -s], // 2
    [-s, +s, -s], // 3
    [-s, -s, +s], // 4
    [+s, -s, +s], // 5
    [+s, +s, +s], // 6
    [-s, +s, +s], // 7 — near corner
  ];

  // 9 front-facing edges only. The 3 edges meeting at corner 1
  // ([0,1], [1,2], [1,5]) are omitted — they're on the far side of
  // the cube and should appear hidden behind the inner solid cube.
  const edges: [number, number][] = [
    [2, 3],
    [3, 0],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 4],
    [0, 4],
    [2, 6],
    [3, 7],
  ];

  // Per vertex: aEndA(3), aEndB(3), aWhichEnd(1), aSide(1), aCubeCenter(3) = 11 floats
  const verts: number[] = [];

  for (let ix = -gridX; ix <= gridX; ix++) {
    for (let iy = -gridY; iy <= gridY; iy++) {
      for (let iz = -gridZ; iz <= gridZ; iz++) {
        const cx = ix * step;
        const cy = iy * step;
        const cz = iz * step;

        for (const [ai, bi] of edges) {
          const a = corners[ai];
          const b = corners[bi];
          const ax = a[0] + cx, ay = a[1] + cy, az = a[2] + cz;
          const bx = b[0] + cx, by = b[1] + cy, bz = b[2] + cz;

          // 6 verts per edge (two triangles forming a screen-space quad)
          // deno-fmt-ignore
          verts.push(
            ax,ay,az, bx,by,bz, 0, -1, cx,cy,cz,
            ax,ay,az, bx,by,bz, 0,  1, cx,cy,cz,
            ax,ay,az, bx,by,bz, 1,  1, cx,cy,cz,
            ax,ay,az, bx,by,bz, 0, -1, cx,cy,cz,
            ax,ay,az, bx,by,bz, 1,  1, cx,cy,cz,
            ax,ay,az, bx,by,bz, 1, -1, cx,cy,cz,
          );
        }
      }
    }
  }

  return new Float32Array(verts);
}

// ── Grid line geometry builder ────────────────────────────────────────
// Builds long lines through cube centers: vertical (Y), and two diagonal
// directions (X and Z, which appear as isometric diagonals on screen).

function buildGridLines(
  step: number,
  gridX: number,
  gridY: number,
  gridZ: number,
): Float32Array {
  // Per vertex: aEndA(3), aEndB(3), aWhichEnd(1), aSide(1) = 8 floats
  const verts: number[] = [];

  function pushLine(
    ax: number,
    ay: number,
    az: number,
    bx: number,
    by: number,
    bz: number,
  ) {
    // deno-fmt-ignore
    verts.push(
      ax,ay,az, bx,by,bz, 0, -1,
      ax,ay,az, bx,by,bz, 0,  1,
      ax,ay,az, bx,by,bz, 1,  1,
      ax,ay,az, bx,by,bz, 0, -1,
      ax,ay,az, bx,by,bz, 1,  1,
      ax,ay,az, bx,by,bz, 1, -1,
    );
  }

  const xMin = -gridX * step, xMax = gridX * step;
  const yMin = -gridY * step, yMax = gridY * step;
  const zMin = -gridZ * step, zMax = gridZ * step;

  // Vertical lines (Y-axis) at each (ix, iz) column
  for (let ix = -gridX; ix <= gridX; ix++) {
    for (let iz = -gridZ; iz <= gridZ; iz++) {
      pushLine(ix * step, yMin, iz * step, ix * step, yMax, iz * step);
    }
  }

  // Diagonal lines along X at each (iy, iz)
  for (let iy = -gridY; iy <= gridY; iy++) {
    for (let iz = -gridZ; iz <= gridZ; iz++) {
      pushLine(xMin, iy * step, iz * step, xMax, iy * step, iz * step);
    }
  }

  // Diagonal lines along Z at each (iy, ix)
  for (let iy = -gridY; iy <= gridY; iy++) {
    for (let ix = -gridX; ix <= gridX; ix++) {
      pushLine(ix * step, iy * step, zMin, ix * step, iy * step, zMax);
    }
  }

  return new Float32Array(verts);
}

// ── Cube geometry builder ─────────────────────────────────────────────

function buildCubeVertices(
  cx: number,
  cy: number,
  cz: number,
  size: number,
  animOffset: number,
  animSpeed: number,
): number[] {
  const s = size / 2;
  const verts: number[] = [];

  const faces: { positions: number[][]; normal: number[] }[] = [
    // Top (+Y)
    {
      positions: [
        [cx - s, cy + s, cz - s],
        [cx + s, cy + s, cz - s],
        [cx + s, cy + s, cz + s],
        [cx - s, cy + s, cz - s],
        [cx + s, cy + s, cz + s],
        [cx - s, cy + s, cz + s],
      ],
      normal: [0, 1, 0],
    },
    // Bottom (-Y)
    {
      positions: [
        [cx - s, cy - s, cz + s],
        [cx + s, cy - s, cz + s],
        [cx + s, cy - s, cz - s],
        [cx - s, cy - s, cz + s],
        [cx + s, cy - s, cz - s],
        [cx - s, cy - s, cz - s],
      ],
      normal: [0, -1, 0],
    },
    // Front (+Z)
    {
      positions: [
        [cx - s, cy - s, cz + s],
        [cx - s, cy + s, cz + s],
        [cx + s, cy + s, cz + s],
        [cx - s, cy - s, cz + s],
        [cx + s, cy + s, cz + s],
        [cx + s, cy - s, cz + s],
      ],
      normal: [0, 0, 1],
    },
    // Back (-Z)
    {
      positions: [
        [cx + s, cy - s, cz - s],
        [cx + s, cy + s, cz - s],
        [cx - s, cy + s, cz - s],
        [cx + s, cy - s, cz - s],
        [cx - s, cy + s, cz - s],
        [cx - s, cy - s, cz - s],
      ],
      normal: [0, 0, -1],
    },
    // Right (+X)
    {
      positions: [
        [cx + s, cy - s, cz + s],
        [cx + s, cy + s, cz + s],
        [cx + s, cy + s, cz - s],
        [cx + s, cy - s, cz + s],
        [cx + s, cy + s, cz - s],
        [cx + s, cy - s, cz - s],
      ],
      normal: [1, 0, 0],
    },
    // Left (-X)
    {
      positions: [
        [cx - s, cy - s, cz - s],
        [cx - s, cy + s, cz - s],
        [cx - s, cy + s, cz + s],
        [cx - s, cy - s, cz - s],
        [cx - s, cy + s, cz + s],
        [cx - s, cy - s, cz + s],
      ],
      normal: [-1, 0, 0],
    },
  ];

  for (const face of faces) {
    const [nx, ny, nz] = face.normal;
    for (const pos of face.positions) {
      // stride: x, y, z, nx, ny, nz, animOffset, animSpeed
      verts.push(pos[0], pos[1], pos[2], nx, ny, nz, animOffset, animSpeed);
    }
  }

  return verts;
}

// ── Main mode ─────────────────────────────────────────────────────────

export function createCubeField(): WebGLMode {
  let cubeProgram: WebGLProgram | null = null;
  let cubeBuffer: WebGLBuffer | null = null;
  let cubeVertexCount = 0;
  let cubeProjLoc: WebGLUniformLocation | null = null;
  let cubeTimeLoc: WebGLUniformLocation | null = null;
  let cubeWireCenterLoc: WebGLUniformLocation | null = null;
  let cubeStepLoc: WebGLUniformLocation | null = null;
  let cubeMouseClipLoc: WebGLUniformLocation | null = null;
  let cubeMouseActiveLoc: WebGLUniformLocation | null = null;
  let cubeAspectLoc: WebGLUniformLocation | null = null;
  let cubeReducedMotionLoc: WebGLUniformLocation | null = null;

  // Full geometry kept in JS for bufferSubData restore
  let fullGeometryData: Float32Array | null = null;
  // Map from "ix,iy,iz" → float offset into the geometry buffer
  const cubeOffsets = new Map<string, number>();
  // Cubes currently zeroed out to avoid occluding the wireframe
  const zeroedCubes = new Set<string>();
  // 36 verts × 8 floats per cube
  const FLOATS_PER_CUBE = 36 * 8;
  const ZERO_CUBE = new Float32Array(FLOATS_PER_CUBE);
  let lastOcclusionKey = "";

  // Wireframe cube state
  let wireProgram: WebGLProgram | null = null;
  let wireBuffer: WebGLBuffer | null = null;
  let wireProjLoc: WebGLUniformLocation | null = null;
  let wireResolutionLoc: WebGLUniformLocation | null = null;

  // Glow billboard state
  let glowProgram: WebGLProgram | null = null;
  let glowBuffer: WebGLBuffer | null = null;
  let glowProjLoc: WebGLUniformLocation | null = null;
  let glowCenterLoc: WebGLUniformLocation | null = null;
  let glowSizeLoc: WebGLUniformLocation | null = null;
  let glowColorLoc: WebGLUniformLocation | null = null;
  let glowIntensityLoc: WebGLUniformLocation | null = null;

  // Grid lines: opaque lines through cube centers (vertical + diagonals)
  let lineProgram: WebGLProgram | null = null;
  let lineBuffer: WebGLBuffer | null = null;
  let lineVertexCount = 0;
  let lineProjLoc: WebGLUniformLocation | null = null;
  let lineResLoc: WebGLUniformLocation | null = null;
  let lineLineWidthLoc: WebGLUniformLocation | null = null;
  let lineColorLoc: WebGLUniformLocation | null = null;
  let lineSweepCenterLoc: WebGLUniformLocation | null = null;
  const LINE_WIDTH = 2.0; // pixels

  // Sweep state
  let sweepStartTime = 0.5;
  let sweepDirAngle = 0;
  let sweepDuration = 0;
  let nextSweepTime = 0.5;

  // Grid wireframe overlay: screen-space quad edges at every grid position
  let gridWireProgram: WebGLProgram | null = null;
  let gridWireBuffer: WebGLBuffer | null = null;
  let gridWireVertexCount = 0;
  let gridWireProjLoc: WebGLUniformLocation | null = null;
  let gridWireResLoc: WebGLUniformLocation | null = null;
  let gridWireLineWidthLoc: WebGLUniformLocation | null = null;
  let gridWireRippleCenterALoc: WebGLUniformLocation | null = null;
  let gridWireRippleTimeALoc: WebGLUniformLocation | null = null;
  let gridWireRippleCenterBLoc: WebGLUniformLocation | null = null;
  let gridWireRippleTimeBLoc: WebGLUniformLocation | null = null;
  let gridWireStepLoc: WebGLUniformLocation | null = null;
  let gridWireColorLoc: WebGLUniformLocation | null = null;
  let gridWireStaticModeLoc: WebGLUniformLocation | null = null;
  const gridWireClickPosLocs: (WebGLUniformLocation | null)[] = [];
  const gridWireClickAgeLocs: (WebGLUniformLocation | null)[] = [];
  let gridWireAspectLoc: WebGLUniformLocation | null = null;
  const GRID_WIRE_LINE_WIDTH = 1.5; // thinner than the dedicated wireframe

  // Ripple A state (row — same Z, spreads along X)
  let rippleACenterX = 0;
  let rippleACenterY = 0;
  let rippleACenterZ = 0;
  let rippleAStartTime = -999;
  let rippleAEndTime = 0;
  let nextRippleATime = 1.0;

  // Ripple B state (column — same X, spreads along Z)
  let rippleBCenterX = 0;
  let rippleBCenterY = 0;
  let rippleBCenterZ = 0;
  let rippleBStartTime = -999;
  let rippleBEndTime = 0;
  let nextRippleBTime = 1.6;

  // Click reveal state (ring buffer of 4 slots)
  const CLICK_SLOTS = 4;
  const clickXs = new Float32Array(CLICK_SLOTS);
  const clickYs = new Float32Array(CLICK_SLOTS);
  const clickTimes = new Float32Array(CLICK_SLOTS).fill(-999);
  let clickIndex = 0;

  // Filled face state for the dedicated wireframe cube
  let faceProgram: WebGLProgram | null = null;
  let faceBuffer: WebGLBuffer | null = null;
  let faceProjLoc: WebGLUniformLocation | null = null;

  // Wireframe cube: centered on a grid cube, 1.75× size so it clears corners
  // during rotation (need half-extent > inner cube diagonal = 0.5·√3 ≈ 0.866)
  const WIRE_POS_WIDE = { ix: 3, iy: -1, iz: 0 };
  const WIRE_POS_NARROW = { ix: 2, iy: -3, iz: 0 };
  let wirePos = WIRE_POS_WIDE;
  const WIRE_SIZE_MULT = 1.75;

  // Mouse tracking state
  let mouseX = 0;
  let mouseY = 0;
  let mouseActive = false;
  let mouseActiveSmooth = 0;
  let reducedMotion = false;

  const CUBE_SIZE = 1.0;
  // Step = cube size + gap (slightly wider to give wireframe room)
  const STEP = CUBE_SIZE * 2.8;

  // Grid extents (number of cubes along each half-axis)
  const GRID_X = 8;
  const GRID_Y = 5;
  const GRID_Z = 8;

  let seed = 42;
  const rand = () => {
    seed = (seed * 16807 + 0) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  // In this isometric projection (rotateY(π/4) then rotateX), the camera's
  // depth direction causes cubes along a specific diagonal from the wireframe
  // position to project to the same screen pixels, occluding the wireframe.
  // These cubes must be removed for the wireframe to render with depth test ON.
  function getOccludingKeys(
    tix: number,
    tiy: number,
    tiz: number,
  ): string[] {
    const keys: string[] = [];
    for (let d = 1; d <= 10; d++) {
      const ix = tix - d;
      const iy = tiy + d;
      const iz = tiz + d;
      if (
        ix < -GRID_X || ix > GRID_X ||
        iy < -GRID_Y || iy > GRID_Y ||
        iz < -GRID_Z || iz > GRID_Z
      ) break;
      keys.push(`${ix},${iy},${iz}`);
    }
    return keys;
  }

  // Zero out cubes that would occlude the wireframe at the given target,
  // restoring any previously zeroed cubes. Uses bufferSubData for efficiency.
  function updateOccludedCubes(
    gl: WebGLRenderingContext,
    tix: number,
    tiy: number,
    tiz: number,
  ) {
    const key = `${tix},${tiy},${tiz}`;
    if (key === lastOcclusionKey) return;
    lastOcclusionKey = key;

    if (!fullGeometryData || !cubeBuffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeBuffer);

    // Restore previously zeroed cubes
    for (const k of zeroedCubes) {
      const off = cubeOffsets.get(k);
      if (off !== undefined) {
        gl.bufferSubData(
          gl.ARRAY_BUFFER,
          off * 4,
          fullGeometryData.subarray(off, off + FLOATS_PER_CUBE),
        );
      }
    }
    zeroedCubes.clear();

    // Zero out new occluding cubes
    for (const k of getOccludingKeys(tix, tiy, tiz)) {
      const off = cubeOffsets.get(k);
      if (off !== undefined) {
        gl.bufferSubData(gl.ARRAY_BUFFER, off * 4, ZERO_CUBE);
        zeroedCubes.add(k);
      }
    }
  }

  function buildGeometry(): Float32Array {
    const allVerts: number[] = [];

    for (let ix = -GRID_X; ix <= GRID_X; ix++) {
      for (let iy = -GRID_Y; iy <= GRID_Y; iy++) {
        for (let iz = -GRID_Z; iz <= GRID_Z; iz++) {
          // Always consume RNG to keep positions stable regardless of skips
          const animOffset = rand() * Math.PI * 2;
          const animSpeed = 0.3 + rand() * 0.7;

          // Record the float offset for this cube before adding vertices
          cubeOffsets.set(`${ix},${iy},${iz}`, allVerts.length);

          const cx = ix * STEP;
          const cy = iy * STEP;
          const cz = iz * STEP;

          allVerts.push(
            ...buildCubeVertices(cx, cy, cz, CUBE_SIZE, animOffset, animSpeed),
          );
        }
      }
    }

    return new Float32Array(allVerts);
  }

  return {
    init(gl) {
      cubeProgram = createProgram(gl, CUBE_VERT, CUBE_FRAG);

      const data = buildGeometry();
      fullGeometryData = data;
      cubeVertexCount = data.length / 8; // 8 floats per vertex

      cubeBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, cubeBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);

      cubeProjLoc = gl.getUniformLocation(cubeProgram, "uProjection");
      cubeTimeLoc = gl.getUniformLocation(cubeProgram, "uTime");
      cubeWireCenterLoc = gl.getUniformLocation(cubeProgram, "uWireCenter");
      cubeStepLoc = gl.getUniformLocation(cubeProgram, "uStep");
      cubeMouseClipLoc = gl.getUniformLocation(cubeProgram, "uMouseClip");
      cubeMouseActiveLoc = gl.getUniformLocation(cubeProgram, "uMouseActive");
      cubeAspectLoc = gl.getUniformLocation(cubeProgram, "uAspect");
      cubeReducedMotionLoc = gl.getUniformLocation(
        cubeProgram,
        "uReducedMotion",
      );

      // Zero out the initial occluding cubes for the default wireframe position
      lastOcclusionKey = "";
      updateOccludedCubes(gl, wirePos.ix, wirePos.iy, wirePos.iz);

      // Wireframe program + buffer (built at origin; shader rotates + translates)
      wireProgram = createProgram(gl, WIRE_VERT, WIRE_FRAG);
      const wireData = buildWireframeBuffer(
        0,
        0,
        0,
        CUBE_SIZE * WIRE_SIZE_MULT,
      );
      wireBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, wireBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, wireData, gl.STATIC_DRAW);

      wireProjLoc = gl.getUniformLocation(wireProgram, "uProjection");
      wireResolutionLoc = gl.getUniformLocation(wireProgram, "uResolution");

      // Filled faces program + buffer (cube at origin, translated by shader)
      faceProgram = createProgram(gl, FACE_VERT, FACE_FRAG);
      const fs = (CUBE_SIZE * WIRE_SIZE_MULT) / 2;
      // deno-fmt-ignore
      const faceData = new Float32Array([
        // -Y (bottom, CW winding for gl.frontFace(CW))
        -fs,-fs,+fs, +fs,-fs,+fs, +fs,-fs,-fs, -fs,-fs,+fs, +fs,-fs,-fs, -fs,-fs,-fs,
        // -X (left)
        -fs,-fs,-fs, -fs,+fs,-fs, -fs,+fs,+fs, -fs,-fs,-fs, -fs,+fs,+fs, -fs,-fs,+fs,
        // +Z (front)
        -fs,-fs,+fs, -fs,+fs,+fs, +fs,+fs,+fs, -fs,-fs,+fs, +fs,+fs,+fs, +fs,-fs,+fs,
        // +Y (top)
        -fs,+fs,-fs, +fs,+fs,-fs, +fs,+fs,+fs, -fs,+fs,-fs, +fs,+fs,+fs, -fs,+fs,+fs,
        // +X (right)
        +fs,-fs,+fs, +fs,+fs,+fs, +fs,+fs,-fs, +fs,-fs,+fs, +fs,+fs,-fs, +fs,-fs,-fs,
        // -Z (back)
        +fs,-fs,-fs, +fs,+fs,-fs, -fs,+fs,-fs, +fs,-fs,-fs, -fs,+fs,-fs, -fs,-fs,-fs,
      ]);
      faceBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, faceBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, faceData, gl.STATIC_DRAW);

      faceProjLoc = gl.getUniformLocation(faceProgram, "uProjection");

      // Glow billboard: unit quad from -1 to 1
      glowProgram = createProgram(gl, GLOW_VERT, GLOW_FRAG);
      // deno-fmt-ignore
      const quadData = new Float32Array([
        -1, -1,   1, -1,   1,  1,
        -1, -1,   1,  1,  -1,  1,
      ]);
      glowBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, glowBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, quadData, gl.STATIC_DRAW);

      glowProjLoc = gl.getUniformLocation(glowProgram, "uProjection");
      glowCenterLoc = gl.getUniformLocation(glowProgram, "uWireCenter");
      glowSizeLoc = gl.getUniformLocation(glowProgram, "uGlowSize");
      glowColorLoc = gl.getUniformLocation(glowProgram, "uGlowColor");
      glowIntensityLoc = gl.getUniformLocation(glowProgram, "uGlowIntensity");

      // Grid lines: vertical + diagonal lines through cube centers
      lineProgram = createProgram(gl, LINE_VERT, LINE_FRAG);
      const lineData = buildGridLines(STEP, GRID_X, GRID_Y, GRID_Z);
      lineVertexCount = lineData.length / 8; // 8 floats per vertex
      lineBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, lineData, gl.STATIC_DRAW);

      lineProjLoc = gl.getUniformLocation(lineProgram, "uProjection");
      lineResLoc = gl.getUniformLocation(lineProgram, "uResolution");
      lineLineWidthLoc = gl.getUniformLocation(lineProgram, "uLineWidth");
      lineColorLoc = gl.getUniformLocation(lineProgram, "uColor");
      lineSweepCenterLoc = gl.getUniformLocation(lineProgram, "uSweepCenter");

      // Grid wireframe overlay: screen-space quad edges for every grid cube.
      // 1.75× so the wireframe wraps around the solid cube with back edges
      // genuinely behind it in depth.
      gridWireProgram = createProgram(gl, GRID_WIRE_VERT, GRID_WIRE_FRAG);
      const GRID_WIRE_SIZE_MULT = 1.75;
      const gridWireData = buildGridWireframeBuffer(
        STEP,
        CUBE_SIZE,
        GRID_WIRE_SIZE_MULT,
        GRID_X,
        GRID_Y,
        GRID_Z,
      );
      gridWireVertexCount = gridWireData.length / 11; // 11 floats per vertex
      gridWireBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, gridWireBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, gridWireData, gl.STATIC_DRAW);

      gridWireProjLoc = gl.getUniformLocation(gridWireProgram, "uProjection");
      gridWireResLoc = gl.getUniformLocation(gridWireProgram, "uResolution");
      gridWireLineWidthLoc = gl.getUniformLocation(
        gridWireProgram,
        "uLineWidth",
      );
      gridWireRippleCenterALoc = gl.getUniformLocation(
        gridWireProgram,
        "uRippleCenterA",
      );
      gridWireRippleTimeALoc = gl.getUniformLocation(
        gridWireProgram,
        "uRippleTimeA",
      );
      gridWireRippleCenterBLoc = gl.getUniformLocation(
        gridWireProgram,
        "uRippleCenterB",
      );
      gridWireRippleTimeBLoc = gl.getUniformLocation(
        gridWireProgram,
        "uRippleTimeB",
      );
      gridWireStepLoc = gl.getUniformLocation(gridWireProgram, "uStep");
      gridWireColorLoc = gl.getUniformLocation(gridWireProgram, "uColor");
      gridWireStaticModeLoc = gl.getUniformLocation(
        gridWireProgram,
        "uStaticMode",
      );
      for (let i = 0; i < CLICK_SLOTS; i++) {
        gridWireClickPosLocs[i] = gl.getUniformLocation(
          gridWireProgram,
          `uClickPos[${i}]`,
        );
        gridWireClickAgeLocs[i] = gl.getUniformLocation(
          gridWireProgram,
          `uClickAge[${i}]`,
        );
      }
      gridWireAspectLoc = gl.getUniformLocation(gridWireProgram, "uAspect");
    },

    render(gl, time, _deltaTime) {
      if (!cubeProgram) return;

      // ── Fixed wireframe position ──
      const wcx = wirePos.ix * STEP;
      const wcy = wirePos.iy * STEP;
      const wcz = wirePos.iz * STEP;

      // Occlusion only needs to track the fixed wireframe position
      updateOccludedCubes(gl, wirePos.ix, wirePos.iy, wirePos.iz);

      // ── Clear ──
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // ── Draw solid cube grid (depth ON, blended) ──
      gl.enable(gl.DEPTH_TEST);
      gl.depthMask(true);
      gl.enable(gl.CULL_FACE);
      gl.cullFace(gl.BACK);
      gl.frontFace(gl.CW);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      gl.useProgram(cubeProgram);
      gl.bindBuffer(gl.ARRAY_BUFFER, cubeBuffer);

      const stride = 8 * 4; // 8 floats × 4 bytes
      const posLoc = gl.getAttribLocation(cubeProgram, "aPosition");
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, stride, 0);

      const normLoc = gl.getAttribLocation(cubeProgram, "aNormal");
      gl.enableVertexAttribArray(normLoc);
      gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, stride, 12);

      const offsetLoc = gl.getAttribLocation(cubeProgram, "aAnimOffset");
      gl.enableVertexAttribArray(offsetLoc);
      gl.vertexAttribPointer(offsetLoc, 1, gl.FLOAT, false, stride, 24);

      const speedLoc = gl.getAttribLocation(cubeProgram, "aAnimSpeed");
      gl.enableVertexAttribArray(speedLoc);
      gl.vertexAttribPointer(speedLoc, 1, gl.FLOAT, false, stride, 28);

      // Smooth fade for mouse active state
      const target = mouseActive ? 1.0 : 0.0;
      const fadeSpeed = mouseActive ? 8.0 : 3.0;
      mouseActiveSmooth += (target - mouseActiveSmooth) *
        Math.min(1.0, _deltaTime * fadeSpeed);

      gl.uniform1f(cubeTimeLoc, time);
      gl.uniform3f(cubeWireCenterLoc, wcx, wcy, wcz);
      gl.uniform2f(cubeMouseClipLoc, mouseX, mouseY);
      gl.uniform1f(cubeMouseActiveLoc, mouseActiveSmooth);
      gl.uniform1f(cubeReducedMotionLoc, reducedMotion ? 1.0 : 0.0);
      gl.uniform1f(
        cubeAspectLoc,
        gl.drawingBufferWidth / gl.drawingBufferHeight,
      );
      gl.drawArrays(gl.TRIANGLES, 0, cubeVertexCount);

      // ── Grid lines (behind cubes, shimmer effect) ──
      if (!reducedMotion && time >= nextSweepTime) {
        sweepDirAngle = Math.random() * Math.PI * 2;
        const aspect = gl.drawingBufferWidth / gl.drawingBufferHeight;
        const travelDist = 2 * (aspect + 1.5);
        sweepDuration = travelDist / 1.4;
        sweepStartTime = time;
        nextSweepTime = time + sweepDuration + 0.1 + Math.random() * 0.8;
      }

      // Compute sweep center in clip space
      const sweepProgress = Math.min(
        (time - sweepStartTime) / sweepDuration,
        1,
      );
      const aspect = gl.drawingBufferWidth / gl.drawingBufferHeight;
      const travelDist = 2 * (aspect + 1.5);
      const dirX = Math.cos(sweepDirAngle);
      const dirY = Math.sin(sweepDirAngle);
      const centerVisX = -dirX * (travelDist / 2) +
        dirX * travelDist * sweepProgress;
      const centerVisY = -dirY * (travelDist / 2) +
        dirY * travelDist * sweepProgress;
      const sweepCenterClipX = centerVisX / aspect;
      const sweepCenterClipY = centerVisY;

      if (lineProgram && !reducedMotion) {
        gl.enable(gl.DEPTH_TEST);
        gl.depthMask(false); // read depth but don't write
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); // premultiplied
        gl.disable(gl.CULL_FACE);

        gl.useProgram(lineProgram);
        gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);

        const lStride = 8 * 4;
        const lEndALoc = gl.getAttribLocation(lineProgram, "aEndA");
        gl.enableVertexAttribArray(lEndALoc);
        gl.vertexAttribPointer(lEndALoc, 3, gl.FLOAT, false, lStride, 0);

        const lEndBLoc = gl.getAttribLocation(lineProgram, "aEndB");
        gl.enableVertexAttribArray(lEndBLoc);
        gl.vertexAttribPointer(lEndBLoc, 3, gl.FLOAT, false, lStride, 12);

        const lWhichLoc = gl.getAttribLocation(lineProgram, "aWhichEnd");
        gl.enableVertexAttribArray(lWhichLoc);
        gl.vertexAttribPointer(lWhichLoc, 1, gl.FLOAT, false, lStride, 24);

        const lSideLoc = gl.getAttribLocation(lineProgram, "aSide");
        gl.enableVertexAttribArray(lSideLoc);
        gl.vertexAttribPointer(lSideLoc, 1, gl.FLOAT, false, lStride, 28);

        gl.uniform2f(
          lineResLoc,
          gl.drawingBufferWidth,
          gl.drawingBufferHeight,
        );
        gl.uniform1f(lineLineWidthLoc, LINE_WIDTH);
        gl.uniform2f(lineSweepCenterLoc, sweepCenterClipX, sweepCenterClipY);
        gl.uniform4f(lineColorLoc, 0.4, 0.761, 1.0, 1.0);
        gl.drawArrays(gl.TRIANGLES, 0, lineVertexCount);

        gl.depthMask(true);
      }

      // ── Grid wireframe overlay: two independent ripples ──
      // Ripple A: row (same Z, spreads along X)
      if (!reducedMotion && time >= nextRippleATime) {
        const rangeX = Math.floor(GRID_X * 2 / 3);
        const rangeZ = Math.floor(GRID_Z * 2 / 3);
        rippleACenterX = (Math.floor(Math.random() * (rangeX * 2 + 1)) -
          rangeX) * STEP;
        rippleACenterY = 0;
        rippleACenterZ = (Math.floor(Math.random() * (rangeZ * 2 + 1)) -
          rangeZ) * STEP;
        rippleAStartTime = time;
        const maxDistA = GRID_X * 2;
        const rippleADuration = maxDistA * 0.14 + 2.3;
        rippleAEndTime = time + rippleADuration;
        nextRippleATime = time + rippleADuration + Math.random() * 0.8;
      }
      // Ripple B: column (same X, spreads along Z)
      if (!reducedMotion && time >= nextRippleBTime) {
        const rangeX = Math.floor(GRID_X * 2 / 3);
        const rangeZ = Math.floor(GRID_Z * 2 / 3);
        rippleBCenterX = (Math.floor(Math.random() * (rangeX * 2 + 1)) -
          rangeX) * STEP;
        rippleBCenterY = 0;
        rippleBCenterZ = (Math.floor(Math.random() * (rangeZ * 2 + 1)) -
          rangeZ) * STEP;
        rippleBStartTime = time;
        const maxDistB = GRID_Z * 2;
        const rippleBDuration = maxDistB * 0.14 + 2.3;
        rippleBEndTime = time + rippleBDuration;
        nextRippleBTime = time + rippleBDuration + Math.random() * 0.8;
      }
      // Draw while either ripple is active, or always in reduced motion (static cross)
      const now = performance.now() / 1000;
      const clickActive = clickTimes.some((t) => (now - t) < 4.0);
      const drawGridWire = gridWireProgram &&
        (reducedMotion || time < rippleAEndTime || time < rippleBEndTime ||
          clickActive);
      if (drawGridWire) {
        gl.disable(gl.DEPTH_TEST);
        gl.depthMask(false);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); // premultiplied alpha
        gl.disable(gl.CULL_FACE);

        gl.useProgram(gridWireProgram);
        gl.bindBuffer(gl.ARRAY_BUFFER, gridWireBuffer);

        const gwStride = 11 * 4; // 11 floats per vertex
        const gwEndALoc = gl.getAttribLocation(gridWireProgram, "aEndA");
        if (gwEndALoc >= 0) {
          gl.enableVertexAttribArray(gwEndALoc);
          gl.vertexAttribPointer(gwEndALoc, 3, gl.FLOAT, false, gwStride, 0);
        }

        const gwEndBLoc = gl.getAttribLocation(gridWireProgram, "aEndB");
        if (gwEndBLoc >= 0) {
          gl.enableVertexAttribArray(gwEndBLoc);
          gl.vertexAttribPointer(gwEndBLoc, 3, gl.FLOAT, false, gwStride, 12);
        }

        const gwWhichLoc = gl.getAttribLocation(gridWireProgram, "aWhichEnd");
        if (gwWhichLoc >= 0) {
          gl.enableVertexAttribArray(gwWhichLoc);
          gl.vertexAttribPointer(
            gwWhichLoc,
            1,
            gl.FLOAT,
            false,
            gwStride,
            24,
          );
        }

        const gwSideLoc = gl.getAttribLocation(gridWireProgram, "aSide");
        if (gwSideLoc >= 0) {
          gl.enableVertexAttribArray(gwSideLoc);
          gl.vertexAttribPointer(gwSideLoc, 1, gl.FLOAT, false, gwStride, 28);
        }

        const gwCenterLoc = gl.getAttribLocation(
          gridWireProgram,
          "aCubeCenter",
        );
        if (gwCenterLoc >= 0) {
          gl.enableVertexAttribArray(gwCenterLoc);
          gl.vertexAttribPointer(
            gwCenterLoc,
            3,
            gl.FLOAT,
            false,
            gwStride,
            32,
          );
        }

        gl.uniform2f(
          gridWireResLoc,
          gl.drawingBufferWidth,
          gl.drawingBufferHeight,
        );
        gl.uniform1f(gridWireLineWidthLoc, GRID_WIRE_LINE_WIDTH);

        gl.uniform1f(gridWireStaticModeLoc, reducedMotion ? 1.0 : 0.0);
        if (reducedMotion) {
          // Static cross centered on the wireframe cube
          gl.uniform3f(gridWireRippleCenterALoc, wcx, wcy, wcz);
          gl.uniform1f(gridWireRippleTimeALoc, 0.0);
          gl.uniform3f(gridWireRippleCenterBLoc, wcx, wcy, wcz);
          gl.uniform1f(gridWireRippleTimeBLoc, 0.0);
        } else {
          gl.uniform3f(
            gridWireRippleCenterALoc,
            rippleACenterX,
            rippleACenterY,
            rippleACenterZ,
          );
          gl.uniform1f(gridWireRippleTimeALoc, time - rippleAStartTime);
          gl.uniform3f(
            gridWireRippleCenterBLoc,
            rippleBCenterX,
            rippleBCenterY,
            rippleBCenterZ,
          );
          gl.uniform1f(gridWireRippleTimeBLoc, time - rippleBStartTime);
        }

        gl.uniform1f(gridWireStepLoc, STEP);
        gl.uniform3f(gridWireColorLoc, 0.4, 0.761, 1.0); // deploy-300
        for (let i = 0; i < CLICK_SLOTS; i++) {
          gl.uniform2f(gridWireClickPosLocs[i], clickXs[i], clickYs[i]);
          gl.uniform1f(gridWireClickAgeLocs[i], now - clickTimes[i]);
        }
        gl.uniform1f(
          gridWireAspectLoc,
          gl.drawingBufferWidth / gl.drawingBufferHeight,
        );
        gl.drawArrays(gl.TRIANGLES, 0, gridWireVertexCount);
      }

      gl.depthMask(false);
      gl.disable(gl.CULL_FACE);

      // ── Glow billboard (depth OFF, additive blend) ──
      if (glowProgram) {
        gl.disable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE); // additive (premultiplied)

        gl.useProgram(glowProgram);
        gl.bindBuffer(gl.ARRAY_BUFFER, glowBuffer);

        const qLoc = gl.getAttribLocation(glowProgram, "aQuadPos");
        gl.enableVertexAttribArray(qLoc);
        gl.vertexAttribPointer(qLoc, 2, gl.FLOAT, false, 0, 0);

        gl.uniform3f(glowCenterLoc, wcx, wcy, wcz);
        // deploy-300
        gl.uniform3f(glowColorLoc, 0.4, 0.761, 1.0);

        // Large soft outer glow
        gl.uniform1f(glowSizeLoc, 22.0);
        gl.uniform1f(glowIntensityLoc, 0.2);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // Mid glow
        gl.uniform1f(glowSizeLoc, 12.0);
        gl.uniform1f(glowIntensityLoc, 0.16);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // Inner glow
        gl.uniform1f(glowSizeLoc, 6.0);
        gl.uniform1f(glowIntensityLoc, 0.25);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      gl.depthMask(true);
      gl.disable(gl.BLEND);
    },

    resize(gl, width, height) {
      if (!cubeProgram) return;
      const aspect = width / height;

      // On narrow screens, move wireframe to a lower, more centered position
      const isNarrow = aspect < 1.3;
      wirePos = isNarrow ? WIRE_POS_NARROW : WIRE_POS_WIDE;
      const proj = createShallowIsometricProjection(
        aspect,
        6.0,
        Math.atan(1 / Math.sqrt(2)),
        Math.PI / 4,
      );

      // Shift the scene upward on narrow screens so the wireframe cube
      // isn't clipped at the bottom edge. proj[13] is the Y translation
      // in clip space (column-major mat4).
      if (isNarrow) {
        proj[13] += 0.15;
      }

      gl.useProgram(cubeProgram);
      gl.uniformMatrix4fv(cubeProjLoc, false, proj);
      gl.uniform1f(cubeStepLoc, STEP);

      if (wireProgram) {
        gl.useProgram(wireProgram);
        gl.uniformMatrix4fv(wireProjLoc, false, proj);
        gl.uniform2f(wireResolutionLoc, width, height);
      }

      if (glowProgram) {
        gl.useProgram(glowProgram);
        gl.uniformMatrix4fv(glowProjLoc, false, proj);
      }

      if (faceProgram) {
        gl.useProgram(faceProgram);
        gl.uniformMatrix4fv(faceProjLoc, false, proj);
      }

      if (lineProgram) {
        gl.useProgram(lineProgram);
        gl.uniformMatrix4fv(lineProjLoc, false, proj);
        gl.uniform2f(lineResLoc, width, height);
      }

      if (gridWireProgram) {
        gl.useProgram(gridWireProgram);
        gl.uniformMatrix4fv(gridWireProjLoc, false, proj);
        gl.uniform2f(gridWireResLoc, width, height);
      }
    },

    setReducedMotion(enabled: boolean) {
      reducedMotion = enabled;
    },

    handleClick(cx: number, cy: number) {
      clickXs[clickIndex] = cx;
      clickYs[clickIndex] = cy;
      clickTimes[clickIndex] = performance.now() / 1000;
      clickIndex = (clickIndex + 1) % CLICK_SLOTS;
    },

    setMousePosition(x: number, y: number) {
      if (x > 10) {
        mouseActive = false;
      } else {
        mouseX = x;
        mouseY = y;
        mouseActive = true;
      }
    },

    cleanup(gl) {
      if (cubeBuffer) gl.deleteBuffer(cubeBuffer);
      if (cubeProgram) gl.deleteProgram(cubeProgram);
      if (wireBuffer) gl.deleteBuffer(wireBuffer);
      if (wireProgram) gl.deleteProgram(wireProgram);
      if (glowBuffer) gl.deleteBuffer(glowBuffer);
      if (glowProgram) gl.deleteProgram(glowProgram);
      if (faceBuffer) gl.deleteBuffer(faceBuffer);
      if (faceProgram) gl.deleteProgram(faceProgram);
      if (lineBuffer) gl.deleteBuffer(lineBuffer);
      if (lineProgram) gl.deleteProgram(lineProgram);
      if (gridWireBuffer) gl.deleteBuffer(gridWireBuffer);
      if (gridWireProgram) gl.deleteProgram(gridWireProgram);
      cubeBuffer = null;
      cubeProgram = null;
      fullGeometryData = null;
      wireBuffer = null;
      wireProgram = null;
      faceBuffer = null;
      faceProgram = null;
      lineBuffer = null;
      lineProgram = null;
      gridWireBuffer = null;
      gridWireProgram = null;
      glowBuffer = null;
      glowProgram = null;
    },
  };
}
