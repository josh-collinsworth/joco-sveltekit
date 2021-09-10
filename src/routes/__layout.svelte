<script context="module" lang="ts">
	import { FULLWIDTH_PAGES } from '$lib/assets/js/constants'

	export const load = async({ page }) => {

		const key: string = page.path
		const isFullwidthPage: boolean = FULLWIDTH_PAGES.includes(key)
		const pageHasSidebar: boolean = key.includes('/blog')

		return {
			props: {
				key,
				isFullwidthPage,
				pageHasSidebar
			}
		}
	}
</script>

<script lang="ts">
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/transitions/PageTransition.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Loader from '$lib/components/Loader.svelte'

	import '$lib/assets/scss/global.scss'
	
	export let key: string
	export let isFullwidthPage: boolean
	export let pageHasSidebar: boolean
	
  let reduceMotion: boolean = false
  let prefersDark: boolean = false
  let prefersLight: boolean = true
  let loading: boolean = false

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

	const setLoading = (isLoading: boolean): void => {
		loading = isLoading
	}
</script>


<div
	id="app"
	class:reduce-motion={reduceMotion}
	class:prefers-dark={prefersDark}
	class:prefers-light={prefersLight}
>
	{#if loading}
		<Loader />
	{/if}
	<Header {key} {setPrefersDarkMode} {reduceMotion} {setReduceMotion} on:startloading={() => setLoading(true)} /> 

	<div class="layout"> 
		<PageTransition refresh={key} fullwidth={isFullwidthPage} sidebar={pageHasSidebar} bind:reduceMotion on:loaded={() => setLoading(false)}>
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