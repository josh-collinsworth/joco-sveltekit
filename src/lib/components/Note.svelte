<div class="note">
	<div class="note__callout">
		<div class="note__callout-text">
			Note <span class="note__callout-arrow" />
		</div>
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
		text-align: center;
		line-height: 1.5;
		text-transform: uppercase;
		font-size: 0.8rem;
		font-weight: bold;
		font-style: normal;
		font-family: var(--headingFont);
		width: 1.5rem;
		display: grid;
		place-content: center;
	}

	.note__callout-text {
		transform: rotate(-90deg);
		white-space: pre;
		display: flex;
		align-items: center;
		color: var(--darkGray);
	}

	.note__callout-arrow {
		display: inline-block;
		width: 0.7em;
		height: 0.75em;
		border-top: 1px solid;
		border-right: 1px solid;
		position: relative;

		&::after {
			content: '';
			width: 0.5em;
			height: 0.5em;
			border-right: 1px solid;
			border-bottom: 1px solid;
			position: absolute;
			transform: rotate(45deg);
			top: 2px;
			right: calc(-0.2em - 1px);
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
