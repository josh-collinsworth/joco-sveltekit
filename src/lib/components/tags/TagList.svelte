<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<ul class="tag-list no-bullets">
	{@render children?.()}
</ul>

<style>
	.tag-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		list-style-type: none;
		margin: 0;
		padding: 0;
		font-size: 0.9rem;
	}
</style>
