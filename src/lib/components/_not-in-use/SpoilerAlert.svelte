<script>
	let isSpoiled = false

	const toggleIsSpoiled = () => {
		isSpoiled = !isSpoiled
	}
</script>


<div class="spoiler">
	<div class="spoiler__controls">
		⚠️ SPOILER ALERT
		<button on:click={toggleIsSpoiled} aria-pressed={isSpoiled}>
			{isSpoiled ? 'Hide' : 'Reveal'}
		</button>
	</div>
	{#if isSpoiled}
		<slot />
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
			font-family: var(--headingFont);
			font-weight: bold;
		}
	}
</style>