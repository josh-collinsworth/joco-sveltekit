<script lang="ts">
	import { prefersReducedMotion } from '$lib/assets/js/store'
  import { TIMING_DURATION } from '$lib/assets/js/constants'
  import { cubicIn, cubicOut } from 'svelte/easing'
  import { fly } from 'svelte/transition'
  import { onMount } from 'svelte'

  let yIn: number
  let yOut: number

  $: yIn = $prefersReducedMotion ? 0 : 12
  $: yOut = $prefersReducedMotion ? 0 : -12
	
  export let color: string = 'transparent'

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
			in:fly={{ y: yIn, duration: TIMING_DURATION, delay: (randomTiming() + TIMING_DURATION), easing: cubicOut }}
			out:fly={{ y: yOut, duration: TIMING_DURATION, delay: randomTiming(), easing: cubicIn }}
			class="cell"
			style="
				background: {color};
				grid-area: span {size} / span {size};
				animation-delay: {randomDelay()};
				transform: translateY({randomDrop()});
			"
		/>
	{/key}
</template>


<style lang="scss">
	.cell {
		padding: 50% 0;
		mix-blend-mode: overlay;
	}
</style>
