<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	let Uses: SvelteComponent = data.Uses

	import type { SvelteComponent } from 'svelte'
	import Main from '$lib/components/Main.svelte'
</script>

<svelte:head>
	<title>Josh Collinsworth | Uses</title>
	<meta data-key="description" name="description" content="Things I use and like" />
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png" />
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
