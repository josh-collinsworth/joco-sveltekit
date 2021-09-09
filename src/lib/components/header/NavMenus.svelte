<script lang="ts">
	import NavLinks from '$lib/components/header/NavLinks.svelte'
	import HamburgerButton from '$lib/components/header/HamburgerButton.svelte'

	export let menuOpen: boolean
	export let key: string
	export let toggleMenu = null
</script>


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
      <NavLinks mobile={true} {menuOpen} {toggleMenu} {key} />
		</nav>

		<nav id="desktop-nav" class="main-nav nav" role="navigation">
			<NavLinks {menuOpen} {key} />
		</nav>
	</div>
</template>


<style lang="scss">
.main-nav {

	&#mobile-nav {
		display: block;
		position: fixed;
		transition: transform .4s cubic-bezier(1, 0, 0, 1), opacity .4s cubic-bezier(1, 0, 0, 1);
		transform: translateX(0);
		background: var(--darkBlue);
		width: 100vw;
		height: 100vh;
		top: 0;
		left: -100vw;
		display: flex;
		flex-wrap: wrap;
		place-content: center;
		padding: 3rem;
		opacity: 0;

		@media (min-width: 768px) {
			display: none;
		}

		&.open {
			transform: translateX(100vw);
			opacity: 1;
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
