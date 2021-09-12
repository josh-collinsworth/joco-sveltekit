<!-- TODO: this currently returns all posts. At some point, it will probably be worth adding pagination. -->
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
	import PostList from '$lib/components/posts/PostList.svelte'
	import { EXTERNAL_POSTS } from '$lib/assets/js/constants'

	export let posts: Post[] = []
</script>


<svelte:head>
	<title>Josh Collinsworth | Writing</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
</svelte:head>

<template>
	<div class="heading-wrapper">
		<h2>External writing</h2>
		<p>Works for other publications and websites</p>
	</div>
	
	<PostList posts={EXTERNAL_POSTS} external={true} />
	
	<div class="heading-wrapper">
		<h2>My blog</h2>
		<p>Published on this website only</p>
	</div>

	<PostList {posts} />	
</template>


<style lang="scss">
	.heading-wrapper {
		h2 {
			margin-bottom: 0;
			border: 0;
			padding: 0 0 0.25rem;
		}

		p {
			margin: 0 0 2rem;
			font-style: italic;
		}
	}
</style>