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
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let postTypes: string = 'internal'
	
	export let posts: Post[] = []
</script>


<svelte:head>
	<title>Josh Collinsworth | Writing</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
</svelte:head>

<template>
	<div class="post-group">
		
		<PostList posts={posts} />
	</div>
</template>


<style lang="scss">
	.field-wrap {
		display: flex;
		align-items: center;

		input {
			margin-right: .5em;
		}
	}

	fieldset {
		width: max-content;
		padding: 0.5rem 1rem 1rem;
		margin: 0 0 4rem;
		border: 1px solid var(--lightBlue);
		font-size: 0.85rem;

		legend {
			color: var(--lightBlue);
			font-size: 0.7rem;
			padding: 0 0 0 .5em;
			font-weight: bold;
			text-transform: uppercase;
			background: var(--paper);
			position: relative;
			left: -0.5em;
		}
	}

	.post-group {
		padding-bottom: 2rem;
	}

	.heading-wrapper {
		h2 {
			margin: 0;
			border: 0;
			padding: 0 0 0.25rem;
		}

		p {
			margin: 0 0 2rem;
			font-style: italic;
		}
	}
</style>