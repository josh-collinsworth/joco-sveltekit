<script lang="ts">
	import { onMount } from 'svelte';
	import { createWebGLContext, resizeCanvas } from '$lib/utils/webgl/context';
	import { createCubeField } from '$lib/utils/webgl/modes/cubeField';

	let { class: className = '' }: { class?: string } = $props();

	let canvas = $state<HTMLCanvasElement>();

	onMount(() => {
		if (!canvas) return;

		const gl = createWebGLContext(canvas);
		if (!gl) return;

		const mode = createCubeField();

		resizeCanvas(canvas, gl);
		mode.init(gl, canvas);
		mode.resize(gl, canvas.width, canvas.height);

		const reducedMotion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
		if (reducedMotion) {
			mode.setReducedMotion?.(true);
		}

		let rafId = 0;
		let lastTime = 0;
		let contextLost = false;
		let isVisible = true;

		const animate = (timestamp: number) => {
			if (contextLost) return;
			const time = timestamp / 1000;
			const delta = lastTime ? time - lastTime : 0;
			lastTime = time;

			if (isVisible) {
				mode.render(gl, time, delta);
			}

			rafId = requestAnimationFrame(animate);
		};

		rafId = requestAnimationFrame(animate);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					isVisible = entry.isIntersecting;
				}
			},
			{ threshold: 0 }
		);
		observer.observe(canvas);

		const resizeObs = new ResizeObserver(() => {
			if (resizeCanvas(canvas!, gl)) {
				mode.resize(gl, canvas!.width, canvas!.height);
			}
		});
		resizeObs.observe(canvas);

		const MARGIN = 100;
		const handleMouseMove = (e: MouseEvent) => {
			if (!mode.setMousePosition) return;
			const rect = canvas!.getBoundingClientRect();

			if (
				e.clientX < rect.left - MARGIN ||
				e.clientX > rect.right + MARGIN ||
				e.clientY < rect.top - MARGIN ||
				e.clientY > rect.bottom + MARGIN
			) {
				mode.setMousePosition(99, 99);
				return;
			}

			const clipX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
			const clipY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
			mode.setMousePosition(clipX, clipY);
		};
		const handleMouseLeave = () => {
			mode.setMousePosition?.(99, 99);
		};
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseleave', handleMouseLeave);

		let pointerDown = false;
		const triggerClick = (clientX: number, clientY: number) => {
			if (!mode.handleClick) return;
			const rect = canvas!.getBoundingClientRect();
			if (
				clientX >= rect.left &&
				clientX <= rect.right &&
				clientY >= rect.top &&
				clientY <= rect.bottom
			) {
				const clipX = ((clientX - rect.left) / rect.width) * 2 - 1;
				const clipY = -(((clientY - rect.top) / rect.height) * 2 - 1);
				mode.handleClick(clipX, clipY);
			}
		};
		const handlePointerDown = (e: MouseEvent) => {
			pointerDown = true;
			triggerClick(e.clientX, e.clientY);
		};
		const handlePointerMove = (e: MouseEvent) => {
			if (pointerDown) triggerClick(e.clientX, e.clientY);
		};
		const handlePointerUp = () => {
			pointerDown = false;
		};
		const handleTouchStart = (e: TouchEvent) => {
			pointerDown = true;
			triggerClick(e.touches[0].clientX, e.touches[0].clientY);
		};
		const handleTouchMove = (e: TouchEvent) => {
			if (pointerDown) triggerClick(e.touches[0].clientX, e.touches[0].clientY);
		};
		const handleTouchEnd = () => {
			pointerDown = false;
		};
		document.addEventListener('mousedown', handlePointerDown);
		document.addEventListener('mousemove', handlePointerMove);
		document.addEventListener('mouseup', handlePointerUp);
		document.addEventListener('touchstart', handleTouchStart);
		document.addEventListener('touchmove', handleTouchMove);
		document.addEventListener('touchend', handleTouchEnd);

		const handleContextLost = (e: Event) => {
			e.preventDefault();
			contextLost = true;
			cancelAnimationFrame(rafId);
		};
		const handleContextRestored = () => {
			contextLost = false;
			mode.init(gl, canvas!);
			mode.resize(gl, canvas!.width, canvas!.height);
			lastTime = 0;
			rafId = requestAnimationFrame(animate);
		};
		canvas.addEventListener('webglcontextlost', handleContextLost);
		canvas.addEventListener('webglcontextrestored', handleContextRestored);

		return () => {
			cancelAnimationFrame(rafId);
			observer.disconnect();
			resizeObs.disconnect();
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseleave', handleMouseLeave);
			document.removeEventListener('mousedown', handlePointerDown);
			document.removeEventListener('mousemove', handlePointerMove);
			document.removeEventListener('mouseup', handlePointerUp);
			document.removeEventListener('touchstart', handleTouchStart);
			document.removeEventListener('touchmove', handleTouchMove);
			document.removeEventListener('touchend', handleTouchEnd);
			canvas!.removeEventListener('webglcontextlost', handleContextLost);
			canvas!.removeEventListener('webglcontextrestored', handleContextRestored);
			mode.cleanup(gl);
		};
	});
</script>

<canvas bind:this={canvas} class={className} aria-hidden="true"></canvas>
