<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit'

	export const load = async ({ url }): Promise<LoadOutput> => {
		const path: string = url.pathname

		return {
			props: {
				path
			}
		}
	}
</script>

<script lang="ts">
	import '$lib/assets/scss/global.scss'
	
	import throttle from 'just-throttle'
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/transitions/PageTransition.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { isLoading, theme, prefersReducedMotion, isScrollingDown } from '$lib/data/store'
	import { onMount } from 'svelte'
	import { prefetch, prefetchRoutes } from '$app/navigation'
	
	export let path: string

	let lastScrollPosition: number = 0
	const isSinglePostCheck: RegExp = new RegExp(/\/blog\/[A-z0-9\-_]+\/?$/)

	let isSinglePost: boolean
	$: isSinglePost = isSinglePostCheck.test(path)

	const setLoading = (newState: boolean): void => {
		isLoading.set(newState)
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
	}, 100)

	onMount(() => {
		// handleLoadingUserPreferences()

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
	})
</script>


<svelte:window 
	on:scroll={handleScroll} 
	on:sveltekit:navigation-start={() => { setLoading(true) }}
	on:sveltekit:navigation-end={() => { setLoading(false) }}
/>

<svelte:head>
	<meta property="og:site_name" content="Josh Collinsworth" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:creator" content="@jjcollinsworth" />
	<meta name="twitter:site" content="@jjcollinsworth"/>
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div
	id="app"
	class:reduce-motion={$prefersReducedMotion}
>
	<Loader loading={$isLoading}/>

	<Header {path} /> 

	<div class="layout" class:subpage={!isSinglePost}> 
		<PageHeading title={path} {isSinglePost} />

		<PageTransition refresh={path}>
			<slot/>
		</PageTransition>
	</div>

	<Footer />
</div>
