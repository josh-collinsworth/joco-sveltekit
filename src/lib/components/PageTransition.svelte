<script lang="ts">
  import { fly } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'
  export let refresh: string = ''

  let time: number = 360
</script>

{#key refresh}
  <div
    in:fly={{ y: 12, duration: time, delay: time, easing: cubicOut }}
    out:fly={{ y: -12, duration: time, easing: cubicIn }}
  >
    <slot />
  </div>
{/key}

<style>
  div {
    width: 100%;
  }
</style>