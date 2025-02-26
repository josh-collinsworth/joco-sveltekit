<script lang="ts">
	import { sluggify } from '$lib/assets/js/utils'

	interface Props {
		date: string
		title: string
		children?: import('svelte').Snippet
	}

	let { date, title, children }: Props = $props()
</script>

<div class="edit" id={sluggify(title)}>
	<p class="date">Update {date}</p>
	{#if title}
		<h3>{title}</h3>
	{/if}
	{@render children?.()}
	<p class="sr">End update</p>
</div>

<style>
	h3 {
		margin-block-start: 0;
	}

	.edit {
		position: relative;
		margin-block: var(--dotted-half-note) var(--half-note);
		margin-inline-start: 0;
		border-left: 1px solid var(--blue-light);
		padding-inline-start: 16px;
	}

	.date {
		position: sticky;
		transform-origin: left center;
		top: 0;
		left: -0.25em;
		background: linear-gradient(
			to bottom,
			var(--paper),
			var(--paper) 70%,
			transparent
		);
		font-style: italic;
		font-size: 0.85rem;
		color: var(--blue-light);
		margin: 0;
		padding: 0;
		padding-block-end: 1em;
		z-index: 2;
	}

	:global(.edit > *:nth-last-child(2)) {
		margin-bottom: 0;
	}
</style>
