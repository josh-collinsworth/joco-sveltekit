<div class="warning">
  <div class="inner">
    <slot />
  </div>
</div>


<style lang="scss">
  .warning {
    width: calc(100% + (var(--quarterNote) * 2));
    margin: var(--halfNote) 0;
    margin-left: calc(var(--quarterNote) * -1);
    background: linear-gradient(to bottom right, var(--yellow), var(--orange));
    position: relative;
    padding: 2px;
    font-size: 0.85rem;
    font-style: italic;
    
    .inner {
      padding: var(--quarterNote) ;
      background: var(--paper);
    }

    &::before {
      content: '!important';
      font-family: 'MonoLisa', monospace;
      font-style: normal;
      background: var(--paper);
      position: absolute;
      top: -0.9em;
      left: 0.9em;
      line-height: 1;
      display: block;
      padding: .5em 1em;
      // font-family: var(--heading-font);
      text-align: center;
      // text-transform: uppercase;
      // font-weight: bold;
      font-size: 0.7rem;
    }
  }
</style>