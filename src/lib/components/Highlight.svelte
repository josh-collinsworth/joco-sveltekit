<div class="highlight">
  <span>
    <slot />
  </span>
</div>


<style lang="scss">
.highlight {
  font-size: 1.3em;
  margin: 2rem 0;
  position: relative;
  font-family: var(--highlight-font);
  font-style: var(--highlight-font-style);
  font-weight: var(--highlight-font-weight);
  span {
    background: var(--yellow);
  }
}
</style>