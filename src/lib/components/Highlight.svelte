<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<!-- This component is just used in the Gridsome post, to keep a demo from breaking. -->

<div class="highlight">
	{@render children?.()}
</div>

<style lang="scss">
	.highlight {
		font-size: 1.3em;
		line-height: 1.5;
		margin: 0 0 var(--half-note);
		font-weight: normal;
		font-style: normal;
		font-family: var(--headingFont);
	}
</style>
