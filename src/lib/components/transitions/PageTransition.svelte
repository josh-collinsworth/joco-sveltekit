<script lang="ts">
  import TransitionWrapper from './TransitionWrapper.svelte'

  export let refresh: string = ''
</script>


{#key refresh}
  <TransitionWrapper>
    <slot />
  </TransitionWrapper>
{/key}