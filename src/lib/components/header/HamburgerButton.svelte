<script lang="ts">
	import { isMenuOpen } from '$lib/data/store'

	let readableMenuStateOpposite: string = $derived(
		$isMenuOpen ? 'Close' : 'Open'
	)
</script>

<button
	id="hamburger"
	aria-pressed={$isMenuOpen}
	class:fixed={$isMenuOpen}
	class="settings-toggle"
	onclick={() => isMenuOpen.set(!$isMenuOpen)}
>
	<span class="sr">{readableMenuStateOpposite} menu</span>
	<div class="line line-top" aria-hidden="true"></div>
	<div class="line line-middle" aria-hidden="true"></div>
	<div class="line line-bottom" aria-hidden="true"></div>
</button>

<style lang="scss">
	#hamburger {
		display: none;
		justify-content: space-between;
		flex-direction: column;
		align-items: stretch;
		width: var(--button-size);
		height: var(--button-size);
		padding: 0.55rem;
		background: var(--button-background);
		position: relative;
		z-index: 11;
		border: 2px solid var(--ink);
		border-radius: var(--button-size);
		overflow: visible;
		transition-delay: 0.16s;

		&.fixed {
			position: relative;
			top: unset;
			right: unset;
			animation: none;

			.line {
				background: var(--neutral-white);

				&-top {
					transform: translate(0.025em, -0.1em) rotate(-45deg) scaleX(1.5);
				}

				&-middle {
					transform: scaleX(0);
				}

				&-bottom {
					transform: translate(0.025em, 0.1em) rotate(45deg) scaleX(1.5);
				}
			}
		}

		.line {
			width: 100%;
			height: 2px;
			background: var(--ink);
			transition:
				background 0.2s,
				transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
			transform-origin: right;

			&-middle {
				transform-origin: center;
			}
		}

		&:hover,
		&:focus {
			.line {
				background: var(--yellow);
			}
		}

		@media (max-width: 56rem) {
			display: flex;
		}
	}
</style>
