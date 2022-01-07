<script>null</script>

<p class="callout">
  <slot />
</p>


<style lang="scss">
  .callout {
    margin: var(--halfNote) 0;
    font-size: 1.3rem;
    line-height: 1.4;
    font-family: var(--headingFont);

    @media (min-width: $xs) {
      font-size: 1.4rem;
    }

    @media (min-width: $lg) {
      margin: 0 0 var(--quarterNote);
      font-size: inherit;
      line-height: inherit;
      font-family: inherit;
    }
  }

  :global(.callout em, .callout i) {
    font-weight: bold;
    font-style: normal;

    @media (min-width: $lg) {
      font-weight: initial;
      font-style: initial;
    }
  }
</style>