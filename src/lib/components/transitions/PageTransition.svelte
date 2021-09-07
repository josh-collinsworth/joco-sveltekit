<script lang="ts">
  import TransitionWrapper from './TransitionWrapper.svelte'

  export let refresh: string = ''
  export let fullwidth: boolean = false
</script>


{#key refresh}
  <TransitionWrapper {fullwidth}>
    <slot />
  </TransitionWrapper>
{/key}