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
		position: absolute;
		height: 1em;
		display: flex;
		align-items: center;
		transform-origin: left center;
		top: -1.75em;
		left: -0.25em;
		background: var(--paper);
		font-style: italic;
		font-size: 0.85rem;
		line-height: 0;
		color: var(--lightBlue);
		margin: 0;
		padding: 0;
	}

	:global(.edit > *:nth-last-child(2)) {
		margin-bottom: 0;
	}
</style>
