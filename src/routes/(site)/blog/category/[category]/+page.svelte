<script lang="ts">
	import type { PageData } from './$types'
	import type Post from '$lib/types/post'

	import Main from '$lib/components/Main.svelte'
	import PostList from '$lib/components/posts/PostList.svelte'

	interface Props {
		data: PageData
	}

	let { data }: Props = $props()

	let posts: Post[] = data.posts
	let category: string = data.category
</script>

<svelte:head>
	<title>Blog | Category: {category}</title>
	<meta
		property="og:image"
		content="https://joshcollinsworth.com/images/site-image.png"
	/>
</svelte:head>

<Main className="blog-roll">
	<div class="compressed-content double-wide">
		<h1 class="h2">Category: <b>{category}</b></h1>

		<PostList {posts} />
	</div>
</Main>

<style>
	h1.h2 {
		margin: 0 0 var(--whole-note);
	}
</style>
