<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit'

	export const load = async ({ url, fetch }): Promise<LoadOutput> => {
		const res = await fetch('/api/posts.json')
		const resJSON = await res.json()
		
		const recentPosts = resJSON.posts
			.map(post => ({ slug: post.slug, title: post.title }))
			.slice(0, 5)
		
		const allCategories = Array.from(new Set(resJSON.posts.flatMap(p => p.categories)))

		const path: string = url.pathname

		return {
			props: {
				path,
				recentPosts,
				allCategories
			}
		}
	}
</script>

<script lang="ts">
	import type Post from '$lib/assets/js/interfaces/post'

	import '$lib/assets/scss/global.scss'
	
	import throttle from 'just-throttle'
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/transitions/PageTransition.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { TIMING_DURATION } from '$lib/data/constants'
	import { isLoading, theme, prefersReducedMotion, isScrollingDown } from '$lib/data/store'
	import { onMount } from 'svelte'
	import { prefetch, prefetchRoutes } from '$app/navigation'
	
	export let path: string
	export let recentPosts: Post[]
	export let allCategories: string[]

	const blogPageCheck = new RegExp(/^\/blog/)
	let pageHasSidebar = false
	let lastScrollPosition: number = 0

	$: isTopLevelPage = path.split('/').length < 3

	const setLoading = (newState: boolean): void => {
		isLoading.set(newState)

		// Janky, but needed to prevent jumps in width while transitioning between pages of different widths.
		// Tried finding a better way to do this but failed; having the transition wrapper as an element in the grid makes things very complicated.
		setTimeout(() => {
			setPageProperties()
		}, TIMING_DURATION)
	}

	const setPageProperties = () => {
		pageHasSidebar = blogPageCheck.test(path)
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

		setPageProperties()
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
	class:has-sidebar={pageHasSidebar}
>
	<Loader loading={$isLoading}/>

	<Header {path} /> 

	<div class="layout" class:subpage={!isTopLevelPage}> 
		<PageHeading title={path} {isTopLevelPage} />
		
		<div class="sidebar">
			<PageTransition refresh={pageHasSidebar} transitionOut={false}>
				{#if pageHasSidebar}
					<Sidebar {recentPosts} {allCategories} />
				{/if}
			</PageTransition>
		</div>

		<main id="main" tabindex="-1">
			<PageTransition refresh={path}>
				<slot/>
			</PageTransition>
		</main>
	</div>

	<Footer />
</div>
