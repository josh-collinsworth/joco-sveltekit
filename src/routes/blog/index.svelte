<template>
	<h1>Blog</h1>

	<ul>
		{#each posts as post}
			<li>
				<article>
					<a href={'/blog/' + post.slug}>
						<img src="/images/post_images/{post.coverImage}" alt="" />
						<h2>{post.title}</h2>
					</a>
					<p>{post.excerpt}</p>
				</article>
			</li>
		{/each}
	</ul>
</template>

<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch(`/blog/posts.json`)
		const { posts } = await res.json()


		return {
			props: { posts }
		}
	}
</script>

<script>
	export let posts
</script>

<style lang="scss">
	ul {
		padding: 0;
		list-style-type: none;
		
		article {
			margin-bottom: 8rem;
			
			h2 {
				margin: 0;
				border: 0;
				padding: 0;
			}
			
			img {
				margin: 0 0 .5rem;
			}
			
			p {
				font-style: italic;
			}
		}
	}
</style>
