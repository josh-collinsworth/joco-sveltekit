<div class="side-note">
	<slot />
</div>


<style lang="scss" global>
	.side-note {
		--note-unit: 1rem;

		@media (min-width: $narrow) {
			--note-unit: 1.5rem;
		}

		padding: var(--note-unit);
		padding-left: calc(var(--note-unit) * 2);
		position: relative;
		margin: 2rem 0;
		font-size: .9rem;
		font-style: italic;
		background: linear-gradient(
			to right,
			rgba(var(--lightBlueRGB), 0.3) 1rem,
			rgba(var(--lightBlueRGB), 0.03)
		);
		line-height: var(--body-line-height);
		min-height: 4.5rem;
		
		.prefers-dark & {
			background: rgba(var(--lightBlueRGB), 0.1);
		}

		em, i {
			font-weight: bold;
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

			@media (min-width: $narrow) {
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
