<script lang="ts">
	import type { PageData } from './$types';

	import type Post from '$lib/types/post';
	import PostList from '$lib/components/posts/PostList.svelte';
	import Main from '$lib/components/Main.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data: PageData;

	export let posts: Post[] = data.posts || [];
	export let page: number = data.page || 1;
	export let totalPosts: number = data.totalPosts;

	$: lowerBound = page * 10 - 9 || 1;
	$: upperBound = Math.min(page * 10, totalPosts);
</script>

<svelte:head>
	<title>Josh Collinsworth | Blog archive page {page}</title>
	<meta
		data-key="description"
		name="description"
		content="Past posts on the web, development, and design."
	/>
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png" />
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

<style lang="scss">
	h1.h2 {
		font-size: 1.3rem;
		padding: 0;
		margin: 0 0 var(--halfNote);

		&::before {
			display: none;
		}
	}
</style>
