<script lang="ts">
import { fly } from 'svelte/transition'
import { cubicIn, cubicOut } from 'svelte/easing'

export let fullwidth: boolean = false

const time: number = 360
</script>


<div
  class="transition-wrapper"
  class:fullwidth
  in:fly={{ y: 12, duration: time, delay: time, easing: cubicOut }}
  out:fly={{ y: -12, duration: time, easing: cubicIn }}
>
  <slot />
</div>