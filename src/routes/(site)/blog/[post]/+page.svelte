<script lang="ts">
	import type { PageData } from './$types'
	import type Post from '$lib/types/post'
	import type { SvelteComponent } from 'svelte'

	export let data: PageData
	let PostContent: SvelteComponent
	let meta: Post
	$: ({ PostContent, meta } = data)

	import RenderedPost from '$lib/components/RenderedPost.svelte'
</script>

<RenderedPost {PostContent} {meta} />
