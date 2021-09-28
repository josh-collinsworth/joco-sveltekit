<aside class="callout" aria-hidden="true">
  <div class="callout-wrapper">
    <slot />
  </div>
</aside>


<style lang="scss" global>
  .callout {
    margin: 2.5rem 1rem 3rem;
    font-size: 1.2rem;
    line-height: 1.5em;
    position: relative;
    background: var(--paper);
    overflow: hidden;
    padding: 0 0 0.75rem 0;
    font-family: var(--body-font);
    font-style: italic;
    font-weight: normal;

    em, i {
      font-weight: bold;
    }
    
    .callout-wrapper {
      padding: 0 0 0 .1em;

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
      display: block;
      float: right;
      width: 55%;
      margin: 3rem -3rem 3rem 2rem;
    }
    
    @media(min-width: $medium) {
      width: 20em;
      margin-right: calc(-4rem - 12vw);
    }
    
    @media(min-width: $wider) {
      margin-right: calc(2rem - 12vw);
      margin-left: 3rem;
    }
    
    @media(min-width: $evenWider) {
      margin-right: -12rem;
    }
    
    @media(min-width: $widest) {
      margin-right: -14rem;
    }
  }
</style>
