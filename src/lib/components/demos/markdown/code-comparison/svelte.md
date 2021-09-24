```svelte
<!-- CounterButton.svelte -->
<script>
	let count = 0

	const incrementCount = () => {
		count++
	}
</script>

<button on:click={incrementCount}>
  This button's been clicked {count} times.
</button>
```