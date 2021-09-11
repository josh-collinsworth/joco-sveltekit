<script lang="ts">
import LightDarkIcon from './LightDarkIcon.svelte'
import { onMount } from 'svelte'

export let setPrefersDarkMode: (goDark: boolean) => void

let darkMode: boolean = false
let enableOrDisable: string

$: enableOrDisable = darkMode ? 'Disable' : 'Enable'

onMount(() => {  
  const userPrefersDark = 
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  darkMode = JSON.parse(localStorage.getItem('collinsworth-dark-mode'))

  const goDark = (darkMode || userPrefersDark && darkMode !== false)

  setPrefersDarkMode(goDark)
  darkMode = goDark
})

const toggleDarkMode = () => {
  if (typeof darkMode !== 'boolean' && typeof window !== 'undefined') {
    window.localStorage.setItem('collinsworth-dark-mode', JSON.stringify(false))
  }
  darkMode = !darkMode
  setPrefersDarkMode(darkMode)
  
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('collinsworth-dark-mode', JSON.stringify(darkMode))
  }
}
</script>


<button
  id="dark-mode-toggle"
  on:click={toggleDarkMode}
  class:dark={darkMode}
  class="settings-toggle"
  title="{enableOrDisable} dark mode"
  aria-pressed={darkMode}
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
