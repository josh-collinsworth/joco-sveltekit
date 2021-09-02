<template>
	<Header {key} /> 
	
	<div id="app" class="layout"> 
		<PageTransition refresh={key}>
		<!-- TODO: dynamic sidebar -->
			<main tabindex="-1">
				<slot></slot>
			</main>
		</PageTransition>
		
		<Sidebar />
	</div>

	<Footer />
</template>


<script lang="ts">
	import { onMount } from 'svelte'
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte';
	import prism from '$lib/assets/js/prism.js'
	import Sidebar from '$lib/components/Sidebar.svelte'
	
	import '$lib/assets/scss/global.scss'

	export let key: string

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