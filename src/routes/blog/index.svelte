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
	import Loader from '$lib/components/Loader.svelte'
	import PostList from '$lib/components/PostList.svelte'
	import TransitionWrapper from '$lib/components/transitions/TransitionWrapper.svelte'
	import { EXTERNAL_POSTS } from '$lib/assets/js/constants'

	export let posts: Post[] = []

	let postsAreLoaded: boolean
	$: postsAreLoaded = posts.length > 0
</script>

<svelte:head>
	<title>Josh Collinsworth | Blog</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
</svelte:head>

<template>
	<h1>Writing</h1>

	<h2>External writing:</h2>

	<PostList posts={EXTERNAL_POSTS} external={true} />


	<h2>My blog:</h2>

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


<style lang="scss">
	h3,
	ul {
		margin: 0;
		padding: 0;
	}

	h2 {
		margin-bottom: 0;
		border: none;
	}
</style>