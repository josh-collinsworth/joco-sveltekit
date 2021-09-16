<script lang="ts">
	import { prefersReducedMotion } from '$lib/assets/js/store'
  import { TIMING_DURATION } from '$lib/assets/js/constants'
  import { onMount } from 'svelte'
	
  export let color: string = 'transparent'
	export let out: boolean = false

  let size: number = 1

  onMount((): void => {
		const cellSize = Math.random()
		if (cellSize > 0.95) {
			size = 3
		} else if (cellSize > 0.8) {
			size = 2
		}
  })

  const randomDelay = (): string => {
    return Math.random() * .5 + "s"
  }

  const randomDrop = (): string => {
    const drop = Math.random() * 100
			if (drop > 93) {
				return '1rem'
			} else if (drop > 84) {
				return '.5rem'
			} else if (drop > 77) {
				return '-.5rem'
			} else if (drop > 70) {
				return '-1rem'
			}
		return '0'
  }

	const randomTiming = (): number => {
		return Math.floor(Math.random() * TIMING_DURATION * 1.2)
	}
</script>


<template>
	{#key randomTiming() }
		<div
			class="cell"
			class:reduce={$prefersReducedMotion}
			class:out
			style="
				background: {color};
				grid-area: span {size} / span {size};
				animation-delay: {randomDelay()};
				top: {randomDrop()};
			"
		/>
	{/key}
</template>


<style lang="scss">
	.cell {
		opacity: 0;
		mix-blend-mode: multiply;
		padding: 50% 0;
		position: relative;
		animation: fade_in .36s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
		
		&.out {
			opacity: 1;
			animation: fade_out .36s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;			
		}
		
		&.reduce {
			animation-name: reduce_motion_fade;
			
			&.out {
				animation-name: reduce_motion_fade_reverse;
			}
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

	@keyframes reduce_motion_fade_reverse {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
