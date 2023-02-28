<div class="note">
	<div class="note__callout">
		Note
		<span class="note__callout-arrow" />
	</div>
	<div class="note__content">
		<slot />
	</div>
</div>

<style lang="scss">
.note {
	border: 2px solid var(--yellow);
	position: relative;
	display: grid;
	grid-template-columns: auto 1fr;
	margin: var(--halfNote) 0;
	
	.note__callout {
		background: var(--yellow);
		writing-mode: sideways-lr;
		text-align: center;
		line-height: 1.5;
		text-transform: uppercase;
		font-size: 0.8rem;
		font-weight: bold;
		font-style: normal;
		font-family: var(--headingFont);
	}

	.note__callout-arrow {
		display: inline-block;
		width: 0.7em;
		height: 0.75em;
		border-top: 1px solid;
		border-left: 1px solid;
		position: relative;

		&::after {
			content: '';
			width: 0.5em;
			height: 0.5em;
			border-right: 1px solid;
			border-top: 1px solid;
			position: absolute;
			transform: rotate(45deg);
			right: 0;
			top: calc(-0.2em - 1px);
		}
	}
	
	.note__content {
		font-size: 0.8rem;
		font-style: italic;
		padding: var(--dottedQuarterNote);
	}
}

:global(.note__content :last-child) {
	margin-bottom: 0;
}
</style>