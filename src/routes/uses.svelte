<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit'

  export const load = async (): Promise<LoadOutput> => {
		const Uses = await import('$lib/content/uses.md')
		
		return {
			props: {
				Uses: Uses.default
			}
		}
	}
</script>

<script lang="ts">
	import type { SvelteComponent } from 'svelte'
  export let Uses: SvelteComponent
</script>


<svelte:head>
  <title>Josh Collinsworth Uses</title>
	<meta data-key="description" name="description" content="Things I use and like">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>

<div class="uses compressed-content">
	<svelte:component this={Uses} />
</div>


<style lang="scss" global>
	@font-face {
		font-family: 'MonoLisa';
		src: url('/fonts/monolisa-regular-webfont.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	.uses {
		li a,
		p a {
			font-weight: bold;
		}
	}
</style>