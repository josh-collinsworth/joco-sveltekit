<aside class="callout" aria-hidden="true">
  <div class="wrapper">
    <slot />
  </div>
</aside>


<style lang="scss">
  .callout {
    margin: 3rem 1rem;
    font-size: 1rem;
    line-height: 1.5em;
    position: relative;
    background: var(--paper);
    overflow: hidden;
    padding: 0 1rem 1rem 0;
    display: none;

    font-family: var(--callout-font);
    font-style: var(--callout-font-style);
    font-weight: var(--callout-font-weight);
    
    .wrapper {
      margin: 0;

      &:after {
        content: '';
        height: .25rem;
        width: 100%;
        margin-left: -100%;
        background: var(--yellow);
        bottom: 0;
        position: absolute;
      }
    }

    @media(min-width: $narrow) {
      margin: 3rem -2rem 3rem 3rem;
      padding-right: 0;
      display: block;
      float: right;
      width: 50%;
    }
    
    @media(min-width: $wide) {
      width: 20em;
      margin-right: calc(-3rem - 12vw);
    }
    
    @media(min-width: $wider) {
      margin-right: calc(2rem - 12vw);
    }
    
    @media(min-width: $evenWider) {
      margin-right: -12rem;
    }
    
    @media(min-width: 1960px) {
      margin-right: -14rem;
    }
  }
</style>
