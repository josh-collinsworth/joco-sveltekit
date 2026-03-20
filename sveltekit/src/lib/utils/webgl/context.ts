const MAX_DPR = 2;

export function createWebGLContext(
  canvas: HTMLCanvasElement,
): WebGLRenderingContext | null {
  const opts: WebGLContextAttributes = {
    alpha: true,
    antialias: true,
    premultipliedAlpha: true,
  };
  return (canvas.getContext("webgl", opts) ??
    canvas.getContext("experimental-webgl", opts)) as
      | WebGLRenderingContext
      | null;
}

/**
 * Resize canvas to match its display size. Returns true if size changed.
 */
export function resizeCanvas(
  canvas: HTMLCanvasElement,
  gl: WebGLRenderingContext,
): boolean {
  const dpr = Math.min(globalThis.devicePixelRatio || 1, MAX_DPR);
  const width = Math.floor(canvas.clientWidth * dpr);
  const height = Math.floor(canvas.clientHeight * dpr);

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
    return true;
  }
  return false;
}
