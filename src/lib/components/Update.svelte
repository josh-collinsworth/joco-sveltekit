<script lang="ts">
	export let date: string
	export let id: string = ''
</script>

<div class="edit" {id}>
	<p class="date">Update {date}</p>
	<slot />
	<p class="sr">End update</p>
</div>

<style>
	.edit {
		position: relative;
		margin-block: var(--dottedHalfNote) var(--halfNote);
		margin-inline-start: 0;
		border-left: 1px solid var(--lightBlue);
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
		color: var(--lightBlue);
		margin: 0;
		padding: 0;
		padding-block-end: 1em;
		z-index: 2;
	}

	:global(.edit > *:nth-last-child(2)) {
		margin-bottom: 0;
	}
</style>
