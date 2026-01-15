<script lang="ts">
	import { isMenuOpen } from '$lib/data/store'

	interface Props {
		text: string
		to: string
		path: string
		mobileOnly?: string | boolean
	}

	let { text, to, path, mobileOnly = false }: Props = $props()

	let isCurrentPage: boolean = $derived(path === to)
</script>

<li class="nav__item" class:open={$isMenuOpen} class:mobile-only={mobileOnly}>
	<a
		data-sveltekit-preload-code
		href={to}
		class="nav__link"
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<span>{text}</span>
	</a>
</li>

<style>
	.nav__item {
		margin: 0;

		@media (max-width: 56rem) {
			--itemTransition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

			opacity: 0;
			margin-bottom: 1.5rem;
			font-size: 1.25rem;
			line-height: 1.5em;
			color: var(--neutral-white);
			width: 100%;

			@keyframes move_in_left {
				from {
					opacity: 0;
					transform: translateX(-3em);
				}

				to {
					transform: translateX(0);
					opacity: 1;
				}
			}
		}

		&.open {
			animation: move_in_left var(--itemTransition);
			--item-delay: 0.085s;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
				opacity: 1;
			}

			&:nth-of-type(1) {
				animation-delay: calc(var(--item-delay) * 1);
			}
			&:nth-of-type(2) {
				animation-delay: calc(var(--item-delay) * 2);
			}
			&:nth-of-type(3) {
				animation-delay: calc(var(--item-delay) * 3);
			}
			&:nth-of-type(4) {
				animation-delay: calc(var(--item-delay) * 4);
			}
			&:nth-of-type(5) {
				animation-delay: calc(var(--item-delay) * 5);
			}
			&:nth-of-type(6) {
				animation-delay: calc(var(--item-delay) * 6);
			}
			&:nth-of-type(7) {
				animation-delay: calc(var(--item-delay) * 7);
			}
			&:nth-of-type(8) {
				animation-delay: calc(var(--item-delay) * 8);
			}
			&:nth-of-type(9) {
				animation-delay: calc(var(--item-delay) * 9);
			}

			a {
				color: var(--neutral-white);
			}
		}

		a {
			color: var(--ink);
			display: block;
			display: inline-block;
			font-weight: normal;
			text-decoration: none;
			margin: 0;
			position: relative;
			color: var(--ink);
			width: max-content;

			&.active {
				font-weight: bold;

				span:after {
					transform: scaleX(1);
				}
			}

			span {
				display: inline-block;

				&:after {
					position: absolute;
					bottom: 0;
					left: 0;
					content: '';
					transform: scaleX(0);
					display: block;
					width: 100%;
					height: 0.1em;
					background: var(--yellow);
					transition: transform 0.1s cubic-bezier(0.5, 0, 0.5, 1);
					transform-origin: right;
				}
			}

			&:hover,
			&:focus {
				span:after {
					transform: scaleX(1);
					transform-origin: left;
				}
			}
		}

		&.mobile-only {
			@media (min-width: 42rem) {
				display: none;
			}
		}
	}

	:global(.reduce-motion .nav__item.open) {
		animation: none;
		opacity: 1;
	}

	:global(.reduce-motion .nav__item a span::after) {
		transition: none !important;
	}
</style>
