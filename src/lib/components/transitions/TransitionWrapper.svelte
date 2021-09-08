<script lang="ts">
import { fly } from 'svelte/transition'
import { cubicIn, cubicOut } from 'svelte/easing'

export let fullwidth: boolean = false
export let sidebar: boolean = false

const time: number = 360
</script>


<div
  class="transition-wrapper"
  class:fullwidth
  class:sidebar
  in:fly={{ y: 12, duration: time, delay: time, easing: cubicOut }}
  out:fly={{ y: -12, duration: time, easing: cubicIn }}
>
  <slot />
</div>


<style lang="scss">
.transition-wrapper {

  &.fullwidth {
    grid-column: 1 / 4;
  }

  &.sidebar {
    grid-column: 1 / 3;
  }
}
</style>