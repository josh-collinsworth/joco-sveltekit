<script context="module" lang="ts">
  import { EXTERNAL_POSTS } from '$lib/assets/js/constants';

	export async function load({ fetch, page }) {
    const category = page.params.category
    //TODO: maybe add a way to fetch with query parameter to avoid filtering?
		const res = await fetch(`/blog/posts-detail.json`)
		let { posts } = await res.json()

    const matchingPosts = posts
      .filter(post => post.categories.includes(category))

		return {
			props: { 
        posts: matchingPosts,
        externalPosts: EXTERNAL_POSTS.filter(post => post.categories.includes(category)),
        category
      }
		}
	}
</script>

<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import PostList from '$lib/components/posts/PostList.svelte'

  export let posts: Post[]
  export let externalPosts: Post[]
  export let category: string
</script>


<svelte:head>
  <title>Blog | Category: {category}</title>
</svelte:head>

<template>
  <h1 class="h4">[Category: { category }]</h1>

  {#if externalPosts.length}
    <h3>Matches from external posts:</h3>
    <PostList posts={externalPosts} external={true} />
  {/if}

  <h2 class="h3">Matches from this blog:</h2>
  <PostList {posts} />  
</template>