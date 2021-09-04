<script lang="ts">
	import LogoSVG from '$lib/components/header/LogoSVG.svelte'
	import Grid from '$lib/components/Grid.svelte'
	import NavMenus from '$lib/components/header/NavMenus.svelte'
	import DarkModeToggle from '$lib/components/settings/DarkModeToggle.svelte'
	import ReduceMotionToggle from '../settings/ReduceMotionToggle.svelte';

	export let key: string
	export let reduceMotion: boolean
	export let setPrefersDarkMode: (goDark: boolean) => void
	export let setReduceMotion: (reduce: boolean) => void

	let menuOpen: boolean = false

	const toggleMenu = () => {
		menuOpen = !menuOpen
	}
	
	// I don't love any part of this, but it's necessary to make the "skip to main content" link work properly, so we'll live with it.
	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<div>
  <header class="header">
    <a on:click={focusMain} class="skip-to-content-link" href="#main">
      Skip to main content
    </a>

		<a href="/" class="logo" class:sticky={menuOpen}>
			<LogoSVG />
			<span class="sr">Home</span>
		</a>
		
		<div class="icon-container" class:sticky={menuOpen}>
			<ReduceMotionToggle {reduceMotion} {setReduceMotion} />
			<DarkModeToggle {setPrefersDarkMode} />
			<NavMenus {menuOpen} {toggleMenu} {key} />
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
	gap: 1rem;
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
	transition: all .15s cubic-bezier(0.86, 0, 0.07, 1);
	position: absolute;
	top: 0;
	left: -100vw;
	padding: .5em;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	background: var(--darkBlue);
	color: var(--white);

	&:focus {
		left: 0;
		opacity: 1;
		z-index: 10;
	}
}
</style>