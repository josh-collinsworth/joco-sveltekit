<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	let isSpoiled = $state(false)

	const toggleIsSpoiled = () => {
		isSpoiled = !isSpoiled
	}
</script>


<div class="spoiler">
	<div class="spoiler__controls">
		⚠️ SPOILER ALERT
		<button onclick={toggleIsSpoiled} aria-pressed={isSpoiled}>
			{isSpoiled ? 'Hide' : 'Reveal'}
		</button>
	</div>
	{#if isSpoiled}
		{@render children?.()}
	{/if}
</div>


<style lang="scss">
	.spoiler {
		border: 2px solid var(--red);
		padding: 1rem;
		margin: 2rem 0;

		&__controls {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: var(--heading-font);
			font-weight: bold;
		}
	}
</style>
