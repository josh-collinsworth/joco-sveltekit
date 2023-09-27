<script lang="ts">
	export let to: string;
</script>

<template>
	<li class="tag">
		<a href={to} class="tag__link">
			<slot />
		</a>
	</li>
</template>

<style lang="scss">
	.tag {
		margin: 0;

		&::marker {
			content: none;
		}
	}

	.tag__link {
		display: block;
		padding: 1.1em 0.75em;
		background: var(--lighterBlue);
		margin: 0;
		color: var(--darkGray);
		text-decoration: none;
		font-weight: bold;
		font-family: var(--headingFont);
		font-size: 0.65em;
		line-height: 0;
		text-transform: uppercase;
		transition: background 0.15s, color 0.15s;

		&:hover,
		&:focus {
			background: var(--yellow);
			color: var(--black);
		}
	}

	:global(.dark .tag .tag__link) {
		color: var(--ink);
		background: var(--darkBlue);
	}

	:global(html:not(.light)) {
		@media (prefers-color-scheme: dark) {
			.tag .tag__link {
				background: var(--darkBlue);
				color: var(--ink);
			}
		}
	}
</style>
