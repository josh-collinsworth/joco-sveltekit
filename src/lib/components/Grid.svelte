<script lang="ts">
  import GridCell from './GridCell.svelte'
  import { SITE_COLORS } from '$lib/assets/js/constants'
  import { onMount } from 'svelte'

  export let refresh: string = ''
  export let inverted: boolean = false
  export let squareCount: number = 0

  let count: number = 0
  let gridColors = SITE_COLORS

  onMount(() => {
		if (typeof window == 'undefined') return

    if (squareCount) {
      count = squareCount
      return
    }

    count = 
		  Math.floor(
        (window.innerWidth
        / (parseInt(window.getComputedStyle(window.document.body, null).getPropertyValue('font-size')) / 0.65)
			* 4)
		)
  })

  const randomColor = () => {
    const color = Math.floor(Math.random() * gridColors.length)

    return gridColors[color]
  }
</script>


<template>
  <div class="grid-wrapper">
    {#key refresh}
      <div class="cell-grid" class:inverted aria-hidden="true">
        {#each Array(count) as cell}
          <GridCell color={randomColor()} />
        {/each}
      </div>
    {/key}
  </div>
</template>


<style lang="scss">
  .grid-wrapper {
    height: 2.5rem;
    position: relative;
    contain: layout size style;
  }

  .cell-grid {
    display: grid;
    height: 2.5rem;
    grid-template-columns: repeat(auto-fill, minmax(.5rem, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(.5rem, 1fr));
    grid-auto-flow: dense;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;

    &.inverted {
      transform: rotateX(180deg);
      top: 1rem;

      &:before {
        --paperRGB: var(--darkBlueRGB);
        top: -3rem;
      }
    }

    &:before {
      width: 100%;
      content: '';
      background: linear-gradient(60deg, rgba(var(--paperRGB), 0), rgba(var(--paperRGB), 0.6));
      height: 4rem;
      position: absolute;
      top: -1rem;
      z-index: 2;
    }
  }
</style>
