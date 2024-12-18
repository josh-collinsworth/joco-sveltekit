<script lang="ts">
	import { TIMING_DURATION } from '$lib/data/constants'
	import { onMount } from 'svelte'
	import { cubicIn, cubicOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'

	let yIn = $state(12)
	let yOut = $state(-12)

	interface Props {
		refresh?: string | boolean;
		span?: boolean;
		transitionIn?: boolean;
		transitionOut?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		refresh = '',
		span = false,
		transitionIn = true,
		transitionOut = true,
		children
	}: Props = $props();

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
		in:fly|global={{
			y: yIn,
			duration: transitionIn ? TIMING_DURATION : 0,
			delay: transitionIn ? TIMING_DURATION : 0,
			easing: cubicOut
		}}
		out:fly|global={{
			y: yOut,
			duration: transitionOut ? TIMING_DURATION : 0,
			easing: cubicIn
		}}
	>
		{@render children?.()}
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
