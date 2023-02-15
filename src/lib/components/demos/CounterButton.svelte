<script>
	let count = 0

	const incrementCount = () => {
		count++
	}
</script>

<div class="example-component-wrapper">
	<button on:click={incrementCount}>
		Number of clicks: {count}
	</button>
</div>