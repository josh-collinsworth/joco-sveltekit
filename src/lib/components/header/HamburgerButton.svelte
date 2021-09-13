<script lang="ts">
	import { isMenuOpen } from '$lib/assets/js/store'

	let menuOpenReadableOpposite: string
	$: menuOpenReadableOpposite = $isMenuOpen ? 'Close' : 'Open'
</script>



<button
	id="hamburger"
	aria-pressed={$isMenuOpen}
	class:sticky={$isMenuOpen}
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
		width: 2.5rem;
		height: 2rem;
		padding: .5rem;
		margin-left: 0.5rem;
		border: none;
		background: transparent;
		position: relative;
		z-index: 11;

		&.sticky {
			.line {
				background: var(--white);
			}
		}

		.line {
			width: 100%;
			height: 2px;
			background: var(--ink);
		}

		@media (min-width: 768px) {
			display: none;
		}
	}
</style>
