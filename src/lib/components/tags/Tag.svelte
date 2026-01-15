<script lang="ts">
	interface Props {
		to: string
		children?: import('svelte').Snippet
	}

	let { to, children }: Props = $props()
</script>

<template>
	<li class="tag">
		<a href={to} class="tag__link">
			{@render children?.()}
		</a>
	</li>
</template>

<style>
	.tag {
		margin: 0;
		padding-left: 0;

		&::marker {
			content: none;
		}
	}

	.tag__link {
		display: block;
		padding: 1.1em 0.75em;
		background: var(--blue-100);
		margin: 0;
		color: var(--neutral-dark);
		text-decoration: none;
		font-weight: bold;
		font-family: var(--heading-font);
		font-size: 0.65em;
		line-height: 0;
		text-transform: uppercase;
		transition:
			background 0.15s,
			color 0.15s;

		&:hover,
		&:focus {
			background: var(--yellow);
			color: var(--neutral-black);
		}
	}

	:global(.dark .tag .tag__link) {
		color: var(--ink);
		background: var(--blue-800);
	}

	:global(html:not(.light)) {
		@media (prefers-color-scheme: dark) {
			.tag .tag__link {
				background: var(--blue-800);
				color: var(--ink);
			}
		}
	}
</style>
