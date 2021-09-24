```svelte
<!-- CounterButton.svelte -->
<script>
	let count = 0

	const incrementCount = () => {
		count += 1
	}
</script>

<button on:click={incrementCount}>
  This button's been clicked {count} times.
</button>
```