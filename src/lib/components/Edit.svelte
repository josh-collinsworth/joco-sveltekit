<script lang="ts">
	export let date: String
</script>

<div class="edit">
	<p class="date">Update {date}</p>
	<slot />
</div>

<style>
	.edit {
		position: relative;
		margin-block: var(--halfNote);
		border-block: 1px dashed var(--lightBlue);
		padding-block: var(--quarterNote);
	}

	.date {
		position: absolute;
		height: 1em;
		display: flex;
		align-items: center;
		top: -0.5em;
		left: 0;
		background: var(--paper);
		font-style: italic;
		padding-right: 1em;
		font-size: 0.85rem;
		line-height: 0;
		color: var(--lightBlue);
	}

	:global(.edit > *:last-child) {
		margin-bottom: 0;
	}
</style>
