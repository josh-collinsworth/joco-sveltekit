<script lang="ts">
  import TransitionWrapper from './TransitionWrapper.svelte'

  export let refresh: string = ''
  export let fullwidth: boolean = false
  export let sidebar: boolean = false
  export let reduceMotion: boolean = false
</script>


{#key refresh}
  <TransitionWrapper {fullwidth} {sidebar} {reduceMotion}>
    <slot />
  </TransitionWrapper>
{/key}