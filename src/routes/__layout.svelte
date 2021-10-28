<script context="module" lang="ts">
	export const load = async({ page }) => {

		const path: string = page.path

		return {
			props: {
				path,
			}
		}
	}
</script>

<script lang="ts">
	import '$lib/assets/scss/global.scss'
	
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/transitions/PageTransition.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { FULLWIDTH_PAGE_REGEXP, TIMING_DURATION } from '$lib/data/constants'
	import { isLoading, prefersDarkMode, prefersLightMode, prefersReducedMotion, isScrollingDown } from '$lib/data/store'
	import { onMount } from 'svelte'
	import { prefetch, prefetchRoutes } from '$app/navigation'
	import throttle from 'lodash/throttle.js'
import { dev } from '$app/env';
	
	export let path: string
	export let pageHasSidebar: boolean

	const blogPageCheck = new RegExp(/^\/blog/)
	let isFullwidthPage: boolean = false
	let lastScrollPosition: number = 0

	$: pageHasSidebar = blogPageCheck.test(path)
	$: isTopLevelPage = path.split('/').length < 3

	const handleLoadingUserPreferences = () => {
		const userPrefersDark = 
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    let storedDarkModePreference = JSON.parse(localStorage.getItem('collinsworth-dark-mode'))

    const computedUserPreference = 
			(storedDarkModePreference || (userPrefersDark && storedDarkModePreference !== false))

    prefersDarkMode.set(computedUserPreference)
    prefersLightMode.set(!computedUserPreference)
	}

	const setLoading = (newState: boolean): void => {
		isLoading.set(newState)

		// Janky, but needed to prevent jumps in width while transitioning between pages of different widths.
		// Tried finding a better way to do this but failed; having the transition wrapper as an element in the grid makes things very complicated.
		setTimeout(() => {
			setIsFullwidthPage()
		}, TIMING_DURATION)
	}

	const setIsFullwidthPage = () => {
		isFullwidthPage = FULLWIDTH_PAGE_REGEXP.test(path)
	}

	const handleScroll = throttle(() => {
		const currentScrollPosition = window.scrollY
		const delta = lastScrollPosition - currentScrollPosition
		if (delta > 0 && delta < 10) {
			return
		}

		if (lastScrollPosition > currentScrollPosition) {
			isScrollingDown.set(false)
		} else if (currentScrollPosition > 100) {
			isScrollingDown.set(true)
		}
		lastScrollPosition = currentScrollPosition
	}, 200)

	onMount(() => {
		handleLoadingUserPreferences()

		const prefersReducedData = window.matchMedia(
			`not all and (prefers-reduced-data), (prefers-reduced-data)`
		).matches;

		if (!prefersReducedData) {
			if (path.includes('/blog')) {
				prefetchRoutes()
			} else {	
				prefetch('/')
				prefetch('/blog')
				prefetch('/projects')
				prefetch('/writing-and-speaking')
			}
		}

		setIsFullwidthPage()
	})
</script>


<svelte:window on:scroll={handleScroll} />

<svelte:head>
	<meta property="og:url" content="https://joshcollinsworth.com" />
	<meta property="og:site_name" content="Josh Collinsworth" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:creator" content="@jjcollinsworth" />
	<meta name="twitter:site" content="@jjcollinsworth"/>
  <meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>

<div
	id="app"
	class:reduce-motion={$prefersReducedMotion}
	class:prefers-dark={$prefersDarkMode}
	class:prefers-light={$prefersLightMode}
	class:fullwidth={isFullwidthPage}
	class:sidebar={pageHasSidebar}
>
	<Loader loading={$isLoading}/>

	<Header {path} /> 

	<div class="layout"> 
		<main id="#main" tabindex="-1">
			<PageTransition refresh={isTopLevelPage}>
				{#if isTopLevelPage}
					<PageHeading title={path} />
				{/if}
			</PageTransition>	

			<PageTransition refresh={path} on:loaded={() => setLoading(false) }>
				<slot/>
			</PageTransition>
		</main>
		
		<div id="sidebar">
			<PageTransition refresh={pageHasSidebar}>
				{#if pageHasSidebar}
				<Sidebar />
				{/if}
			</PageTransition>
		</div>
	</div>

	<Footer />
</div>
