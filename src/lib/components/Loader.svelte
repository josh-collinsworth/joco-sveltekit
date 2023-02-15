<script lang="ts">
	export let loading: boolean
</script>


<div class="loader" class:loading>
	<div class="loading-wrapper">
		<div class="dot outer first"></div>
		<div class="dot outer second"></div>
		<div class="dot outer third"></div>

		<div class="dot inner first"></div>
		<div class="dot inner second"></div>
		<div class="dot inner third"></div>
	</div>
</div>


<style lang="scss">
	.loader {
		background: hsla(var(--paperHSL), 0.7);
		position: fixed;
		z-index: 3;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.1s;
		
		&.loading {
			opacity: 1;
			pointer-events: unset;
		}
	}

	.loading-wrapper {
		--unit: 2.5rem;
		--easing: cubic-bezier(0.08, 0.82, 0.17, 1);

		display: grid;
		grid-template-columns: 1fr repeat(3, var(--unit)) 1fr;
		grid-gap: 1rem;

		.dot {
			width: var(--unit);
			height: var(--unit);
			border-radius: var(--unit);
			grid-row: 1 / 2;
			transform: scale(0);

			&.outer {
				animation: outer_pop 1000ms infinite var(--easing);
				background: var(--yellow);
				
				&:nth-of-type(2) {
					animation-delay: 100ms;
					background: var(--lightBlue);
				}
				
				&:nth-of-type(3) {
					animation-delay: 200ms;
					background: var(--lightGray);
				}
			}
			
			&.inner {
				background: var(--paper);
				animation: inner_pop 1000ms infinite var(--easing);
				
				+ .inner {
					animation-delay: 100ms;

					+ .inner {
						animation-delay: 200ms;
					}
				}
			}
		}
		
		.first {
			grid-column: 2 / 3;
		}

		.second {
			grid-column: 3 / 4;
		}

		.third {
			grid-column: 4 / 5;
		}
	}

	@keyframes outer_pop {
		0% {
			transform: scale(0)
		}
		50% {
			transform: scale(1)
		}
		75% {
			transform: scale(1)
		}
		100% {
			transform: scale(0)
		}
	}

	@keyframes inner_pop {
		0% {
			transform: scale(0);
		}
		35% {
			transform: scale(0);
		}
		60% {
			transform: scale(1);
		}
		95% {
			transform: scale(1);
		}
		96% {
			transform: scale(0);
		}
		100% {
			transform: scale(0);
		}
	}
</style>