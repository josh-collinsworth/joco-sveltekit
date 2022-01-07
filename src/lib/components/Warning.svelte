<script>null</script>

<div class="warning">
  <slot />
</div>


<style lang="scss">
  .warning {
    margin: var(--halfNote) 0;
    position: relative;
    padding: calc(var(--quarterNote) * 1.5);
    padding-left: var(--dottedHalfNote);
    font-size: 0.8rem;
    font-style: italic;
    background: linear-gradient(to right, hsla(var(--redHS), 33%), var(--red));
    color: var(--white);

    :global(code) {
      background: transparent;
      font-size: .9em;
    }
    
    &::before {
      content: '⚠️important';
      content: '⚠️ ';
      font-family: 'MonoLisa', monospace;
      font-style: normal;
      line-height: 1;
      position: absolute;
      left: var(--quarterNote);
      top: calc(50% - 0.5em);
      font-size: 1.2rem;
      height: 1em;
      line-height: 1;
      margin-bottom: var(--quarterNote);
    }
  }

  :global(.dark .warning) {
    background: linear-gradient(to right, hsla(var(--redHS), 22%), hsla(var(--redHS), 28%));
  }
</style>