<script lang="ts">
import LightDarkIcon from './LightDarkIcon.svelte'

import { onMount } from 'svelte'

export let setPrefersDarkMode: (goDark: boolean) => void

let darkMode: boolean = false
let enableOrDisable: string

$: enableOrDisable = darkMode ? 'Disable' : 'Enable'

onMount(() => {  
  const userPrefersDark = 
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

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
  title="{enableOrDisable} dark mode"
  aria-pressed={darkMode}
>
  <span class="sr">{ enableOrDisable } dark mode</span>
  <LightDarkIcon />
</button>


<style lang="scss" global>

button#dark-mode-toggle {
  --button-size: 2.2rem;

  cursor: pointer;
  height: var(--button-size);
  width: var(--button-size);
  overflow: hidden;
  padding: 0;
  border-radius: 2rem;
  border: .1rem solid var(--ink);
  background: var(--paper);
  transition: all .25s cubic-bezier(1, 0, 0, 1);
  z-index: 4;

  &:hover {
    background: var(--paper);
  }

	&:hover svg {
		path, circle {
			stroke: var(--yellow);
		}
	}

	&.dark svg {
		transform: translateY(0);
	}

	svg {
		width: 2rem;
		height: 4rem;
		transform: translateY(-1.975rem);
		transition: all .4s cubic-bezier(.7,-0.01,0,1.01);

		path,
		circle {
			transition: all .4s cubic-bezier(.7,-0.01,0,1.01);
			stroke: var(--ink);
		}
	}
}
</style>
