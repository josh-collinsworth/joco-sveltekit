<script context="module" lang="ts">
	export async function load({ fetch, page }) {
    const category = page.params.category
    //TODO: maybe add a way to fetch with query parameter to avoid filtering?
		const res = await fetch(`/blog/posts.json`)
		const { posts } = await res.json()
    const matchingPosts = posts.filter(post => post.categories.includes(category));

		return {
			props: { posts: matchingPosts, category }
		}
	}
</script>

<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post.js'
  import PostList from '$lib/components/PostList.svelte'

  export let posts: Post[]
  export let category: string
</script>


<svelte:head>
  <title>Blog | Category: {category}</title>
</svelte:head>

<template>
  <h1>Category: { category }</h1>
  
  <PostList {posts} />  
</template>