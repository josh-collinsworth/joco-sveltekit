<script lang="ts">
	import NavLinks from '$lib/components/header/NavLinks.svelte'
	import HamburgerButton from '$lib/components/header/HamburgerButton.svelte'
	import { isMenuOpen } from '$lib/assets/js/store'

	export let key: string
</script>


<template>
	<div>
		<HamburgerButton />

		<nav
			id="mobile-nav"
			class="main-nav nav"
			class:open={$isMenuOpen}
			role="navigation"
			aria-hidden={!$isMenuOpen}
		>
      <NavLinks mobile={true} {key} />
		</nav>

		<nav id="desktop-nav" class="main-nav nav" role="navigation">
			<NavLinks {key} />
		</nav>
	</div>
</template>


<style lang="scss">
	.main-nav {
		text-align: right;

		&#mobile-nav {
			display: block;
			position: fixed;
			transition: transform .4s cubic-bezier(1, 0, 0, 1), opacity .4s cubic-bezier(1, 0, 0, 1);
			transform: translateX(0);
			background: rgba(var(--darkBlueRGB), 0.9);
			background: rgba(var(--blackRGB), 0.9);
			width: 100vw;
			height: 100vh;
			top: 0;
			left: -100vw;
			display: flex;
			flex-wrap: wrap;
			place-content: center;
			padding: 3rem;
			opacity: 0;
			z-index: 10;

			@media (min-width: $narrow) {
				display: none;
			}

			&.open {
				transform: translateX(100vw);
				opacity: 1;
			}
		}

		&#desktop-nav {
			display: none;

			@media (min-width: $narrow) {
				display: flex;
				justify-content: flex-end;
			}
		}
	}
</style>
