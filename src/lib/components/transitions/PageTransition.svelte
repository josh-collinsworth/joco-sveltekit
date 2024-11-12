<script lang="ts">
	import { TIMING_DURATION } from '$lib/data/constants'
	import { onMount } from 'svelte'
	import { cubicIn, cubicOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'

	let yIn = 12
	let yOut = -12

	export let refresh: string | boolean = ''
	export let span: boolean = false
	export let transitionIn: boolean = true
	export let transitionOut: boolean = true

	onMount(() => {
		const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`)
			.matches

		if (isReduced) {
			yIn = 0
			yOut = 0
		}
	})
</script>

{#key refresh}
	<div
		class="transition-wrapper"
		class:span
		in:fly={{
			y: yIn,
			duration: transitionIn ? TIMING_DURATION : 0,
			delay: transitionIn ? TIMING_DURATION : 0,
			easing: cubicOut
		}}
		out:fly={{
			y: yOut,
			duration: transitionOut ? TIMING_DURATION : 0,
			easing: cubicIn
		}}
	>
		<slot />
	</div>
{/key}

<style lang="scss">
	.transition-wrapper {
		&.span {
			grid-column: 1 / -1;
			grid-row: 1 / 2;
		}
	}
</style>
