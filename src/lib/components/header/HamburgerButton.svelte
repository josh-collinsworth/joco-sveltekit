<script lang="ts">
	import { isMenuOpen } from '$lib/assets/js/store'

	let menuOpenReadableOpposite: string
	$: menuOpenReadableOpposite = $isMenuOpen ? 'Close' : 'Open'
</script>


<button
	id="hamburger"
	aria-pressed={$isMenuOpen}
	class:fixed={$isMenuOpen}
	on:click={() => isMenuOpen.set(!$isMenuOpen)}
>
	<span class="sr">{menuOpenReadableOpposite} menu</span>
	<div class="line" aria-hidden="true" />
	<div class="line" aria-hidden="true" />
	<div class="line" aria-hidden="true" />
</button>


<style lang="scss">
	#hamburger {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: stretch;
		width: var(--button-size);
		height: var(--button-size);
		padding: .55rem; 
		margin-left: 2rem;
		background: transparent;
		position: relative;
		z-index: 11;
		border: 2px solid var(--ink);
		transition: all .2s ease-in-out;
		border-radius: var(--button-size);

		&:before {
			content: '';
			height: var(--button-size);
			width: 1px;
			background: var(--lightGray);
			display: block;
			position: absolute;
			top: -2px;
			left: -1.1rem;
		}

		&.fixed {
			position: relative;
			top: unset;
			right: unset;
			animation: none;

			.line {
				background: var(--white);
			}
		}

		.line {
			width: 100%;
			height: 2px;
			background: var(--ink);
			transition: background .2s;
		}

		&:hover,
		&:focus {
			.line {
				background: var(--yellow);
			}
		} 

		@media (min-width: 768px) {
			display: none;
		}
	}
</style>
