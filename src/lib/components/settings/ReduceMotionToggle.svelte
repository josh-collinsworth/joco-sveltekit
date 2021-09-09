<script lang="ts">
	import PlayPauseIcon from './PlayPauseIcon.svelte';
  import { onMount } from 'svelte'

  export let reduceMotion: boolean = false
  export let setReduceMotion: (reduce: boolean) => void

  onMount(() => {
    const userMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			const storedMotionPreference = JSON.parse(window.localStorage.getItem('collinsworth-reduce-motion'))

			if (
        (userMotionPreference && !storedMotionPreference) 
        || storedMotionPreference === true) {
				reduceMotion = true
				setReduceMotion(reduceMotion)
			}
  })

  let enableOrDisable: string
  $: enableOrDisable = reduceMotion ? 'Disable' : 'Enable'
</script>


<button
  id="motion-toggle"
  class="settings-toggle"
  on:click={() => setReduceMotion(!reduceMotion)}
  title="{enableOrDisable} reduced motion"
  aria-pressed={reduceMotion}
>
  <span class="sr">{ enableOrDisable } reduced motion</span>
  <PlayPauseIcon />
</button>


<style lang="scss" global>
#motion-toggle {
	color: var(--ink);

	&:hover {
		color: var(--yellow);
	}

	&:hover svg {
		path, rect {
			stroke: var(--yellow);
		}
	}

	&[aria-pressed=true] svg {
		transform: translateY(0);
	}

	svg {
    --item-transition: .4s cubic-bezier(.7,-0.01,0,1.01);

		width: 2rem;
		height: 4rem;
		transform: translateY(-1.975rem);
		transition: transform var(--item-transition), fill var(--item-transition), stroke var(--item-transition), background var(--item-transition);

		path,
		rect {
			transition: transform var(--item-transition), fill var(--item-transition), stroke var(--item-transition), background var(--item-transition);
			stroke: var(--ink);
		}
	}
}

</style>
