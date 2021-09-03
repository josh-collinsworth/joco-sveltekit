<script lang="ts">
  import { onMount } from 'svelte'
  export let color: string = 'transparent'

  let size: number = 1

  onMount((): void => {
		const cellSize = Math.random()
		if (cellSize > 0.95) {
			size = 3
		} else if (cellSize > 0.8) {
			size = 2
		}
  })

  const randomDelay = (): string => {
    return Math.random() * .5 + "s"
  }

  const randomDrop = (): string => {
    const drop = Math.random() * 100
			if (drop > 93) {
				return '1rem'
			} else if (drop > 84) {
				return '.5rem'
			} else if (drop > 77) {
				return '-.5rem'
			} else if (drop > 70) {
				return '-1rem'
			}
			return '0'
  }
</script>


<template>
	<div
		class="cell"
		style="
      background: {color};
			grid-area: span {size} / span {size};
			animation-delay: {randomDelay()};
			transform: translateY({randomDrop()});
    "
	>
	</div>
</template>


<style lang="scss">
.cell {
	opacity: 0;
	animation: fadeCellIn .2s ease-out forwards;
	padding: 50% 0;
}

@keyframes fadeCellIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
