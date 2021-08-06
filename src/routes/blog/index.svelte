<template>
	<main>
		<h1>Blog</h1>

		<ul>
			{#each posts as post}
				<li>
					<a href={'/blog/' + post.slug}>{post.title}</a>
				</li>
			{/each}
		</ul>
	</main>
</template>

<script context="module" lang="typescript">
	export async function load({ fetch }) {
		const res = await fetch(`/blog/posts.json`)
		const { posts } = await res.json()

		return {
			props: { posts }
		}
	}
</script>

<script>
	export let posts;
</script>
