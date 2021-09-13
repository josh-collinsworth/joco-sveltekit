<script lang="ts">
  import { fly } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'

  export let fullwidth: boolean = false
  export let sidebar: boolean = false
  export let reduceMotion: boolean = false

  const time: number = 360
  let yIn: number
  let yOut: number

  $: yIn = reduceMotion ? 0 : 12
  $: yOut = reduceMotion ? 0 : -12
</script>


<div
  class="transition-wrapper"
  class:fullwidth
  class:sidebar
  in:fly={{ y: yIn, duration: time, delay: time, easing: cubicOut }}
  out:fly={{ y: yOut, duration: time, easing: cubicIn }}
>
  <slot />
</div>


<style lang="scss">
  .transition-wrapper {

    &.fullwidth {
      grid-column: 1 / 4;
    }

    &.sidebar {
      grid-column: 1 / 2;
    }

    &.fullwidth.sidebar {
      grid-column: 1 / 3;
    }
  }
</style>