<script lang="ts">
	import type { PageData } from './$types'
	import type Post from '$lib/types/post'
	import type { SvelteComponent } from 'svelte'

	export let data: PageData
	let PostContent: SvelteComponent
	let meta: Post

	let hasScrolled = false
	$: ({ PostContent, meta } = data)

	const handleScroll = throttle(() => {
		console.log(window.scrollY)
		hasScrolled = window.scrollY > 1200
	}, 500)

	import RenderedPost from '$lib/components/RenderedPost.svelte'
	import throttle from 'just-throttle'
</script>

<RenderedPost {PostContent} {meta} />

<svelte:window on:scroll={handleScroll} />

<a href="#top" class:show={hasScrolled}>
	<div class="arrow" />
	<div>Top</div>
</a>

<style lang="scss">
	a[href='#top'] {
		position: fixed;
		bottom: var(--quarterNote);
		right: 0;
		padding: 0.75rem 0.5rem 0.75rem 1rem;
		display: flex;
		background: var(--lighterBlue);
		// background: linear-gradient(125deg in oklch, var(--yellow), var(--lighterBlue));
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-top-left-radius: 2rem;
		border-bottom-left-radius: 2rem;
		font-family: var(--headingFont);
		line-height: 1;
		gap: 0.25rem;
		text-transform: uppercase;
		font-size: 0.75rem;
		font-weight: bold;
		text-decoration: none;
		color: var(--black);
		z-index: 3;
		transform: translateX(110%);
		transition: transform 0.5s cubic-bezier(1, 0, 0, 1);

		&.show {
			transform: translateX(0);
		}

		&:focus-visible {
			transform: translateX(0);
		}

		.arrow {
			width: 1rem;
			height: 0.5rem;
			background: var(--black);
			clip-path: polygon(0 100%, 50% 0%, 100% 100%);
		}
	}

	:global(.dark a[href='#top']) {
		background: var(--lightBlue) !important;
	}
</style>
