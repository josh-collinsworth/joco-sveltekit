<script lang="ts">
	import HeroSvg from '$lib/components/runtime/HeroSvg.svelte';
</script>

<main>
	<h1>HeroSvg Component</h1>
	<div class="hero-wrapper">
		<HeroSvg />
	</div>
</main>

<style>
	main {
		max-width: 600px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	h1 {
		margin-bottom: 2rem;
	}

	.hero-wrapper {
		background: #fff;
		border-radius: 12px;
		overflow: hidden;
	}
</style>
