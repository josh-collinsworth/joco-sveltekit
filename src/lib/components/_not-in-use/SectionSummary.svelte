<div class="summary">
	<div class="summary__lead-in">Section summary:</div>
	<slot />
</div>

<style lang="scss">
	.summary {
		// background-color: var(--lightestBlue);
		padding: var(--quarterNote);
		font-size: 0.75rem;
		font-family: var(--headingFont);
		line-height: 1.3;
		margin-block: var(--quarterNote);
		border: 1px solid var(--ink);

		:global(.dark &) {
			background-color: var(--darkBlue);
		}

		:global(html:not(.light)) & {
			@media (prefers-color-scheme: dark) {
				background-color: var(--darkerBlue);
			}
		}

		:global(> :last-child) {
			margin-bottom: 0;
		}

		.summary__lead-in {
			text-transform: uppercase;
			font-weight: bold;
		}
	}
</style>
