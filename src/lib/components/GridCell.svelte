<script lang="ts">
	import { TIMING_DURATION } from '$lib/data/constants'
	import { onMount } from 'svelte'

	interface Props {
		color?: string
		out?: boolean
		gridWidth?: number
		base: number
	}

	let {
		color = 'transparent',
		out = false,
		gridWidth = 0,
		base
	}: Props = $props()

	let size = $derived(base / 2)

	onMount(() => {
		const cellSize = Math.random()
		if (cellSize > 0.95) {
			size = base * 1.5
		} else if (cellSize > 0.8) {
			size = base
		}
	})

	const randomDelay = (): string => {
		return Math.random() * 0.5 + 's'
	}

	const randomX = (): string => {
		const randomLeftValue = Math.floor((Math.random() * gridWidth) / base)
		return `${randomLeftValue * base}px`
	}

	const randomDrop = (): string => {
		const drop = Math.random() * 100
		if (drop > 93) {
			return 'var(--base)'
		} else if (drop > 80) {
			return 'calc(var(--base) * 0.5)'
		} else if (drop > 60) {
			return 'calc(var(--base) * -0.5)'
		} else if (drop > 40) {
			return 'calc(var(--base) * -1)'
		}
		return '0'
	}

	const randomTiming = (): number => {
		return Math.floor(Math.random() * TIMING_DURATION * 1.2)
	}
</script>

<template>
	{#key randomTiming()}
		<div
			class="cell"
			class:out
			style="
				--base: {base}px;
				background: {color};
				width: {size}px;
				height: {size}px;
				animation-delay: {randomDelay()};
				top: {randomDrop()};
				left: {randomX()};
			"
		></div>
	{/key}
</template>

<style>
	.cell {
		opacity: 0;
		mix-blend-mode: overlay;
		position: absolute;
		animation: fade_in 0.36s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;

		&.out {
			opacity: 1;
			animation: fade_out 0.36s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation-name: reduce_motion_fade_out;
				animation-duration: 0.2s;
				animation-timing-function: ease-out;
			}
		}

		@media (prefers-reduced-motion: reduce) {
			opacity: 0;
			animation-name: reduce_motion_fade;
			animation-duration: 0.2s;
			animation-timing-function: ease-in;
		}
	}

	@keyframes fade_in {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade_out {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-12px);
		}
	}

	@keyframes reduce_motion_fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes reduce_motion_fade_out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
