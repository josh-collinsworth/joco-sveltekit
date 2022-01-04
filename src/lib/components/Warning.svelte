<div class="warning">
  <div class="inner">
    <slot />
  </div>
</div>


<style lang="scss">
  .warning {
    margin: var(--halfNote) 0;
    position: relative;
    padding: 2px;
    font-size: 0.85rem;
    font-style: italic;
    background: linear-gradient(to bottom right, var(--orange), var(--red));
    
    .inner {
      padding: var(--halfNote) var(--halfNote) var(--dottedHalfNote);
      background: var(--paper);

      &::before {
        content: '⚠️ ';
        font-style: normal;
      }
      
      &::after {
        content: '!important;';
        font-family: 'MonoLisa', monospace;
        font-style: normal;
        position: absolute;
        bottom: 0;
        left: 0;
        color: var(--white);
        line-height: 1;
        display: inline-block;
        background: linear-gradient(to right, var(--orange), var(--red));
        width: 100%;
        padding: .5em 1rem;
        font-size: 0.75rem;
        text-align: right;
      }
    }
  }
</style>