export interface WebGLMode {
  init(gl: WebGLRenderingContext, canvas: HTMLCanvasElement): void;
  render(gl: WebGLRenderingContext, time: number, deltaTime: number): void;
  resize(gl: WebGLRenderingContext, width: number, height: number): void;
  cleanup(gl: WebGLRenderingContext): void;
  setMousePosition?(x: number, y: number): void;
  setReducedMotion?(enabled: boolean): void;
  handleClick?(clipX: number, clipY: number): void;
}
