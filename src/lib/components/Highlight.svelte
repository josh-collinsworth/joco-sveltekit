<div class="highlight">
  <p>
    <slot />
  </p>
</div>


<style lang="scss">
.highlight {
  font-size: 1.3em;
  line-height: 1.5em;
  margin: 2rem 0;
  font-weight: normal;
  font-style: italic;
  position: relative;
  
  @media(min-width: 800px) {
    font-weight: bold;
    font-style: normal;
  }
}
</style>