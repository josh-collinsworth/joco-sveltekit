<script lang="ts">
  import TransitionWrapper from './TransitionWrapper.svelte'
  import { createEventDispatcher } from 'svelte'

  export let refresh: string = ''
  export let fullwidth: boolean = false
  export let sidebar: boolean = false
  export let reduceMotion: boolean = false

  const dispatch = createEventDispatcher()

  $: if (refresh) {
    console.log({refresh})
    dispatch('loaded', { refresh })
  }
</script>


{#key refresh}
  <TransitionWrapper {fullwidth} {sidebar} bind:reduceMotion on:loaded>
    <slot />
  </TransitionWrapper>
{/key}