<script context="module" lang="ts">
	export const load = async({ page }) => {

		const key: string = page.path

		return {
			props: {
				key,
			}
		}
	}
</script>

<script lang="ts">
	import '$lib/assets/scss/global.scss'
	import throttle from 'lodash/throttle.js'
	
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/transitions/PageTransition.svelte'
	import PageHead from '$lib/components/PageHead.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { FULLWIDTH_PAGES, TIMING_DURATION } from '$lib/assets/js/constants'
	import { isLoading, prefersDarkMode, prefersLightMode, prefersReducedMotion, isScrollingDown, isMenuOpen } from '$lib/assets/js/store'
	import { onMount } from 'svelte'
	
	export let key: string
	export let pageHasSidebar: boolean

	const blogPageCheck = new RegExp(/^\/blog/)
	let isFullwidthPage: boolean = false
	let lastScrollPosition: number = 0

	$: pageHasSidebar = blogPageCheck.test(key)
	$: isTopLevelPage = key.split('/').length < 3

	onMount(() => {
		const userPrefersDark = 
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    let storedDarkModePreference = JSON.parse(localStorage.getItem('collinsworth-dark-mode'))

    const computedUserPreference = 
			(storedDarkModePreference || (userPrefersDark && storedDarkModePreference !== false))

    prefersDarkMode.set(computedUserPreference)
    prefersLightMode.set(!computedUserPreference)

		isFullwidthPage = FULLWIDTH_PAGES.includes(key)
	})

	const setLoading = (newState: boolean): void => {
		isLoading.set(newState)

		// Janky, but needed to prevent jumps in width while transitioning between pages of different widths.
		// Tried finding a better way to do this but failed; having the transition wrapper as an element in the grid makes things very complicated.
		setTimeout(() => {
			isFullwidthPage = FULLWIDTH_PAGES.includes(key)
		}, TIMING_DURATION)
	}

	const handleScroll = throttle(() => {
		const currentScrollPosition = window.scrollY
		if (lastScrollPosition > currentScrollPosition) {
			isScrollingDown.set(false)
		} else {
			isScrollingDown.set(true)
		}
		lastScrollPosition = currentScrollPosition
	}, 200)
</script>


<svelte:window on:scroll={handleScroll} />

<div
	id="app"
	class:reduce-motion={$prefersReducedMotion}
	class:prefers-dark={$prefersDarkMode}
	class:prefers-light={$prefersLightMode}
	class:fullwidth={isFullwidthPage}
	class:sidebar={pageHasSidebar}
>
	<Loader loading={$isLoading}/>

	<Header {key} /> 

	<div class="layout"> 
		<main id="#main" tabindex="-1" class:isMenuOpen={$isMenuOpen}>
			<PageTransition refresh={isTopLevelPage}>
				{#if isTopLevelPage}
					<PageHead title={key} />
				{/if}
			</PageTransition>	

			<PageTransition refresh={key} on:loaded={() => setLoading(false) }>
				<slot></slot>
			</PageTransition>
		</main>
		
		{#if pageHasSidebar}
			<Sidebar />
		{/if}
	</div>

	<Footer />
</div>



<style>
	.isMenuOpen {
		filter: blur(4px);
	}
</style>
