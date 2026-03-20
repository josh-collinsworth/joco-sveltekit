<script lang="ts">
	import SandboxHeroImage from '$lib/components/sandboxes/SandboxHeroImage.svelte';
</script>

<main>
	<h1>SandboxHeroImage Component</h1>

	<section>
		<div class="sandbox-wrapper">
			<SandboxHeroImage />
		</div>
	</section>
</main>

<style>
	main {
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	h1 {
		margin-bottom: 2rem;
	}

	section {
		margin-bottom: 3rem;
	}

	.sandbox-wrapper {
		perspective: 1200px;
	}
</style>
