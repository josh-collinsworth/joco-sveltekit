<template>
  <div class="highlight">
    <p>
      <slot />
    </p>
  </div>
</template>

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
    padding: 1rem 2rem;

      // &::before,
      // &::after {
      //   content: '';
      //   height: 2rem;
      //   position: absolute;
      //   width: 0;
      //   border-right: 1px solid var(--lightBlue);
      //   top: -3rem;
      //   left: 50%;
      // }

      // &::after {
      //   top: unset;
      //   bottom: -3rem;
      // }
  }
}
</style>