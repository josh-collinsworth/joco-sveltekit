<script lang="ts">
  import { fly } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'
  import { prefersReducedMotion } from '$lib/assets/js/store'

  const time: number = 360
  let yIn: number
  let yOut: number

  $: yIn = $prefersReducedMotion ? 0 : 12
  $: yOut = $prefersReducedMotion ? 0 : -12
</script>


<div
  class="transition-wrapper"
  in:fly={{ y: yIn, duration: time, delay: time, easing: cubicOut }}
  out:fly={{ y: yOut, duration: time, easing: cubicIn }}
>
  <slot />
</div>


<style lang="scss" global>
  .transition-wrapper {

    .fullwidth & {
      grid-column: 1 / 4;
    }

    .sidebar & {
      grid-column: 1 / 2;
    }

    .fullwidth.sidebar & {
      grid-column: 1 / 3;
    }
  }
</style>