<div class="side-note">
	<slot />
</div>


<style lang="scss" global>
	.side-note {
		--note-unit: 1rem;

		@media (min-width: $xs) {
			--note-unit: 1.25rem;
		}

		padding: var(--note-unit);
		position: relative;
		margin: 2rem 0 2rem calc(var(--note-unit) * -1);
		width: calc(100% + (var(--note-unit) * 2));
		font-size: .9rem;
		font-style: italic;
		background: linear-gradient(
			to right,
			hsl(var(--lightBlueHS), 90%),
			hsl(var(--lightBlueHS), 95%)
		);
		line-height: var(--body-line-height);
		min-height: 4.5rem;
		
		.prefers-dark & {
			background: hsl(var(--lightBlueHS), 18%);
		}

		em, i {
			font-style: normal;
		}

		&:before {
			content: 'Side note:';
			font-weight: bold;
			font-family: var(--accent-font);
			font-style: normal;
			text-transform: uppercase;
			font-size: 0.8em;
			display: block;
			line-height: 1;
			margin: 0 0 1em;
		}
	}
</style>
