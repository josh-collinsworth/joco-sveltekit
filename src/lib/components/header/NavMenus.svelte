<template>
	<div>
		<HamburgerButton {menuOpen} {toggleMenu}/>

		<nav
			id="mobile-nav"
			class="main-nav nav"
			class:open={menuOpen}
			role="navigation"
			aria-hidden={!menuOpen}
		>
      <NavLinks mobile={true} {menuOpen} {toggleMenu}/>
		</nav>

		<nav id="desktop-nav" class="main-nav nav" role="navigation">
			<NavLinks {menuOpen} />
		</nav>
	</div>
</template>

<script lang="ts">
	import NavLinks from '$lib/components/header/NavLinks.svelte'
	import HamburgerButton from '$lib/components/header/HamburgerButton.svelte'

	export let menuOpen: boolean
	export let toggleMenu // TODO: type?
</script>

<style lang="scss">
.main-nav {

	&#mobile-nav {
		display: block;
		position: fixed;
		transition: all .4s cubic-bezier(1, 0, 0, 1);
		transform: translateX(-100vw);
		background: var(--darkBlue);
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		display: flex;
		flex-wrap: wrap;
		place-content: center;
		padding: 3rem;

		@media (min-width: 768px) {
			display: none;
		}

		&.open {
			transform: translateX(0)
		}
	}

	&#desktop-nav {
		display: none;

		@media(min-width: 768px) {
			display: flex;
			justify-content: flex-end;
		}
	}
}
</style>
