<template>
	<header>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/blog">Blog</a>
		</nav>
	</header>
	<Grid />

	<slot></slot>

	<footer>
		&copy; 2021 Josh Collinsworth

	</footer>

</template>


<script>
	import { onMount } from 'svelte'
	import Grid from '$lib/components/Grid.svelte'
	import prism from '$lib/assets/js/prism.js'

	onMount(() => {
		prism.init()
	})
</script>

<style>


</style>
