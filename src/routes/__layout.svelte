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
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Loader from '$lib/components/Loader.svelte'
	import { FULLWIDTH_PAGES } from '$lib/assets/js/constants'
	import { isLoading } from '$lib/assets/js/store'
	
	export let key: string
	export let isFullwidthPage: boolean
	export let pageHasSidebar: boolean
	
  let reduceMotion: boolean = false
  let prefersDark: boolean = false
  let prefersLight: boolean = true

	const sidebarCheck = new RegExp(/^\/blog/)

	$: isFullwidthPage = FULLWIDTH_PAGES.includes(key)
	$: pageHasSidebar = sidebarCheck.test(key)

	const setReduceMotion = (reduce: boolean): void => {
		reduceMotion = reduce

		window.localStorage.setItem(
			'collinsworth-reduce-motion',
			JSON.stringify(reduceMotion)
		)
	}

	const setPrefersDarkMode = (setAsDark: boolean): void => {
		prefersLight = !setAsDark
		prefersDark = setAsDark
	}

	const setLoading = (newState: boolean): void => {
		console.log($isLoading)
		isLoading.set(newState)
	}
</script>


<div
	id="app"
	class:reduce-motion={reduceMotion}
	class:prefers-dark={prefersDark}
	class:prefers-light={prefersLight}
>
	{#if $isLoading}
		<Loader />
	{/if}
	<Header {key} {setPrefersDarkMode} {reduceMotion} {setReduceMotion} /> 

	<div class="layout"> 
		<PageTransition refresh={key} fullwidth={isFullwidthPage} sidebar={pageHasSidebar} bind:reduceMotion on:loaded={() => { console.log('***LOADED***'); setLoading(false) }}>
			<main>
				<slot></slot>
			</main>
		</PageTransition>
		
		{#if pageHasSidebar}
			<Sidebar />
		{/if}
	</div>

	<Footer />
</div>