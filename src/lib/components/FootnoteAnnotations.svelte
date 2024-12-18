<script lang="ts">
	import BackUpArrow from './icons/BackUpArrow.svelte'

	interface Props {
		footnotes?: string[];
	}

	let { footnotes = [] }: Props = $props();
</script>

<footer>
	<ol>
		{#each footnotes as footnote, idx}
			<li id="footnote-{idx + 1}" tabindex="-1">
				{@html footnote}
				<a
					href={`#footnote-link-${idx + 1}`}
					class="back-link"
					aria-label="Back to original location"><BackUpArrow /></a
				>
			</li>
		{/each}
	</ol>
</footer>

<style lang="scss">
	ol {
		font-size: 0.8rem;
		padding-top: var(--quarterNote);
		margin-top: var(--halfNote);
		border-top: 1px solid var(--lighterGray);
		line-height: 1.5;
	}

	.back-link {
		font-size: 0.75em;
		text-transform: uppercase;
		font-weight: bold;
		text-decoration: underline;
		border-bottom: 1px solid var(--yellow);
	}
</style>
