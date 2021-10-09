```svelte
<!-- ToggleButton.svelte -->
<script>
  let showText = false
  
  const toggleShowText = () => {
    showText = !showText
  }
</script>
  
<button 
  on:click={toggleShowText}
  aria-pressed={showText}
  class:on={showText}
>
  Toggle text
</button>

{#if showText}
  <p>👻 Boo! I am some hidden text!</p>
{/if}
  
<style>
  .on {
    background: #ffd100;
  }
</style>
```