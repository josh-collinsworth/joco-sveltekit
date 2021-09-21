<div class="side-note">
	<slot />
</div>


<style lang="scss" global>
	.side-note {
		padding: 1rem 1rem 1rem 2rem;
		position: relative;
		margin: 2rem 0;
		font-size: .9rem;
		font-style: italic;
		background: rgba(var(--lightBlueRGB), 0.2);
		line-height: var(--body-line-height);
		min-height: 4.5rem;

		em,
		i {
			font-weight: bold;
		}

		&:before {
			content: 'Side Note';
			position: absolute;
			bottom: calc(50% - 2.65em);
			left: 1.25rem;
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
		}

		&:after {
			content: '';
			width: 1rem;
			height: 100%;
			background: var(--lightBlue);
			left: 0;
			top: 0;
			position: absolute;
		}
	}

</style>
