<script lang="ts">
	import HeroImage from '$lib/components/runtime/HeroImage.svelte';
</script>

<main>
	<h1>HeroImage Component</h1>

	<section>
		<h2>Rain (default)</h2>
		<div class="hero-wrapper">
			<HeroImage backgroundTheme="rain" />
		</div>
	</section>

	<section>
		<h2>Snow</h2>
		<div class="hero-wrapper">
			<HeroImage backgroundTheme="snow" />
		</div>
	</section>

	<section>
		<h2>None (no weather)</h2>
		<div class="hero-wrapper">
			<HeroImage backgroundTheme="none" />
		</div>
	</section>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	h1 {
		margin-bottom: 2rem;
	}

	h2 {
		margin-bottom: 1rem;
	}

	section {
		margin-bottom: 3rem;
	}

	.hero-wrapper {
		max-width: 500px;
	}
</style>
