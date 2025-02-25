<script lang="ts">
	import WarningIcon from './icons/warning-icon.svelte'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<div class="warning">
	<div class="warning-icon">
		<WarningIcon />
	</div>
	<div>
		{@render children?.()}
	</div>
</div>

<style lang="scss">
	.warning {
		margin: var(--halfNote) 0;
		position: relative;
		padding: calc(var(--quarterNote) * 1.5);
		font-size: 0.8rem;
		font-style: italic;
		background: var(--red);
		color: var(--white);
		line-height: 1.4;
		display: grid;
		grid-template-columns: 2em 1fr;
		gap: 0 var(--quarterNote);

		.warning-icon {
			grid-row: 1 / -1;
			grid-column: 1 / 2;
		}

		:global(code) {
			background: transparent;
			font-size: 0.9em;
		}
	}
</style>
