<script lang="ts">
	import { run } from 'svelte/legacy'

	import type { LayoutData } from './$types'
	import type Post from '$lib/types/post'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import { prefersReducedData } from '$lib/assets/js/utils'
	import { preloadCode } from '$app/navigation'
	import { onMount } from 'svelte'

	interface Props {
		data: LayoutData
		children?: import('svelte').Snippet
	}

	let { data, children }: Props = $props()

	let popularPosts: Post[] = $state()
	let allCategories: string[] = $state()
	run(() => {
		;({ popularPosts, allCategories } = data)
	})

	onMount(() => {
		if (!prefersReducedData()) {
			popularPosts.forEach((post) => {
				preloadCode(`/blog/${post.slug}`)
			})
		}
	})
</script>

<div class="layout-grid">
	<div class="sidebar-wrapper">
		<Sidebar {popularPosts} {allCategories} />
	</div>

	{@render children?.()}
</div>

<style>
	.layout-grid {
		display: grid;
		grid-template-columns: 100%;

		@media (min-width: 82rem) {
			grid-gap: 0 var(--half-note);
			grid-template-columns: var(--sidebar-width) 1fr var(--sidebar-width);
		}
	}

	.sidebar-wrapper {
		display: none;

		@media (min-width: 82rem) {
			display: block;
			align-self: start;
			position: sticky;
			top: var(--half-note);
		}
	}
</style>
