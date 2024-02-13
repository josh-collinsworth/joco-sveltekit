<script lang="ts">
	export let number: number
</script>

<a href="#footnote-{number}" class="footnote-link" id="footnote-link-{number}">
	{number}
</a>

<style>
	.footnote-link {
		display: inline;
		line-height: 0.5;
		font-weight: bold;
		font-size: 0.8em;
		position: relative;
		bottom: 0.2em;
		text-decoration: none;
		margin-inline: 2px;
		border-bottom: 1px solid;
	}
</style>
