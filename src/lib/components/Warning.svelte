<script>
import WarningIcon from './icons/warning-icon.svelte'
</script>

<div class="warning">
	<div class="warning-icon">
		<WarningIcon />
	</div>
	<div>
		<slot />
	</div>
</div>


<style lang="scss">
	.warning {
		margin: var(--halfNote) 0;
		position: relative;
		padding: calc(var(--quarterNote) * 1.5);
		font-size: 0.8rem;
		font-style: italic;
		background: linear-gradient(to right, hsla(var(--redHS), 33%), var(--red));
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
			font-size: .9em;
		}
	}

	:global(.dark .warning) {
		background: linear-gradient(to right, hsla(var(--redHS), 22%), hsla(var(--redHS), 28%));
	}
</style>