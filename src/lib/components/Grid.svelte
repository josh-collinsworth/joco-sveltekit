<script lang="ts">
  import GridCell from './GridCell.svelte'
  import { onMount } from 'svelte'

  export let refresh: string = ''
  export let inverted: boolean = false

  let count: number = 0
  let colors: string[] = [
    // The more instances of 'transparent' there are in the array, the more sparse the grid will look.
    'transparent',
    'transparent',
    'transparent',
    'transparent',
    'var(--lightGray)',
    'var(--ink)',
    'var(--lightBlue)',
    'var(--darkBlue)',
    'var(--yellow)',
    'var(--orange)',
  ]

  onMount(() => {
		if (typeof window == 'undefined') return
		count = Math.floor(
			(window.innerWidth
      / (parseInt(window.getComputedStyle(window.document.body, null).getPropertyValue('font-size')) / 0.65)
			* 4)
		)
  })

  const randomColor = () => {
    const color = Math.floor(Math.random() * colors.length)

    return colors[color]
  }
</script>


<template>
  {#key refresh}
    <div class="cell-grid" class:inverted aria-hidden="true">
      {#each Array(count) as cell, i}
        <GridCell color={randomColor()} />
      {/each}
    </div>
  {/key}
</template>


<style lang="scss">
.cell-grid {
	display: grid;
	height: 2.5rem;
	grid-template-columns: repeat(auto-fill, minmax(.5rem, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(.5rem, 1fr));
	grid-auto-flow: dense;
	position: relative;
	z-index: 2;

  &.inverted {
    transform: rotateX(180deg);
    top: 1rem;
  }
}
</style>
