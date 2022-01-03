<script>null</script>

<p class="callout">
  <slot />
</p>


<style lang="scss" global>
  .callout {
    margin: var(--halfNote) 0;
    font-size: 1.3rem;
    line-height: 1.4;
    font-family: var(--heading-font);

    em, i {
      font-weight: bold;
      font-style: normal;
    }

    @media (min-width: $xs) {
      font-size: 1.4rem;
    }

    @media (min-width: $lg) {
      margin: 0 0 1rem;
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;

      em, i {
        font-weight: initial;
        font-style: initial;
      }
    }
  }
</style>
