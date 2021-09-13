<script lang="ts">
  import TransitionWrapper from './TransitionWrapper.svelte'
  import { createEventDispatcher, onMount } from 'svelte'

  export let refresh: string|boolean = ''
  export let fullwidth: boolean = false
  export let sidebar: boolean = false

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
  <TransitionWrapper {fullwidth} {sidebar} on:loaded>
    <slot />
  </TransitionWrapper>
{/key}