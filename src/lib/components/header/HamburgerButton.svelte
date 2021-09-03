<script lang="ts">
	export let menuOpen: boolean
	export let toggleMenu //TODO: Type?

	let menuOpenReadableOpposite: string
	$: menuOpenReadableOpposite = menuOpen ? 'Close' : 'Open'
</script>



<button
	id="hamburger"
	aria-pressed={menuOpen}
	class:sticky={menuOpen}
	on:click={toggleMenu}
>
	<span class="sr"> menuOpenReadableOpposite} menu</span>
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
	margin-left: auto;
	border: none;
	background: transparent;
	position: relative;
	z-index: 4;

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
