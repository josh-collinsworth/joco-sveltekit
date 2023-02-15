<script>null</script>

<div class="side-note">
	<slot />
</div>


<style lang="scss">
	.side-note {
		position: relative;
		margin: var(--halfNote) 0;
		font-size: .8rem;
		font-style: italic;
		background: linear-gradient(
			to right,
			var(--lighterBlue),
			var(--lightestBlue)
		);
		line-height: var(--quarterNote);
		min-height: 4.5rem;
		width: calc(100% + var(--margin) + var(--margin));
		margin-left: calc(var(--margin) * -1);
		padding: calc(var(--quarterNote) * 1.5) var(--quarterNote);
		color: var(--ink);

		&:before {
			content: 'Side note:';
			font-weight: bold;
			font-family: var(--headingFont);
			font-style: normal;
			text-transform: uppercase;
			font-size: 0.8em;
			display: block;
			line-height: 1;
			margin: 0 0 var(--eighthNote);
		}

		@media (min-width: vars.$xxs) {
			width: 100%;
			margin-left: 0;
			padding: calc(var(--quarterNote) * 1.5);
		}
		
		:global(em),
		:global(i),
		:global(code) {
			font-style: normal;
		}
	}

	:global(.dark .side-note) {
		background: var(--darkerBlue);
	}

	:global(.side-note > *:last-child) {
		margin-bottom: 0;
	}
</style>
