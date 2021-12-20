<div class="warning">
  <div class="inner">
    <slot />
  </div>
</div>


<style lang="scss">
  .warning {
    width: calc(100% + (var(--rhythm) * 2));
    margin: calc(var(--rhythm) * 2) 0;
    margin-left: calc(var(--rhythm) * -1);
    // margin: 2.5rem 0;
    background: linear-gradient(to bottom right, var(--yellow), var(--orange));
    // background: var(--yellow);
    position: relative;
    padding: 2px;
    font-size: 0.85rem;
    font-style: italic;
    
    .inner {
      padding: calc(var(--rhythm) * 1);
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