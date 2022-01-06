<!-- TODO: this currently returns all posts. At some point, it will probably be worth adding pagination. -->
<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit'

	export const load = async ({ fetch }): Promise<LoadOutput> => {
		const res = await fetch(`/api/posts.json`)
		const { posts } = await res.json()

		return {
			props: { posts }
		}
	}
</script>

<script lang="ts">
	import type Post from '$lib/assets/js/interfaces/post'
	import PostList from '$lib/components/posts/PostList.svelte'
	
	export let posts: Post[] = []
</script>


<svelte:head>
	<title>Josh Collinsworth | Writing</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<div class="compressed-content double-wide">
	<PostList posts={posts} />
</div>
