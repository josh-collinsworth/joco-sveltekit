<script lang="ts">
	// throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
	// Suggestion (check code before using, and possibly convert to data.X access later):
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ Uses } = data);

	import type { SvelteComponent } from 'svelte'
	import Main from '$lib/components/Main.svelte'
  
	export let Uses: SvelteComponent
</script>


<svelte:head>
  <title>Josh Collinsworth Uses</title>
	<meta data-key="description" name="description" content="Things I use and like">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<Main>
	<div class="uses compressed-content">
		<svelte:component this={Uses} />
	</div>
</Main>


<style lang="scss" global>
	.uses {
		li a,
		p a {
			font-weight: bold;
		}
	}
</style>