<script lang="ts">
  import { onMount } from 'svelte'

  export let reduceMotion: boolean = false
  export let setReduceMotion: (reduce: boolean) => void

  onMount(() => {
    const userMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			const storedMotionPreference = JSON.parse(window.localStorage.getItem('collinsworth-reduce-motion'))

			console.log(userMotionPreference)
			if (
        (userMotionPreference && storedMotionPreference !== false) 
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
  Move
</button>


<style lang="scss">
#motion-toggle {
	font-weight: bold;
	font-size: .6rem;
	text-transform: uppercase;
	color: var(--ink);

	&[aria-pressed="true"]::before {
		content: '';
		width: calc(100% + .1rem);
		height: .1rem;
		background: var(--ink);
		display: block;
		position: absolute;
		transform-origin: center;
		top: calc(50% - 0.05rem);
		left: -0.05rem;
		z-index: 2;
		border: 0;
		transform: rotate(45deg);
	}

	&:hover {
		color: var(--yellow);
	}
}
</style>
