<script>
	let volume = 0
</script>

<div class="example-component-wrapper">

	<label for="volume">
		Volume: {volume}%
	</label>
	
	<input 
		id="volume"
		type="range"
		min="0"
		max="100"
		bind:value={volume}
	/>
</div>


<style lang="scss">
	input {
		padding: 0;
		width: 100%;
		max-width: 12rem;
		display: block;
		margin: 0;
	}

	label {
		font-family: var(--headingFont);
		font-weight: bold;
	}
</style>
