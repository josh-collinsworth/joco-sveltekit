<script lang="ts">
	import LogoSVG from '$lib/components/header/LogoSVG.svelte'
	import Grid from '$lib/components/Grid.svelte'
	import NavMenu from '$lib/components/header/NavMenu.svelte'
	import DarkModeToggle from '$lib/components/settings/DarkModeToggle.svelte'
	import ReduceMotionToggle from '../settings/ReduceMotionToggle.svelte'
	import { isMenuOpen, isScrollingDown } from '$lib/data/store'

	export let path: string
	
	// I don't love any part of this, but it's necessary to make the "skip to main content" link work properly, so we'll live with it.
	const focusMain = (e: Event): void => {
		e.preventDefault()
		const main = document.querySelector('main')
		main.focus()
	}
</script>


<div>
	<header class="header">
		<a on:click={focusMain} class="skip-to-content-link" href="#main">
			Skip to main content
		</a>

		<a href="/" class="logo">
			<LogoSVG />
			<span class="sr">Home</span>
		</a>
		
		<div class="icon-container" class:sticky={$isMenuOpen} class:ghosty={$isScrollingDown && !$isMenuOpen}>
			<ReduceMotionToggle />
			<DarkModeToggle />
			<NavMenu {path} />
		</div>
	</header>

	<Grid refresh={path} />

	<noscript>
		<style>
			#dark-mode-toggle, 
			#motion-toggle,
			#contact-form {
				display: none;
			}

			.page-head .heading-wrapper .brace.closing-brace {
				transform: translateX(0);
			}
		</style>
	</noscript>
</div>


<style lang="scss">
	.logo {
		width: auto;
		height: 2rem;
		display: block;

		@media (min-width: vars.$xxl) and (min-height:vars.$md) {
			height: 3rem;
		}
	}

	.icon-container {
		display: flex;
		align-items: center;
		position: fixed;
		right: 1rem;
		top: calc(1rem - 2px);
		transition: opacity 0.2s;

		@media (min-width: vars.$xs) {
			position: static;
		}
	}

	.sticky {
		--ink: var(--white);
		--buttonBackground: transparent;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		position: relative;
		z-index: 4;
		padding: var(--quarterNote) var(--margin) var(--halfNote);

		@media (min-width: vars.$xs) {
			padding: var(--halfNote) var(--margin);
		}
	}

	.skip-to-content-link {
		--itemTransition: .15s cubic-bezier(0.86, 0, 0.07, 1);

		transition: transform var(--itemTransition), opacity var(--itemTransition);
		position: absolute;
		top: -6rem;
		left: 1rem;
		padding: .5em;
		opacity: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		background: var(--darkBlue);
		color: var(--white);
		font-family: var(--headingFont);

		&:focus {
			transform: translateY(7rem);
			opacity: 1;
			z-index: 11;
		}
	}
</style>
