<!-- TODO: a lot of this is duplicated from the `(site)` layout, 	but this felt like the best way to separate the two,
	so I could control the header and page heading a little more at this route level. (The other option was cluttering the main
	layout file with even more conditional logic to show or hide components, which didn't feel right, especially since it would
	mean things like tracking scroll for nothing when the header is hidden.)-->
<script lang="ts">
	import '$lib/assets/scss/global.scss'
	
	import Footer from '$lib/components/Footer.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { prefersReducedData } from '$lib/assets/js/utils'
	import { isLoading, prefersReducedMotion } from '$lib/data/store'
	import { onMount } from 'svelte'
	import { afterNavigate, beforeNavigate, preloadCode } from '$app/navigation'
	import { dev } from '$app/environment'

	let root: HTMLElement
	let isFrame = false

	const setLoading = (newState: boolean): void => {
		isLoading.set(newState)
	}

	const startPageTransition = () => {
		setLoading(true)
		root.classList.remove('smooth-scroll')
	}
	
	const endPageTransition = async () => {
		setLoading(false)
		root.classList.add('smooth-scroll')
	}

	beforeNavigate(() => startPageTransition() )
	afterNavigate(() => endPageTransition() )

	onMount(() => {
		if (window.self !== window.top) isFrame = true
		root = document.documentElement
		root.classList.add('smooth-scroll')
		if (!prefersReducedData()) {
			preloadCode('/', '/blog', '/projects', '/about-me')
		}
	})
</script>


<svelte:head>
	<meta property="og:site_name" content="Josh Collinsworth" />
	<meta property="og:locale" content="en_US" />
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

	<div class="layout"> 
		<slot />
	</div>

	{#if !isFrame}
		<Footer />
	{/if}
</div>
