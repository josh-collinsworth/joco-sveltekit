<p class="callout">
	<slot />
</p>

<style lang="scss">
	.callout {
		margin: var(--dottedQuarterNote) 0;
		font-size: 1.3rem;
		line-height: 1.4;

		@media (min-width: vars.$lg) {
			margin: 0 0 var(--quarterNote);
			font-size: inherit;
			line-height: inherit;
			font-family: inherit;
		}
	}
</style>
