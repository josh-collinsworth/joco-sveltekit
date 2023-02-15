<script lang="ts">
	import { prefersReducedMotion } from '$lib/data/store'
	import { onMount } from 'svelte'

	onMount(() => {
		const userMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			const storedMotionPreference = JSON.parse(window.localStorage.getItem('collinsworth-reduce-motion'))

			if (
				(userMotionPreference && storedMotionPreference !== false) 
				|| storedMotionPreference === true) {
				prefersReducedMotion.set(true)
			}
	})

	const toggleReducedMotion = (): void => {
		prefersReducedMotion.set(!$prefersReducedMotion)

		window.localStorage.setItem(
			'collinsworth-reduce-motion',
			JSON.stringify($prefersReducedMotion)
		)
	}

	let enableOrDisable: string
	$: enableOrDisable = $prefersReducedMotion ? 'Disable' : 'Enable'
</script>


<button
	id="motion-toggle"
	class="settings-toggle"
	on:click={toggleReducedMotion}
	title="{enableOrDisable} reduced motion"
	aria-pressed={$prefersReducedMotion}
>
	<span class="sr">Toggle reduced motion</span>
	<span aria-hidden="true">Move</span>
</button>


<style lang="scss">
	#motion-toggle {
		background: var(--buttonBackground);
		font-weight: bold;
		font-size: .6rem;
		text-transform: uppercase;
		color: var(--ink);
		font-family: var(--headingFont);

		&[aria-pressed="true"]::before {
			content: '';
			width: calc(100% + .1rem);
			height: .1rem;
			background: var(--ink);
			display: block;
			position: absolute;
			transform-origin: center;
			top: calc(50% - 0.05rem);
			left: -0.05rem;
			z-index: 11;
			border: 0;
			transform: rotate(45deg);
		}

		&:hover,
		&:focus {
			color: var(--yellow);
		}
	}
</style>
