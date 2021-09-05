<script lang="ts">
import { fly } from 'svelte/transition'
import { cubicIn, cubicOut } from 'svelte/easing'

const time: number = 360
</script>


<div
  in:fly={{ y: 12, duration: time, delay: time, easing: cubicOut }}
  out:fly={{ y: -12, duration: time, easing: cubicIn }}
>
  <slot />
</div>


<style>
div {
  width: 100%;
}
</style>