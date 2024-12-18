<script>
	let count = $state(0)

	const incrementCount = () => {
		count++
	}
</script>

<div class="example-component-wrapper">
	<button onclick={incrementCount}>
		Number of clicks: {count}
	</button>
</div>