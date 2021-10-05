<div class="side-note">
	<slot />
</div>


<style lang="scss" global>
	.side-note {
		--note-unit: 1rem;

		@media (min-width: $xs) {
			--note-unit: 1.5rem;
		}

		padding: var(--note-unit);
		padding-left: calc(var(--note-unit) * 2);
		position: relative;
		margin: 2rem 0 2rem calc(var(--note-unit) * -2);
		width: calc(100% + (var(--note-unit) * 3));
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
			content: 'Side Note';
			position: absolute;
			bottom: calc(50% - 2.65em);
			left: calc(var(--note-unit) * 1.25);
			padding: 0;
			line-height: 1.5rem;
			font-weight: bold;
			text-transform: uppercase;
			font-size: .7rem;
			font-style: normal;
			color: var(--white);
			transform: rotate(-90deg);
			transform-origin: bottom left;
			z-index: 2;
			text-align: center;
			width: max-content;
			font-family: var(--accent-font);

			@media (min-width: $xs) {
				left: var(--note-unit);
			}
		}

		&:after {
			content: '';
			width: var(--note-unit);
			height: 100%;
			background: var(--lightBlue);
			left: 0;
			top: 0;
			position: absolute;

			.prefers-dark & {
				background: var(--darkBlue);
			}
		}
	}
</style>
