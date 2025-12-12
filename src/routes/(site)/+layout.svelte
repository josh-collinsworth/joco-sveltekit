<script lang="ts">
	import { run } from 'svelte/legacy'
	import type { LayoutData } from './$types'
	import throttle from 'just-throttle'
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/transitions/PageTransition.svelte'
	import PageHeading from '$lib/components/PageHeading.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { prefersReducedData } from '$lib/assets/js/utils'
	import { isLoading, isScrollingDown, isMenuOpen } from '$lib/data/store'
	import { onMount } from 'svelte'
	import { afterNavigate, beforeNavigate, preloadCode } from '$app/navigation'
	import { dev } from '$app/environment'

	interface Props {
		data: LayoutData
		children?: import('svelte').Snippet
	}

	let { data, children }: Props = $props()

	let path: string = $state()
	run(() => {
		;({ path } = data)
	})

	let root: HTMLElement

	let lastScrollPosition: number = 0
	const isSinglePostCheck: RegExp = new RegExp(/\/blog\/[A-z0-9\-_]+\/?$/)

	let isSinglePost: boolean = $derived(isSinglePostCheck.test(path))

	const handleScroll = throttle(() => {
		const currentScrollPosition = window.scrollY
		const delta = lastScrollPosition - currentScrollPosition
		if (delta > 0 && delta < 10) {
			return
		}

		if (lastScrollPosition > currentScrollPosition) {
			$isScrollingDown = false
		} else if (currentScrollPosition > 240) {
			$isScrollingDown = true
		}
		lastScrollPosition = currentScrollPosition
	}, 100)

	beforeNavigate(({ to }) => {
		$isMenuOpen = false
		if (to?.route?.id) {
			$isLoading = true
			root.classList.remove('smooth-scroll')
		}
	})

	afterNavigate(() => {
		$isLoading = false
		root.classList.add('smooth-scroll')
	})

	onMount(() => {
		root = document.documentElement
		root.classList.add('smooth-scroll')
		if (!prefersReducedData()) {
			preloadCode('/', '/blog', '/projects', '/about-me')
		}
	})
</script>

<svelte:window onscroll={handleScroll} />

<svelte:head>
	<meta property="og:site_name" content="Josh Collinsworth" />
	<meta property="og:locale" content="en_US" />
	<link rel="stylesheet" href="/css/vars.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/global.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/preferences.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/fonts.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/typography.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/utilities.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/layout.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/forms.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/code.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/print.css?ver={Date.now()}" />
	<link rel="stylesheet" href="/css/components.css?ver={Date.now()}" />
	{#if !dev}
		<script
			defer
			data-domain="joshcollinsworth.com"
			src="https://plausible.io/js/plausible.js"
		></script>
	{/if}
</svelte:head>

<div id="app">
	<Loader loading={$isLoading} />

	<Header {path} />

	<div class="layout">
		<PageHeading title={path} {isSinglePost} />

		<PageTransition refresh={path}>
			{@render children?.()}
		</PageTransition>
	</div>

	<Footer />
</div>
