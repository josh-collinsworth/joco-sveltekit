<script lang="ts">
	const white = '#fcfcfc'
	const black = '#101820'
	const colors: string[] = ['#ffd100', '#34657f', '#7ba7bc', '#ff6a13', '#e6002a']
	const grays: string[] = [white, '#a7a8aa', '#878a8c', '#53565a', '#424548', '#331f22', black]

	const getOutlineColor = (color: string) => {
		if (color === black) return white
		if (color === white) return black
		return 'transparent'
	}
</script>

<div class="colors-container">
	<ul class="brand-colors no-bullets">
		{#each colors as color}
			<li class="color">
				<div
					class="swatch {color}"
					style="background-color: {color}; outline: 1px solid {getOutlineColor(color)}"
				/>
				<span>{color}</span>
			</li>
		{/each}
	</ul>
	<ul class="brand-colors no-bullets">
		{#each grays as color}
			<li class="color">
				<div
					class="swatch {color}"
					style="background-color: {color}; outline: 1px solid {getOutlineColor(color)}"
				/>
				<div>{color}</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.colors-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--quarterNote);
		align-items: start;

		@media (min-width: vars.$xxs) {
			grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
		}
	}

	.brand-colors {
		display: grid;
		grid-template-columns: 1fr;
		padding: 0;
		margin: 0;
		gap: var(--eighthNote);
	}

	.color {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		font-size: 0.9rem;
		font-family: var(--codeFont);
		text-shadow: 0 0 1px var(--trueWhite);
		margin: 0;

		.swatch {
			width: 3.5em;
			height: 3.5em;
			margin-right: 0.5rem;
		}
	}
</style>
