<script>
	let volume = $state(0)
</script>

<div class="example-component-wrapper">
	<label for="volume">
		Volume: {volume}%
	</label>

	<input id="volume" type="range" min="0" max="100" bind:value={volume} />
</div>

<style>
	input {
		padding: 0;
		width: 100%;
		max-width: 12rem;
		display: block;
		margin: 0;
	}

	label {
		font-family: var(--heading-font);
		font-weight: bold;
	}
</style>
