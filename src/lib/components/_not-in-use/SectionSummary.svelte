<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<div class="summary">
	<div class="summary__lead-in">Section summary:</div>
	{@render children?.()}
</div>

<style>
	.summary {
		// background-color: var(--blue-lightest);
		padding: var(--quarter-note);
		font-size: 0.75rem;
		font-family: var(--heading-font);
		line-height: 1.3;
		margin-block: var(--quarter-note);
		border: 1px solid var(--ink);

		:global(.dark &) {
			background-color: var(--blue-dark);
		}

		:global(html:not(.light)) & {
			@media (prefers-color-scheme: dark) {
				background-color: var(--blue-darker);
			}
		}

		:global(> :last-child) {
			margin-bottom: 0;
		}

		.summary__lead-in {
			text-transform: uppercase;
			font-weight: bold;
		}
	}
</style>
