<script lang="ts">
  import { onMount } from 'svelte'
  
  const defaultCoords = {
    x: 0,
    width: 0,
    bottom: 0,
    top: 0,
    height: 0,
    y: 0,
  }

  export let coords = defaultCoords

  let hoover

  $: { console.log(coords) }

  onMount(() => {
    const currentPage = document.querySelector('.nav__link.active')

    if (currentPage) {
      coords = currentPage.getBoundingClientRect()
    }

    hoover.style.transition = `all .15s cubic-bezier(0.445, 0.05, 0.55, 0.95)`
  })
</script>

<div
  bind:this={hoover}
  class="hoover"
  style="
    transform: translateX({coords.x}px);
    width: {coords.width}px;
    top: {coords.height + coords.y - 2}px;
  "
/>


<style lang="scss">
  .hoover {
    height: 4px;
    width: 100%;
    background: var(--yellow);
    position: absolute;
    transform-origin: top left;
    top: 0;
    left: 0;
    pointer-events: none;
  }
</style>