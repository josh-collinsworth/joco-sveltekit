<template>
	<Header {key} />
	
	<PageTransition refresh={key}>
		<slot></slot>
	</PageTransition>
		
	<footer>
		<Grid inverted={true} density={50} refresh={key} />
		&copy; 2021 Josh Collinsworth
	</footer>

</template>


<script>
	import { onMount, tick } from 'svelte'
	import Grid from '$lib/components/Grid.svelte'
	import Header from '$lib/components/header/Header.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte';
	import prism from '$lib/assets/js/prism.js'

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