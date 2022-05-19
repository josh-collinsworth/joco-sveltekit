```svelte
<!-- CounterButton.svelte -->
<script>
  let count = 0

  const incrementCount = () => {
    count++
  }
</script>

<button on:click={incrementCount}>
  Number of clicks: {count}
</button>
```