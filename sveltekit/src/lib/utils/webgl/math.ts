export function mat4Identity(): Float32Array {
  return new Float32Array([
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
  ]);
}

/**
 * Multiply two 4x4 matrices stored in **column-major** order (WebGL convention).
 * Returns C = A * B so that for a vertex v, (A * B) * v == A * (B * v).
 */
export function mat4Multiply(a: Float32Array, b: Float32Array): Float32Array {
  const out = new Float32Array(16);
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      out[c * 4 + r] = a[r] * b[c * 4] +
        a[4 + r] * b[c * 4 + 1] +
        a[8 + r] * b[c * 4 + 2] +
        a[12 + r] * b[c * 4 + 3];
    }
  }
  return out;
}

export function mat4RotateX(angle: number): Float32Array {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return new Float32Array([
    1,
    0,
    0,
    0,
    0,
    c,
    s,
    0,
    0,
    -s,
    c,
    0,
    0,
    0,
    0,
    1,
  ]);
}

export function mat4RotateY(angle: number): Float32Array {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return new Float32Array([
    c,
    0,
    -s,
    0,
    0,
    1,
    0,
    0,
    s,
    0,
    c,
    0,
    0,
    0,
    0,
    1,
  ]);
}

export function mat4RotateZ(angle: number): Float32Array {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return new Float32Array([
    c,
    s,
    0,
    0,
    -s,
    c,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
  ]);
}

export function mat4Scale(
  sx: number,
  sy: number,
  sz: number,
): Float32Array {
  return new Float32Array([
    sx,
    0,
    0,
    0,
    0,
    sy,
    0,
    0,
    0,
    0,
    sz,
    0,
    0,
    0,
    0,
    1,
  ]);
}

export function mat4Ortho(
  left: number,
  right: number,
  bottom: number,
  top: number,
  near: number,
  far: number,
): Float32Array {
  const lr = 1 / (left - right);
  const bt = 1 / (bottom - top);
  const nf = 1 / (near - far);
  return new Float32Array([
    -2 * lr,
    0,
    0,
    0,
    0,
    -2 * bt,
    0,
    0,
    0,
    0,
    2 * nf,
    0,
    (left + right) * lr,
    (top + bottom) * bt,
    (near + far) * nf,
    1,
  ]);
}

/**
 * Create an isometric view-projection matrix.
 * Rotates Y by 45 degrees, then X by ~30 degrees, then applies ortho projection.
 */
export function createIsometricProjection(
  aspect: number,
  scale: number = 1,
): Float32Array {
  const rotY = mat4RotateY(Math.PI / 4);
  const rotX = mat4RotateX(Math.atan(1 / Math.sqrt(2)));
  const view = mat4Multiply(rotX, rotY);

  const halfW = scale * aspect;
  const halfH = scale;
  const ortho = mat4Ortho(-halfW, halfW, -halfH, halfH, -10, 10);

  return mat4Multiply(ortho, view);
}

/**
 * Create a shallow isometric projection with configurable tilt.
 * xAngle controls how steeply we look down (radians). Lower = less squished.
 * yAngle controls horizontal rotation (radians). PI/4 = classic corner view.
 */
export function createShallowIsometricProjection(
  aspect: number,
  scale: number,
  xAngle: number,
  yAngle: number,
): Float32Array {
  const rotY = mat4RotateY(yAngle);
  const rotX = mat4RotateX(xAngle);
  const view = mat4Multiply(rotX, rotY);

  const halfW = scale * aspect;
  const halfH = scale;
  const ortho = mat4Ortho(-halfW, halfW, -halfH, halfH, -50, 50);

  return mat4Multiply(ortho, view);
}
