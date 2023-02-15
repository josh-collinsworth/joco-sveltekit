<script lang="ts">
	import type { PageData } from './$types'
	import type category from '$lib/types/category'
	import Main from '$lib/components/Main.svelte'

	export let data: PageData;

	let uniqueCategories: category[] = data.uniqueCategories
</script>


<svelte:head>
	<title>Blog | Categories</title>
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<Main>
	<div class="compressed-content">
		<h1 class="h2">All blog categories</h1>
		
		<ul>
			{#each uniqueCategories as category}
			<li>
				<a href="/blog/category/{category.title}">
					{ category.title }
				</a>
				({category.count})
			</li>
			{/each}
		</ul>
	</div>
</Main>


<style lang="scss">
	h1.h2 {
		margin: 0 0 var(--wholeNote);
	}

	li {
		text-transform: uppercase;
		margin-bottom: var(--quarterNote);
		font-style: italic;
		
		a {
			font-family: var(--headingFont);
			font-weight: bold;
			font-size: 0.85em;
			font-style: normal;
		}
	}
</style>