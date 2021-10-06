<aside class="callout" aria-hidden="true">
  <div class="callout-wrapper">
    <slot />
  </div>
</aside>


<style lang="scss" global>
  .callout {
    margin: 2.5rem 4rem 3.5rem 0rem;
    font-size: 1.4rem;
    line-height: 1.5em;
    position: relative;
    background: var(--paper);
    overflow: hidden;
    padding: 0 0 0.75rem 0;
    font-family: var(--accent-font);
    font-style: normal;
    font-weight: normal;

    em, i {
      font-weight: bold;
      font-style: normal;
    }
    
    .callout-wrapper {
      padding: 0 0 0 .1em;

      &:after {
        content: '';
        height: .25rem;
        width: 100%;
        margin-left: -100%;
        background: linear-gradient(90deg, #7ba7bc, #75b1bf, #66c6b6, #4fd27b, #56e035, #acef1b, #faf008, #ffd100);        bottom: 0;
        position: absolute;
      }
    }
  }
</style>
