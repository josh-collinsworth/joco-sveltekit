<script>null</script>

<aside class="pull-quote" aria-hidden="true" hidden>
  <div class="pull-quote__wrapper">
    <slot />
  </div>
</aside>


<style lang="scss" global>
  .pull-quote {
    float: right;
    margin: calc(var(--rhythm) * 2) -12rem calc(var(--rhythm) * 3) calc(var(--rhythm) * 3);
    font-size: 1.2rem;
    line-height: 1.4;
    position: relative;
    background: var(--paper);
    overflow: hidden;
    padding: 0 0 0.75rem 0;
    font-family: var(--heading-font);
    font-style: normal;
    font-weight: normal;
    max-width: 15em;
    
    @media (min-width: $lg) {
      display: block;
    }

    em, i {
      font-weight: bold;
      font-style: normal;
    }
    
    &__wrapper {
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
