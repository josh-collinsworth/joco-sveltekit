<script lang="ts">
	import type Post from '$lib/types/post'

	import TagList from './tags/TagList.svelte'
	import Tag from './tags/Tag.svelte'
	import PostSearch from './PostSearch.svelte'
	
	export let popularPosts: Post[]
	export let allCategories: string[]
</script>


<aside class="sidebar">
	<PostSearch />

	<h2>Popular posts</h2>

	<ul class="sidebar__posts-list">
		{#each popularPosts as post}
			<li>
				<a href="/blog/{post.slug}" data-sveltekit-preload-code>
					<span>{post.title}</span>
				</a>
			</li>
		{/each}
	</ul>

	<h2>Categories</h2>

	<TagList>
		{#each allCategories as category}
			<Tag to="/blog/category/{category}">
				{ category }
			</Tag>
		{/each}
	</TagList>
	
	<h2>More links</h2>

	<ul>
		<li>
			<a href="/blog">All blog posts</a>
		</li>
		<li>
			<a href="/about-me">More about me</a>
		</li>
		<li>
			<a href="/">Home</a>
		</li>
	</ul>
</aside>


<style lang="scss">
	.sidebar {
		font-size: .85rem;
		max-width: var(--maxWidth);
		font-family: var(--headingFont);
		margin: var(--dottedHalfNote) 0 0;

		@media (min-width: vars.$lg) {
			margin: 0;
		}
		
		:global(h2) {
			font-size: .8em;
			font-weight: bold;
			text-transform: uppercase;
			margin: 3em 0 1em;
			padding: 0 0 .1em 0;
			border: none;
			border-bottom: .15em solid;
			width: max-content;
			text-align: inherit;
			color: var(--headingColor);

			&::before {
				display: none;
			}
		}

		h2:first-child {
			margin-top: 0;
		}

		ul {
			margin: 0;
			list-style-type: none;
			padding: 0;
			line-height: 1.2;

			&.tag-list li {
				margin: 0;
				font-size: inherit;
			}

			&.sidebar__posts-list li {
				font-size: inherit;

				a {
					font-size: inerit;
					color: inherit;
					text-decoration: none;
					position: relative;
					display: inline-block;

					&:hover span,
					&:focus span {
						position: relative;
						outline: none;

						&:before {
							position: absolute;
							content: '[';
							left: -.35em;
						}
					}

					&:hover,
					&:focus {
						outline: none;

						&:after {
							position: absolute;
							content: ']';
						}
					}
				}
			}
		}
	}
</style>
