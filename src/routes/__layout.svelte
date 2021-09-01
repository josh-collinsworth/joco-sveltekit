<div class=""> <!-- TODO: reduce-motion, prefers-dark, prefers-light, mounted (?)-->
	<Header {key} /> 
	
	<PageTransition refresh={key}>
		<div class="layout">
			<slot></slot>
		</div>
	</PageTransition>
	
	<footer>
		<Grid inverted={true} density={50} refresh={key} />
		&copy; 2021 Josh Collinsworth
	</footer>
</div>


<script>
	import { onMount, tick } from 'svelte'
	import Grid from '$lib/components/Grid.svelte'
	import Header from '$lib/components/header/Header.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte';
	import prism from '$lib/assets/js/prism.js'
	import '$lib/assets/scss/global.scss'

	export let key

	onMount(() => {
		prism.init()
	})
</script>

<script context="module">
	export const load = async({ page }) => ({
		props: {
			key: page.path
		}
	})
</script>