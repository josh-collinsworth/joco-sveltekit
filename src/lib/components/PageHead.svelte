<script lang="ts">
  import Grid from "./Grid.svelte";
</script>


<div class="page-head">
  <h1>
    <slot />
  </h1>
  <Grid squareCount={24} noDark={true} />
  <p class="subtitle">
    <slot name="subtitle" />
  </p>
</div>


<style lang="scss" global>
  .page-head {
    margin-bottom: 4rem;

    h1 {
      position: relative;
      z-index: 2;
      text-shadow: 0 0 .5em var(--paper);
      font-size: 3.8rem;
      margin: 0;
      
      @media (min-width: $wider) {
        font-size: 4.4rem;
      }
      
      + .cell-grid {
        margin-left: -6rem;
        margin-top: -40px;
        z-index: 1;
      }
    }

    .subtitle {
      font-size: 1.3rem;
      font-style: italic;
      margin: 0;
    }
  }
</style>