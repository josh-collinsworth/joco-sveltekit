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
	import { isLoading, prefersDarkMode, prefersLightMode } from '$lib/assets/js/store'
	import { onMount } from 'svelte'
	
	export let key: string
	export let isFullwidthPage: boolean
	export let pageHasSidebar: boolean
	
  let reduceMotion: boolean = false

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

	const setReduceMotion = (reduce: boolean): void => {
		reduceMotion = reduce

		window.localStorage.setItem(
			'collinsworth-reduce-motion',
			JSON.stringify(reduceMotion)
		)
	}

	const setLoading = (newState: boolean): void => {
		isLoading.set(newState)
	}
</script>


<div
	id="app"
	class:reduce-motion={reduceMotion}
	class:prefers-dark={$prefersDarkMode}
	class:prefers-light={$prefersLightMode}
>
	{#if $isLoading}
		<Loader />
	{/if}
	<Header {key} {reduceMotion} {setReduceMotion} /> 

	<div class="layout"> 
		<main>
			<PageTransition refresh={isTopLevelPage}>
				{#if isTopLevelPage}
					<PageHead title={key} />
				{/if}
			</PageTransition>	

			<PageTransition refresh={key} fullwidth={isFullwidthPage} sidebar={pageHasSidebar} bind:reduceMotion on:loaded={() => setLoading(false) }>
				<slot></slot>
			</PageTransition>
		</main>
		
		{#if pageHasSidebar}
			<Sidebar />
		{/if}
	</div>

	<Footer />
</div>