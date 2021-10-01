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
	import { EXTERNAL_POSTS } from '$lib/data/external_posts'

	let postTypes: string = 'all'
	
	export let posts: Post[] = []

	$: combinedPosts = [
		{
			type: 'external',
			heading: 'External Posts',
			description: 'Things I got paid to write for other sites',
			posts: EXTERNAL_POSTS
		}, {
			type: 'internal',
			heading: 'Internal Posts',
			description: 'Things I wrote just because I wanted to',
			posts
		}
	]

	$: filteredPosts = combinedPosts.filter(post => postTypes === 'all' || post.type === postTypes)
</script>


<svelte:head>
	<title>Josh Collinsworth | Writing</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
</svelte:head>

<template>
	<fieldset>
		<legend>Show posts:</legend>

		<div class="field-wrap">
			<input id="posts-all" type=radio bind:group={postTypes} name="post-types" value="all" />
			<label for="posts-all">
				All
			</label>
		</div>	
		
		<div class="field-wrap">
			<input id="posts-internal" type=radio bind:group={postTypes} name="post-types" value="internal" />
			<label for="posts-internal">
				My blog <em>(this site only)</em>
			</label>
		</div>
		
		<div class="field-wrap">
			<input id="posts-external" type=radio bind:group={postTypes} name="post-types" value="external" />
			<label for="posts-external">
				External <em>(posts for other sites only)</em>
			</label>
		</div>
	</fieldset>

	{#each filteredPosts as group (group.type)}
		<div class="post-group" transition:slide="{{ duration: 250, easing: cubicInOut }}">
			<div class="heading-wrapper">
				<h2>{group.heading}</h2>
				<p>{group.description}</p>
			</div>
			
			<PostList posts={group.posts} external={group.type === 'external'} />
		</div>
	{/each}
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