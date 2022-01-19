```svelte
<!-- ToggleButton.svelte -->
<script>
  let isTextShown = false
  
  const toggleIsTextShown = () => {
    isTextShown = !isTextShown
  }

  $: buttonText = isTextShown ? 'Show less' : 'Show more'
</script>

<p>
  Svelte is a JavaScript framework.
  
  {#if isTextShown}
    Though actually, if you want to get technical...
  {/if}
</p>

<button on:click={toggleIsTextShown}>
  {buttonText}
</button>
```