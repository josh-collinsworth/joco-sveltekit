<script context="module">
	export const load = async({ page }) => ({
		props: {
			key: page.path
		}
	})
</script>

<script lang="ts">
	import Header from '$lib/components/header/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte'
	
	import '$lib/assets/scss/global.scss'

	export let key: string

	console.log(key)
</script>


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