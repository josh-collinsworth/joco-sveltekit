<script lang="ts">
	import LogoSVG from '$lib/components/header/LogoSVG.svelte'
	import Grid from '$lib/components/Grid.svelte'
	import NavMenus from '$lib/components/header/NavMenus.svelte'
	import DarkModeToggle from '$lib/components/settings/DarkModeToggle.svelte'
	import ReduceMotionToggle from '../settings/ReduceMotionToggle.svelte'
	import { isLoading, isMenuOpen } from '$lib/assets/js/store'

	export let key: string

	const toggleMenu = () => {
		isMenuOpen.set(!$isMenuOpen)
	}

	const handleClick = () => {
		if ($isMenuOpen) toggleMenu()
		if (window?.location?.pathname !== '/') isLoading.set(true)
	}
	
	// I don't love any part of this, but it's necessary to make the "skip to main content" link work properly, so we'll live with it.
	const focusMain = () => {
		const main = document.querySelector('main')
		main.focus()
	}
</script>


<div>
  <header class="header">
    <a on:click={focusMain} class="skip-to-content-link" href="#main">
      Skip to main content
    </a>

		<a
			href="/"
			class="logo"
			class:sticky={$isMenuOpen}
			on:click={handleClick}
		>
			<LogoSVG />
			<span class="sr">Home</span>
		</a>
		
		<div class="icon-container" class:sticky={$isMenuOpen}>
			<ReduceMotionToggle />
			<DarkModeToggle />
			<NavMenus {key} />
		</div>
  </header>
  <Grid refresh={key} />
</div>


<style lang="scss">
	.logo {
		width: auto;
		height: 2rem;
		display: block;
		position: relative;
		z-index: 4;
	}

	.icon-container {
		display: flex;
		align-items: center;
		position: relative;

		&.sticky {
			right: 1rem;
			top: calc(2.5rem - 2px);
		}
	}

	.sticky {
		position: fixed;
		top: 2.5rem;

		--ink: var(--white);
		--paper: var(--darkBlue);
	}


	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		position: relative;
		z-index: 3;
		min-height: calc(90px + 2rem);
	}

	.skip-to-content-link {
		--item-transition: .15s cubic-bezier(0.86, 0, 0.07, 1);

		transition: transform var(--item-transition), opacity var(--item-transition);
		position: absolute;
		top: 1rem;
		left: 1rem;
		transform: translateX(-100%);
		padding: .5em;
		opacity: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		background: var(--darkBlue);
		color: var(--white);

		&:focus {
			transform: translateX(0)	;
			opacity: 1;
			z-index: 11;
		}
	}
</style>
