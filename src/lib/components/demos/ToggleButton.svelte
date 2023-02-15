<script>
	let isTextShown = false
	
	const toggleIsTextShown = () => {
		isTextShown = !isTextShown
	}

	$: buttonText = isTextShown ? 'Show less' : 'Show more'
</script>

<div class="example-component-wrapper">
	<p>
		Svelte is a JavaScript framework.
		
		{#if isTextShown}
			Though actually, if you want to get technical, Svelte is really more of a compiled superset of HTML. But for the sake of simplicity, we can call it a framework. Also, it's really neat.
		{/if}
	</p>

	<button on:click={toggleIsTextShown}>
		{buttonText}
	</button>
</div>