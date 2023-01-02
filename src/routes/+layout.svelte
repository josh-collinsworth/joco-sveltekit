<script lang="ts">
	import type { LayoutData } from './$types';
	import '$lib/assets/scss/global.scss'
	
	import throttle from 'just-throttle'
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/transitions/PageTransition.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { prefersReducedData } from '$lib/assets/js/utils'
	import { isLoading, prefersReducedMotion, isScrollingDown } from '$lib/data/store'
	import { onMount } from 'svelte'
	import { afterNavigate, beforeNavigate, preloadCode } from '$app/navigation';
	import { dev } from '$app/environment'

	export let data: LayoutData

	let path: string
	$: ({ path } = data)

	let lastScrollPosition: number = 0
	const isSinglePostCheck: RegExp = new RegExp(/\/blog\/[A-z0-9\-_]+\/?$/)

	let isSinglePost: boolean
	$: isSinglePost = isSinglePostCheck.test(path)

	const setLoading = (newState: boolean): void => {
		isLoading.set(newState)
	}

	const handleScroll = throttle(() => {
		// Early return if we're above mobile width
		if (window.outerWidth >= 768) {
			if ($isScrollingDown) isScrollingDown.set(false)
			return
		}

		const currentScrollPosition = window.scrollY
		const delta = lastScrollPosition - currentScrollPosition
		if (delta > 0 && delta < 10) {
			return
		}

		if (lastScrollPosition > currentScrollPosition) {
			isScrollingDown.set(false)
		} else if (currentScrollPosition > 240) {
			isScrollingDown.set(true)
		}
		lastScrollPosition = currentScrollPosition
	}, 100)

	beforeNavigate(() => { setLoading(true) })
	afterNavigate(() => { setLoading(false) })

	onMount(() => {
		if (!prefersReducedData()) {
			preloadCode('/', '/blog', '/projects', '/writing-and-speaking')
		}
	})
</script>


<svelte:window on:scroll={handleScroll} />

<svelte:head>
	<meta property="og:site_name" content="Josh Collinsworth" />
	<meta property="og:locale" content="en_US" />
	<!-- <meta name="twitter:creator" content="@jjcollinsworth" />
	<meta name="twitter:site" content="@jjcollinsworth"/> -->
	<meta name="twitter:card" content="summary_large_image" />
	{#if !dev}
		<script defer data-domain="joshcollinsworth.com" src="https://plausible.io/js/plausible.js"></script>
	{/if}
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
