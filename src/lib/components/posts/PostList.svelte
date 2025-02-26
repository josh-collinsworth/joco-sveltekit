<script lang="ts">
	import type Post from '$lib/types/post'
	import PostPreview from './PostPreview.svelte'

	interface Props {
		posts: Post[]
		external?: boolean
	}

	let { posts, external = false }: Props = $props()
</script>

<ul class="no-bullets post-list">
	{#each posts as post}
		<PostPreview {post} {external} />
	{/each}
</ul>

<style lang="scss">
	.post-list {
		padding: 0;
		list-style-type: none;
		margin: 0 0 var(--whole-note);
		max-width: var(--max-width);

		@media (min-width: vars.$md) {
			max-width: 60rem;
		}
	}
</style>
