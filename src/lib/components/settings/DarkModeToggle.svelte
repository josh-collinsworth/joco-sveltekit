<script lang="ts">
  import LightDarkIcon from './LightDarkIcon.svelte'
  import { prefersDarkMode, prefersLightMode } from '$lib/assets/js/store';

  let enableOrDisable: string

  $: enableOrDisable = $prefersDarkMode ? 'Disable' : 'Enable'

  const toggleDarkMode = () => {
    prefersDarkMode.set(!$prefersDarkMode)
    prefersLightMode.set(!$prefersDarkMode)
    
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('collinsworth-dark-mode', JSON.stringify($prefersDarkMode))
    }
  }
</script>


<button
  id="dark-mode-toggle"
  on:click={toggleDarkMode}
  class:dark={$prefersDarkMode}
  class="settings-toggle"
  title="{enableOrDisable} dark mode"
  aria-pressed={$prefersDarkMode}
>
  <span class="sr">{ enableOrDisable } dark mode</span>
  <LightDarkIcon />
</button>


<style lang="scss" global>
  #dark-mode-toggle {
    &:hover svg {
      path, circle {
        stroke: var(--yellow);
      }
    }

    &.dark svg {
      transform: translateY(0);
    }

    svg {
      --item-transition: .4s cubic-bezier(.7,-0.01,0,1.01);
      width: 2rem;
      height: 4rem;
      transform: translateY(-1.975rem);
      transition: transform var(--item-transition), fill var(--item-transition), stroke var(--item-transition), background var(--item-transition);

      path,
      circle {
        transition: transform var(--item-transition), fill var(--item-transition), stroke var(--item-transition), background var(--item-transition);
        stroke: var(--ink);
      }
    }
  }
</style>
