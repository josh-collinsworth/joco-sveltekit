<script lang="ts">
	import type { PageData } from './$types';
	import type Post from '$lib/types/post';

	import Main from '$lib/components/Main.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import PostList from '$lib/components/posts/PostList.svelte';

	export let data: PageData;

	let posts: Post[] = data.posts || [];
	let totalPosts: number = data.totalPosts.total;
</script>

<svelte:head>
	<title>Josh Collinsworth | Blog</title>
	<meta
		data-key="description"
		name="description"
		content="Writings on development, design, and random thoughts."
	/>
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png" />
</svelte:head>

<Main className="blog-roll">
	<div class="compressed-content double-wide">
		<PostList {posts} />

		<Pagination currentPage={1} {totalPosts} />
	</div>
</Main>
