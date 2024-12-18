<script lang="ts">
	import { run } from 'svelte/legacy';

	import GridCell from './GridCell.svelte'
	import { onMount } from 'svelte'
	import { browser } from '$app/environment'
	import debounce from 'just-debounce'

	interface Props {
		refresh?: string;
		inverted?: boolean;
		squareCount?: number;
	}

	let { refresh = '', inverted = false, squareCount = 0 }: Props = $props();

	let count: number = $state(0)
	let gridWidth: number = $state()
	let out: boolean = $state(false)
	let thisPage: string = $state('')
	let loadedIn = $state(false)

	let base = $state(16)

	const gridColors: string[] = [
		'var(--lightGray)',
		'var(--ink)',
		'var(--lightBlue)',
		'var(--darkBlue)',
		'var(--yellow)',
		'var(--orange)'
	]

	run(() => {
		if (refresh && loadedIn) {
			out = true
			setTimeout(() => {
				thisPage = refresh
				out = false
			}, 360)
		} else {
			loadedIn = true
		}
	});

	const setSquareCount = debounce(() => {
		if (!browser) return

		let newGridWidth = window.innerWidth

		if (window.innerWidth > 1024) {
			base = 18
		} else {
			base = 16
		}

		// Prevents re-renders when only height changes
		if (gridWidth && gridWidth === newGridWidth) {
			return
		}

		gridWidth = newGridWidth

		thisPage == refresh
			? (thisPage = String(Math.random()))
			: (thisPage = refresh)

		if (squareCount) {
			count = squareCount
			return
		}

		count = Math.floor(window.innerWidth / base)
	}, 300)

	onMount(() => {
		setSquareCount()
		thisPage = refresh
	})

	const randomColor = () => {
		const color = Math.floor(Math.random() * gridColors.length)
		return gridColors[color]
	}
</script>

<svelte:window onresize={setSquareCount} />

<div class="grid-wrapper" style="--base: {base}px">
	{#key thisPage}
		<div class="cell-grid" class:inverted aria-hidden="true">
			{#each Array(count) as cell}
				<GridCell color={randomColor()} {out} {base} {gridWidth} />
			{/each}
		</div>
	{/key}
</div>

<style lang="scss">
	.grid-wrapper {
		height: calc(var(--base) * 2.5);
		position: relative;
		contain: layout size style;
		width: 100%;
		max-width: 100vw;
	}

	.cell-grid {
		height: calc(var(--base) * 2.5);
		position: absolute;
		z-index: 2;
		top: calc(var(--base) * 0.5);
		left: 0;
		width: 100%;
		max-width: 100vw;

		&.inverted {
			top: calc(var(--base) * 2.5);

			&:before {
				--paperHSL: var(--darkBlueHSL);
				top: 0;
			}
		}

		&:before {
			width: 100%;
			content: '';
			background: linear-gradient(
				60deg,
				hsla(var(--paperHSL), 0),
				hsla(var(--paperHSL), 0.5)
			);
			height: calc(var(--base) * 4);
			position: absolute;
			top: calc(var(--base) * -1);
			z-index: 2;
			max-width: 100vw;
		}
	}
</style>
