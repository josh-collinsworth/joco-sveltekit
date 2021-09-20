<script>
	let count = 0

	const incrementCount = () => {
		count += 1
	}
</script>

<button on:click={incrementCount}>
  This button's been clicked {count} times.
</button>

<style>
  button {
    margin: 2rem 0 3rem;
  }
</style>