<script context="module" lang="ts">
	export const load = async({ page }) => {
		let reduceMotion: boolean = false
		let ready: boolean = false

		if (typeof window != 'undefined') {
			const userMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			const storedMotionPreference = window.localStorage.getItem('collinsworth-reduce-motion')

			if ((userMotionPreference && storedMotionPreference != 'false') || storedMotionPreference == 'true') {
				reduceMotion = true
			}

			ready = true
		}

		return {
			props: {
				key: page.path,
				reduceMotion,
				ready
			}
		}
	}
</script>

<script lang="ts">
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte'
	
	import '$lib/assets/scss/global.scss'

	export let key: string
  export let reduceMotion:boolean = false
  export let ready:boolean = false
	
  let prefersDark:boolean = false
  let prefersLight:boolean = true

	const toggleReduceMotion = () => {
		if (typeof window == 'undefined') return

		reduceMotion = !reduceMotion

		window.localStorage.setItem(
			'collinsworth-reduce-motion',
			JSON.stringify(reduceMotion)
		)
	}

	const setPrefersDarkMode = (setAsDark: boolean): void => {
		prefersLight = !setAsDark;
		prefersDark = setAsDark;
	}
</script>


<div
	id="app"
	class:reduce-motion={reduceMotion}
	class:prefers-dark={prefersDark}
	class:prefers-light={prefersLight}
	class:mounted={ready}
>
	<Header {key} {setPrefersDarkMode} {reduceMotion} {toggleReduceMotion} /> 

	<div class="layout"> 
		<PageTransition refresh={key}>
		<!-- [x] TODO: dynamic sidebar -->
			<main tabindex="-1">
				<slot></slot>
			</main>
		</PageTransition>
		
		<Sidebar />
	</div>

	<Footer />
</div>