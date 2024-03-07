<script lang="ts">
	import type Post from '$lib/types/post'
	import Tag from '../tags/Tag.svelte'
	import TagList from '../tags/TagList.svelte'
	import ExternalLink from '../icons/ExternalLink.svelte'
	import { readableDate } from '$lib/assets/js/utils'

	export let external: boolean = false
	export let post: Post

	let slugPath: string
	$: slugPath = external ? '' : '/blog/'

	let computedURL: string
	$: computedURL = slugPath + post.slug
</script>

<li>
	<article class="post-preview">
		<a href={computedURL} data-sveltekit-preload-code class="image-link">
			<img
				src="/images/post_images/{post.coverImage}"
				style="
					aspect-ratio: {post.coverWidth} / {post.coverHeight};
					width: {post.coverWidth};
					height: {post.coverHeight}
				"
				alt="Preview image for {post.title}"
				loading="lazy"
			/>
		</a>

		<div class="article-info">
			<h2 class="h3">
				<a href={computedURL} data-sveltekit-preload-code>
					{#if external}
						{post.title} <ExternalLink />
					{:else}
						{post.title}
					{/if}
				</a>
			</h2>

			{#if post.subtitle}
				<p class="subtitle">{post.subtitle}</p>
			{:else}
				<p class="subtitle">{readableDate(post.date)}</p>
			{/if}

			<p class="excerpt">
				{post.excerpt}
				<a href={computedURL} data-sveltekit-preload-code>
					{#if external}
						Read more on {post.subtitle}
						<ExternalLink />
					{:else}
						Read&nbsp;more…
					{/if}
				</a>
			</p>

			{#if post.categories}
				<TagList>
					{#each post.categories as category}
						<Tag to="/blog/category/{category}/">
							{category}
						</Tag>
					{/each}
				</TagList>
			{/if}
		</div>
	</article>
</li>

<style lang="scss">
	li {
		margin: 0 0 var(--halfNote);

		@media (min-width: vars.$md) {
			margin: 0;
		}
	}

	.post-preview {
		transition: 0.2s;
		transform-origin: bottom left;
		display: block;

		@media (min-width: vars.$md) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: var(--halfNote);
			margin-bottom: var(--wholeNote);
		}

		.article-info {
			padding: 1.5rem 0;
			max-width: 32rem;

			@media (min-width: vars.$md) {
				padding: 0;
			}
		}

		h2.h3 {
			margin: 0;
			line-height: 1.2;
			border: 0;
			padding: 0;
			font-size: 1.5rem;
			font-weight: normal;

			&::before {
				display: none;
			}
		}

		.image-link {
			display: block;
			width: 100%;
			line-height: 1;

			img {
				margin: 0;
				width: auto;
				max-width: 100%;
				border: 1px solid hsla(var(--darkGrayHSL), 1);
			}
		}

		.subtitle,
		.excerpt a {
			font-weight: bold;
			text-transform: uppercase;
			font-family: var(--headingFont);
			font-style: normal;
			font-size: 0.65rem;
			color: var(--midGray);
			margin: 0.5em 0 0;
		}

		.excerpt {
			font-style: italic;
			margin: var(--quarterNote) 0 1.5rem;
			font-size: 0.8rem;
			line-height: 1.5;

			&:last-child {
				margin-bottom: 0;
			}

			a {
				display: block;
				margin-top: var(--quarterNote);
			}
		}
	}
</style>
