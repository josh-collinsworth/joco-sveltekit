<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch(`/blog/posts.json`)
		const { posts } = await res.json()

		return {
			props: { posts }
		}
	}
</script>

<script lang="ts">
	import type Post from '$lib/assets/js/interfaces/post.js'
	import PostList from '$lib/components/PostList.svelte'

	export let posts: Post[]
</script>

<template>
	<h1>Blog</h1>

	<PostList {posts} />	
</template>