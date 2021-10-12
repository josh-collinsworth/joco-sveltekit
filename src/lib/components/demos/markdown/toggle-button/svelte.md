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
  class:enabled={showText}
>
  Toggle text
</button>

{#if showText}
  <p>👻 Boo! I am some hidden text!</p>
{/if}
  
<style>
  .enabled {
    background: #34657f;
    color: #fff;
  }
</style>
```