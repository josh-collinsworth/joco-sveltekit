<script lang="ts">
	const colorNames = ['yellow', 'blue', 'gray', 'orange']
	const colorValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
	const mainColors = [
		'yellow-500',
		'blue-400',
		'blue-700',
		'gray-400',
		'orange-500',
		'orange-700'
	]
	const colorMap = {
		yellow: {
			50: '#ffffe7',
			100: '#ffffc1',
			200: '#fffb86',
			300: '#fff041',
			400: '#ffe00d',
			500: '#ffd100',
			600: '#d19900',
			700: '#a66d02',
			800: '#89550a',
			900: '#74450f',
			950: '#44240'
		},
		blue: {
			50: '#f1f8fa',
			100: '#dcecf1',
			200: '#bddae4',
			300: '#8fc0d1',
			400: '#599cb7',
			500: '#3e809c',
			600: '#34657f',
			700: '#31576d',
			800: '#2f495b',
			900: '#2b404e',
			950: '#182834'
		},
		orange: {
			50: '#fff6ed',
			100: '#ffebd4',
			200: '#ffd3a8',
			300: '#ffb470',
			400: '#ff8937',
			500: '#ff6a13',
			600: '#f04c06',
			700: '#c73707',
			800: '#9e2c0e',
			900: '#7f270f',
			950: '#451005'
		},
		gray: {
			0: '#fcfcfc',
			50: '#f7f7f7',
			100: '#ececed',
			200: '#dededf',
			300: '#c7c8c9',
			400: '#a7a8aa',
			500: '#97989a',
			600: '#86878a',
			700: '#797a7c',
			800: '#656668',
			900: '#535455',
			950: '#353536'
		}
	}
</script>

<!-- <div style="display:flex; gap: 1rem;">
	{#each mainColors as color}
		<div class="swatch" style="background-color: var(--{color});"></div>
	{/each}
</div> -->

<div class="color-table">
	<div class="wide-only"></div>
	{#each Object.keys(colorMap.yellow) as value}
		<div class="wide-only header-row">{value}</div>
	{/each}
	{#each Object.keys(colorMap) as color}
		<div class="wide-only">{color}</div>
		{#each colorValues as value}
			<div
				class="swatch"
				style="background-color: var(--{color}-{value});
					background-image: {mainColors.includes(`${color}-${value}`)
					? // ? `radial-gradient(circle at 50% 50%, var(--paper), var(--paper) 3px, transparent 3px, transparent 100%)`
						// : `none`};"
						`linear-gradient(to bottom left, var(--paper) 15%, transparent 15%)`
					: `none`};"
			>
				<span class="hex">{colorMap[color][value]}</span>
			</div>
		{/each}
	{/each}
</div>

<style lang="scss">
	.color-table {
		margin-top: var(--quarterNote);
		display: grid;
		align-items: center;
		justify-content: center;
		grid-template-columns: auto repeat(10, minmax(0, 1fr));
		gap: 2px;
		font-family: var(--codeFont);
		font-size: 0.75rem;
		text-align: right;

		@media (min-width: vars.$sm) {
			grid-template-columns: auto repeat(11, minmax(0, 1fr));
		}
	}

	.header-row {
		text-align: center;
	}

	.swatch {
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		display: grid;
		place-content: center;
		text-align: center;
		position: relative;
		overflow: visible;

		.hex {
			padding: 0.25em;
			background: var(--paper);
			opacity: 0;
			position: absolute;
			bottom: 0;
			z-index: 2;
			font-size: 0.65rem;
			border-radius: 4px;
		}

		&:hover .hex {
			opacity: 1;
		}
	}

	.wide-only {
		display: none;

		@media (min-width: vars.$sm) {
			display: table-cell;
		}
	}
</style>
