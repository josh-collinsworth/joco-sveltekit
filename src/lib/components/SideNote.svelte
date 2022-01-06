<script>null</script>

<div class="side-note">
	<slot />
</div>


<style lang="scss" global>
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
			line-height: var(--body-line-height);
			min-height: 4.5rem;
			width: calc(100% + var(--margin) + var(--margin));
			margin-left: calc(var(--margin) * -1);
			padding: calc(var(--quarterNote) * 1.5) var(--quarterNote);

		em, i {
			font-style: normal;
		}

		&:before {
			content: 'Side note:';
			font-weight: bold;
			font-family: var(--heading-font);
			font-style: normal;
			text-transform: uppercase;
			font-size: 0.8em;
			display: block;
			line-height: 1;
			margin: 0 0 var(--eighthNote);
		}

		@media (min-width: $xxs) {
			width: 100%;
			margin-left: 0;
			padding: calc(var(--quarterNote) * 1.5);
		}
	}
</style>
