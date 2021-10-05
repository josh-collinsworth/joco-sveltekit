<script lang="ts">
	import NavLinks from '$lib/components/header/NavLinks.svelte'
	import HamburgerButton from '$lib/components/header/HamburgerButton.svelte'
	import { isMenuOpen } from '$lib/data/store'

	export let path: string
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
      <NavLinks {path} />
		</nav>
	</div>
</template>


<style lang="scss">
	.main-nav {
		text-align: right;

		@media (max-width: $xs) {
			display: block;
			position: fixed;
			transition: transform .4s cubic-bezier(1, 0, 0, 1), opacity .4s cubic-bezier(1, 0, 0, 1);
			transform: translateX(0);
			background: hsla(var(--darkBlueHSL), 0.9);
			background: hsla(var(--blackHSL), 0.9);
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

			&.open,
			&:focus-within {
				transform: translateX(100vw);
				opacity: 1;
			}
		}

		@media (min-width: $xs) {
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
