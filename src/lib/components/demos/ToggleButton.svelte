<script>
  let showText = false
  
  const toggleShowText = () => {
    showText = !showText
  }
</script>

<div class="wrapper">
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
</div>

<style lang="scss">
  .wrapper {
    margin: 2rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    min-height: 4rem;

    p {
      margin: 0;
      flex: 0 1 auto;
    }

    button {
      white-space: pre;
    }

    .on {
      background: var(--darkBlue);
      color: var(--white);
    }
  }
</style>