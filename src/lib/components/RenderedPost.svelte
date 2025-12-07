<script lang="ts">
	import type Post from '$lib/types/post'

	import TagList from '$lib/components/tags/TagList.svelte'
	import Tag from '$lib/components/tags/Tag.svelte'
	import Bio from '$lib/components/posts/Bio.svelte'
	import Comments from '$lib/components/Comments.svelte'
	import Main from '$lib/components/Main.svelte'
	import { appendScriptToHead, readableDate } from '$lib/assets/js/utils'
	import { onMount } from 'svelte'
	import type { SvelteComponent } from 'svelte'
	import { dev } from '$app/environment'

	interface Props {
		PostContent: SvelteComponent
		meta: Post
	}

	let { PostContent, meta }: Props = $props()

	const defaultImagePath = `/images/site-image.png`
	let imagePath: string = $derived(
		meta.coverImage
			? meta.coverImage.startsWith('http')
				? meta.coverImage
				: `/images/post_images/${meta.coverImage}`
			: defaultImagePath
	)

	const wrapTablesInScrollableDivs = (): void => {
		/**
		 * This is super hacky and I don't like it, but it lets
		 * tables scroll horizontally without clobbering accessibility,
		 * so here it is.
		 */
		const tables = document.querySelectorAll('.post table')

		tables.forEach((table) => {
			let newHTML = `<div class="table-outer"><div class="table">`
			newHTML += table.outerHTML
			newHTML += `</div></div>`

			table.insertAdjacentHTML('afterend', newHTML)
			table.remove()
		})
	}

	const loadEmbeds = (): void => {
		/**
		 * This is necessary because prefetching blog posts prevents the
		 * Twitter/CodePen widget script from loading. Plus, there isn't
		 * really a good way to embed scripts in Markdown to begin
		 * with. So, this does the job just fine. All I need to do
		 * is paste the embed code, and remove the script tag from it.
		 */
		const tweets = document.getElementsByClassName('twitter-tweet')
		const codePens = document.getElementsByClassName('codepen')
		const mastodonEmbeds = document.getElementsByClassName('mastodon-embed')

		if (tweets.length) {
			appendScriptToHead('https://platform.twitter.com/widgets.js')
		}
		if (codePens.length) {
			appendScriptToHead('https://cpwebassets.codepen.io/assets/embed/ei.js')
		}
		if (mastodonEmbeds.length) {
			appendScriptToHead('https://hachyderm.io/embed.js')
		}
	}

	onMount((): void => {
		wrapTablesInScrollableDivs()
		loadEmbeds()
	})
</script>

<svelte:head>
	<title>{meta.title} - Josh Collinsworth blog</title>
	<meta data-key="description" name="description" content={meta.excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.excerpt} />
	<meta property="og:image" content="https://joshcollinsworth.com{imagePath}" />
	<meta property="og:image:width" content={meta.coverWidth} />
	<meta property="og:image:height" content={meta.coverHeight} />
	<meta
		property="og:url"
		content="https://joshcollinsworth.com/blog/{meta.slug}/"
	/>
</svelte:head>

<Main>
	<article class="post compressed-content post-{meta.slug}">
		{#if imagePath !== defaultImagePath}
			<img
				class="cover-image"
				src={imagePath}
				alt=""
				style="aspect-ratio: {meta.coverWidth} / {meta.coverHeight}"
				width={meta.coverWidth}
				height={meta.coverHeight}
			/>
		{/if}

		<h1 style={imagePath === defaultImagePath ? `margin-top: 0;` : ''}>
			{meta.title}
		</h1>

		<div class="meta">
			<b>Published:</b>
			{readableDate(meta.date)}
			{#if meta.date != meta.updated}
				<br />
				<b>Updated:</b>
				{readableDate(meta.updated)}
			{/if}
		</div>

		<!-- TODO: TypeScript doesn't like this, but I can't find a good answer what to do about it. :/ -->
		<PostContent />

		<aside class="post-footer">
			<Bio currentPage={meta.slug} />

			{#if meta.categories}
				<h2 class="h4">Posted in:</h2>
				<TagList>
					{#each meta.categories as category}
						<Tag to="/blog/category/{category}/">
							{category}
						</Tag>
					{/each}
				</TagList>
			{/if}
			<br />
			<a href="#main" class="back-to-top"> Back to top </a>
		</aside>

		{#if !dev}
			<Comments />
		{/if}
	</article>
</Main>
