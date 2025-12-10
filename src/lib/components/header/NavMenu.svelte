<script lang="ts">
	import NavLinks from '$lib/components/header/NavLinks.svelte'
	import HamburgerButton from '$lib/components/header/HamburgerButton.svelte'
	import { isMenuOpen } from '$lib/data/store'

	interface Props {
		path: string
	}

	let { path }: Props = $props()
</script>

<template>
	<div>
		<HamburgerButton />

		<nav class="main-nav nav" class:open={$isMenuOpen}>
			<NavLinks {path} />
		</nav>
	</div>
</template>

<style lang="scss">
	.main-nav {
		text-align: right;
		font-family: var(--heading-font);

		@media (max-width: 56rem) {
			display: block;
			position: fixed;
			transition:
				transform 0.4s cubic-bezier(1, 0, 0, 1),
				opacity 0.4s cubic-bezier(1, 0, 0, 1);
			transform: translateX(0);
			background: #101820f0;
			@supports (color-mix(black, transparent)) {
				background: color-mix(
					in srgb,
					var(--neutral-black) 95%,
					transparent 5%
				);
			}
			backdrop-filter: blur(4px);
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

		@media (min-width: 56rem) {
			display: flex;
			justify-content: flex-end;
		}
	}
</style>
