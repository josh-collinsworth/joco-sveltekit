<script lang="ts">
  import GridCell from './GridCell.svelte'
  import { SITE_COLORS } from '$lib/assets/js/constants'
  import { onMount } from 'svelte'

  export let refresh: string = ''
  export let inverted: boolean = false
  export let squareCount: number = 0

  let count: number = 0
  let gridColors = SITE_COLORS
  let gridWidth: number
  let out: boolean = false
  let thisPage: string = ''
  let loadedIn = false

  $: if (refresh && loadedIn) {
    out = true
    setTimeout(() => {
      thisPage = refresh
      out = false
    }, 360)
  } else {
    loadedIn = true
  }

  onMount(() => {
		if (typeof window == 'undefined') return

    gridWidth = 
      window.innerWidth
      / parseInt(window.getComputedStyle(window.document.body, null).getPropertyValue('font-size'))
      * 2

    thisPage = refresh

    if (squareCount) {
      count = squareCount
      return
    }

    count = 
		  Math.floor(
        (window.innerWidth
        / (parseInt(window.getComputedStyle(window.document.body, null).getPropertyValue('font-size')) / 0.65)
			* 2)
		)
  })

  const randomColor = () => {
    const color = Math.floor(Math.random() * gridColors.length)

    return gridColors[color]
  }
</script>


<template>
  <div class="grid-wrapper">
    {#key thisPage}
      <div class="cell-grid" class:inverted aria-hidden="true">
        {#each Array(count) as cell}
          <GridCell color={randomColor()} {out} {gridWidth} />
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
    width: 100%;
    max-width: 100vw;
  }

  .cell-grid {
    height: 2.5rem;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;

    &.inverted {
      top: 2.5rem;

      &:before {
        --paperRGB: var(--darkBlueRGB);
        top: 0;
      }
    }

    &:before {
      width: 100%;
      content: '';
      background: linear-gradient(60deg, rgba(var(--paperRGB), 0), rgba(var(--paperRGB), 0.5));
      height: 4rem;
      position: absolute;
      top: -1rem;
      z-index: 2;
      max-width: 100vw;
    }
  }
</style>
