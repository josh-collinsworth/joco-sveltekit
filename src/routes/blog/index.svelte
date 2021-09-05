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
	import Loader from '$lib/components/Loader.svelte'
	import PostList from '$lib/components/PostList.svelte'
	import TransitionWrapper from '$lib/components/TransitionWrapper.svelte'

	export let posts: Post[] = []

	let postsAreLoaded: boolean = false
	// $: postsAreLoaded = posts.length > 0
</script>

<svelte:head>
	<title>Josh Collinsworth | Blog</title>
	<meta data-key="description" name="description" content="I usually write multiple posts per year! (Caveat: two is technically multiple.)">
</svelte:head>

<template>
	<h1>Blog</h1>

	{#if postsAreLoaded}
		<TransitionWrapper>
			<PostList {posts} />	
		</TransitionWrapper>
	{:else}
		<TransitionWrapper>	
			<Loader	/>
		</TransitionWrapper>
	{/if}
</template>