<script lang="ts">
	import type { PageData } from './$types'

	import type Post from '$lib/types/post'
	import PostList from '$lib/components/posts/PostList.svelte'
	import Main from '$lib/components/Main.svelte'
	import Pagination from '$lib/components/Pagination.svelte'

	interface Props {
		data: PageData
		posts?: Post[]
		page?: number
		totalPosts?: number
	}

	let {
		data,
		posts = data.posts || [],
		page = data.page || 1,
		totalPosts = data.totalPosts
	}: Props = $props()

	let lowerBound = $derived(page * 10 - 9 || 1)
	let upperBound = $derived(Math.min(page * 10, totalPosts))
</script>

<svelte:head>
	<title>Josh Collinsworth | Blog archive page {page}</title>
	<meta
		data-key="description"
		name="description"
		content="Past posts on the web, development, and design."
	/>
	<meta
		property="og:image"
		content="https://joshcollinsworth.com/images/site-image.png"
	/>
</svelte:head>

<Main className="blog-roll">
	{#if lowerBound === totalPosts}
		<h1 class="h2">Post {totalPosts} of {totalPosts}</h1>
	{:else}
		<h1 class="h2">Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
	{/if}
	<Pagination currentPage={page} {totalPosts} />
	<PostList {posts} />
	<Pagination currentPage={page} {totalPosts} />
</Main>

<style>
	h1.h2 {
		font-size: 1.3rem;
		padding: 0;
		margin: 0 0 var(--half-note);

		&::before {
			display: none;
		}
	}
</style>
