<template>
	<header>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/blog">Blog</a>
		</nav>
	</header>

	<slot></slot>

	<footer>
		&copy; 2021 Josh Collinsworth

	</footer>

</template>


<script>
	import { onMount } from 'svelte'
	import prism from '$lib/assets/js/prism.js'

	onMount(() => {
		prism.init()
	})
</script>

<style>


</style>
