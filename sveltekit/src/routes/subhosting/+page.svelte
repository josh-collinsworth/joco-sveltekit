<script lang="ts">
	import SubhostingHeroCanvas from '$lib/components/subhosting/SubhostingHeroCanvas.svelte';
</script>

<main>
	<h1>Subhosting Hero Canvas</h1>
	<div class="canvas-container">
		<SubhostingHeroCanvas class="hero-canvas" />
	</div>
</main>

<style>
	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	h1 {
		margin-bottom: 2rem;
	}

	.canvas-container {
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 12px;
		overflow: hidden;
		background: #0a0a1a;
	}

	:global(.hero-canvas) {
		width: 100%;
		height: 100%;
		display: block;
	}
</style>
