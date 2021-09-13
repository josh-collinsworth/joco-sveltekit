<script lang="ts">
  import { prefersReducedMotion } from '$lib/assets/js/store'
  import { TIMING_DURATION } from '$lib/assets/js/constants'
  import { cubicIn, cubicOut } from 'svelte/easing'
  import { fly } from 'svelte/transition'

  let yIn: number
  let yOut: number

  $: yIn = $prefersReducedMotion ? 0 : 12
  $: yOut = $prefersReducedMotion ? 0 : -12
</script>


<div
  class="transition-wrapper"
  in:fly={{ y: yIn, duration: TIMING_DURATION, delay: TIMING_DURATION, easing: cubicOut }}
  out:fly={{ y: yOut, duration: TIMING_DURATION, easing: cubicIn }}
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