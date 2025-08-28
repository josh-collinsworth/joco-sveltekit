<script lang="ts">
	import { run } from 'svelte/legacy'

	import type { PageData } from './$types'
	import type Post from '$lib/types/post'
	import type { SvelteComponent } from 'svelte'

	let PostContent: SvelteComponent = $state()
	let meta: Post = $state()

	let hasScrolled = $state(false)

	const handleScroll = throttle(() => {
		hasScrolled = window.scrollY > 1200
	}, 500)

	import RenderedPost from '$lib/components/RenderedPost.svelte'
	import throttle from 'just-throttle'
	interface Props {
		data: PageData
	}

	let { data }: Props = $props()
	run(() => {
		;({ PostContent, meta } = data)
	})
</script>

<RenderedPost {PostContent} {meta} />

<svelte:window onscroll={handleScroll} />

<a href="#app" class:show={hasScrolled}>
	<div class="arrow"></div>
	<div>Top</div>
</a>

<style lang="scss">
	a[href='#app'] {
		position: fixed;
		bottom: var(--quarter-note);
		right: 0;
		padding: 0.75rem 0.5rem 0.75rem 1rem;
		display: flex;
		background: var(--blue-lighter);
		// background: linear-gradient(125deg in oklch, var(--yellow), var(--blue-lighter));
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-top-left-radius: 2rem;
		border-bottom-left-radius: 2rem;
		font-family: var(--heading-font);
		line-height: 1;
		gap: 0.25rem;
		text-transform: uppercase;
		font-size: 0.75rem;
		font-weight: bold;
		text-decoration: none;
		color: var(--neutral-black);
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
			background: var(--neutral-black);
			clip-path: polygon(0 100%, 50% 0%, 100% 100%);
		}
	}

	:global(.dark a[href='#app']) {
		background: var(--blue-light) !important;
	}
</style>
