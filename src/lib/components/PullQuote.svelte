<aside class="pull-quote" aria-hidden="true" hidden>
	<slot />
</aside>

<style lang="scss">
	.pull-quote {
		float: right;
		margin: var(--halfNote) -12em var(--dottedHalfNote) var(--halfNote);
		font-size: 1.3rem;
		line-height: 1.4;
		position: relative;
		background: var(--paper);
		overflow: hidden;
		padding: 0 0 0.75rem 0;
		font-family: var(--headingFont);
		font-style: normal;
		font-weight: normal;
		max-width: 16em;
		text-wrap: balance;

		@media (min-width: vars.$lg) {
			display: block;
			font-size: 1.4rem;
			margin-right: calc(-1em - 13vw);
		}

		@media (min-width: vars.$xl) {
			margin-right: -13em;
			max-width: 18em;
		}

		&:after {
			content: '';
			height: 0.25rem;
			width: 100%;
			margin-left: -100%;
			background: linear-gradient(to right, var(--blueToYellow));
			bottom: 0;
			position: absolute;
		}
	}

	:global(.pull-quote p:last-child) {
		display: inline;
	}

	:global(.pull-quote em, .pull-quote i) {
		font-weight: bold;
		font-style: normal;
	}
</style>
