<script lang="ts">
  export let reduceMotion: boolean = false
  export let toggleReduceMotion: () => void

  let enableOrDisable: string
  $: enableOrDisable = reduceMotion ? 'Disable' : 'Enable'
</script>


<button
  id="motion-toggle"
  class="settings-toggle"
  on:click={toggleReduceMotion}
  title="{enableOrDisable} reduced motion"
  aria-pressed={reduceMotion}
>
  <span class="sr">{ enableOrDisable } reduced motion</span>
  Motion
</button>


<style lang="scss">
#motion-toggle {
	font-weight: bold;
	font-size: .5rem;
	color: var(--ink);

	&[aria-pressed="true"]::before {
		content: '';
		width: 100%;
		height: .1rem;
		background: var(--ink);
		display: block;
		position: absolute;
		transform-origin: center;
		top: calc(50% - .05rem);
		transform: rotate(-45deg);
	}

	&:hover {
		color: var(--yellow);
	}
}
</style>
