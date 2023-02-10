export const clamp = (min: number, val: number, max:number): number => {
	return Math.min(max, Math.max(val, min))
}

export default clamp