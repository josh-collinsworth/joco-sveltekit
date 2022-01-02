<script>null</script>

<p class="callout">
  <slot />
</p>


<style lang="scss" global>
  .callout {
    margin: calc(var(--rhythm) * 2) 0;
    font-size: 1.3rem;
    line-height: 1.4;
    position: relative;
    background: var(--paper);
    overflow: hidden;
    padding: 0;
    font-family: var(--heading-font);
    font-style: normal;
    font-weight: normal;
    max-width: 20em;

    @media (min-width: $xs) {
      font-size: 1.4rem;
    }

    em, i {
      font-weight: bold;
      font-style: normal;
    }
  }
</style>
