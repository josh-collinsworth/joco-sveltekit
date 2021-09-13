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

	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/transitions/PageTransition.svelte'
	import PageHead from '$lib/components/PageHead.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { FULLWIDTH_PAGES } from '$lib/assets/js/constants'
	import { isLoading, prefersDarkMode, prefersLightMode, prefersReducedMotion } from '$lib/assets/js/store'
	import { onMount } from 'svelte'
	
	export let key: string
	export let isFullwidthPage: boolean
	export let pageHasSidebar: boolean

	const blogPageCheck = new RegExp(/^\/blog/)

	$: isFullwidthPage = FULLWIDTH_PAGES.includes(key)
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
	})

	const setLoading = (newState: boolean): void => {
		isLoading.set(newState)
	}

	let recentlyPressedKeys: string[] = ['','','',''];

	let xaby: boolean = false

	const listenToKeydown = (e: KeyboardEvent): void => {
		recentlyPressedKeys.push(e.key)
		if (recentlyPressedKeys.length > 4) {
			recentlyPressedKeys = recentlyPressedKeys.slice(1)
		}
		
		if (recentlyPressedKeys.join('').toLowerCase() === 'xaby') {
			xaby = true
		}
	}
</script>

<svelte:window on:keydown={listenToKeydown} />

<div
	id="app"
	class:reduce-motion={$prefersReducedMotion}
	class:prefers-dark={$prefersDarkMode}
	class:prefers-light={$prefersLightMode}
	class:xaby
>
	{#if $isLoading}
		<Loader />
	{/if}
	<Header {key} /> 

	<div class="layout"> 
		<main>
			<PageTransition refresh={isTopLevelPage}>
				{#if isTopLevelPage}
					<PageHead title={key} />
				{/if}
			</PageTransition>	

			<PageTransition refresh={key} fullwidth={isFullwidthPage} sidebar={pageHasSidebar} on:loaded={() => setLoading(false) }>
				<slot></slot>
			</PageTransition>
		</main>
		
		{#if pageHasSidebar}
			<Sidebar />
		{/if}
	</div>

	<Footer />
</div>