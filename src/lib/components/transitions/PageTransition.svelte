<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte'
  import { prefersReducedMotion } from '$lib/data/store'
  import { TIMING_DURATION } from '$lib/data/constants'
  import { cubicIn, cubicOut } from 'svelte/easing'
  import { fly } from 'svelte/transition'

  let yIn: number
  let yOut: number

  $: yIn = $prefersReducedMotion ? 0 : 12
  $: yOut = $prefersReducedMotion ? 0 : -12

  export let refresh: string|boolean = ''

  const dispatch = createEventDispatcher()
  
  //For some reason these are both needed; otherwise the first click won't trigger the loaded event.
  onMount(() => {
    dispatch('loaded', { refresh })
  })

  $: {
    dispatch('loaded', { refresh })
  }
</script>


{#key refresh}
  <div
    class="transition-wrapper"
    in:fly={{ 
      y: yIn,
      duration: TIMING_DURATION,
      delay: TIMING_DURATION,
      easing: cubicOut 
    }}
    out:fly={{
      y: yOut,
      duration: TIMING_DURATION,
      easing: cubicIn
    }}
  >
    <slot />
  </div>
{/key}


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