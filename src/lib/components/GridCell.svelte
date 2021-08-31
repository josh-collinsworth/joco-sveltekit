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


<script lang="ts">
  import { onMount } from 'svelte'
  export let color: string

  let size: number = 1

  onMount(() => {
		const cellSize = Math.random()
		if (cellSize > 0.95) {
			size = 3
		} else if (cellSize > 0.8) {
			size = 2
		}
  })

  const randomDelay = () => {
    return Math.random() * .5 + "s"
  }

  const randomDrop = () => {
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


<style lang="scss">
.cell {
	opacity: 0;
	animation: fadeCellIn .2s ease-out forwards;
	padding: 50% 0;

  &.inverted {
    transform: rotateX(180deg);
    top: 1rem;
  }
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
