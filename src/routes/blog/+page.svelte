<script lang="ts">
	// throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
	// Suggestion (check code before using, and possibly convert to data.X access later):
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ posts, totalPosts } = data);

	import type Post from '$lib/types/post'
	
	import Main from '$lib/components/Main.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import PostList from '$lib/components/posts/PostList.svelte'
	
	// export let posts: Post[] = []
	// export let totalPosts: number
</script>


<svelte:head>
	<title>Josh Collinsworth | Blog</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<Main>	
	<div class="compressed-content double-wide">
		<PostList posts={posts} />

		<Pagination currentPage={1} {totalPosts} />
	</div>
</Main>