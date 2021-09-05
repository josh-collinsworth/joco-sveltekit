<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch(`/blog/posts-detail.json`)
		const { posts } = await res.json()

		return {
			props: { posts }
		}
	}
</script>

<script lang="ts">
	import type Post from '$lib/assets/js/interfaces/post'
	import PostList from '$lib/components/PostList.svelte'

	export let posts: Post[]
</script>

<svelte:head>
	<title>Josh Collinsworth | Blog</title>
	<meta data-key="description" name="description" content="I usually write multiple posts per year! (Caveat: two is technically multiple.)">
</svelte:head>

<template>
	<h1>Blog</h1>

	<PostList {posts} />	
</template>