<template>
  {#key refresh}
    <div class="cell-grid" class:inverted aria-hidden="true">
      {#each Array(count) as cell, i}
        <GridCell color={randomColor()} />
      {/each}
    </div>
  {/key}
</template>


<script lang="ts">
  import GridCell from './GridCell.svelte'
  import { onMount } from 'svelte'

  export let refresh: string = ''
  export let inverted: boolean = false
  export const density: number = 42

  let count: number = 0
  let colors: string[] = [
    'transparent',
    'var(--lightGray)',
    'var(--ink)',
    'var(--lightBlue)',
    'var(--darkBlue)',
    'var(--yellow)',
    'var(--orange)',
  ]

  onMount(() => {
		if(typeof window == 'undefined') return
		count = Math.floor(
			(window.innerWidth
      / (parseInt(window.getComputedStyle(window.document.body, null).getPropertyValue('font-size')) / 0.65)
			* 4)
		)
    console.log(count)
  })

  const randomColor = () => {
    const color = Math.floor(Math.random() * 7)
    const percent = Math.floor(Math.random() * 100)

    if(percent < density) {
      return colors[color]
    }

    return colors[0]
  }
</script>


<style lang="scss">
.cell-grid {
	display: grid;
	height: 2.5rem;
	grid-template-columns: repeat(auto-fill, minmax(.5rem, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(.5rem, 1fr));
	grid-auto-flow: dense;
	position: relative;
	z-index: 2;
}
</style>
