<div class="highlight">
  <slot />
</div>

<style lang="scss">
  .highlight {
    font-size: 1.3em;
    line-height: 1.5em;
    margin: 2rem 0;
    font-weight: normal;
    font-style: italic;

    @media(min-width: $narrow) {
      font-weight: bold;
      font-style: normal;
    }
  }
</style>