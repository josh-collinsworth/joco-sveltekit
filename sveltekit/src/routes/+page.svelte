<script lang="ts">
	import DenoLogo from '$lib/components/icons/DenoLogo.svelte';
	import DenoDeployLogo from '$lib/components/icons/DenoDeployLogo.svelte';
</script>

<main>
	<h1>Deno Component Showcase</h1>

	<nav>
		<h2>Pages</h2>
		<ul>
			<li><a href="/hero">HeroImage (rain/snow/steam)</a></li>
			<li><a href="/sandbox">SandboxHeroImage</a></li>
			<li><a href="/dressup">Dressup (Dino Avatar)</a></li>
			<li><a href="/subhosting">Subhosting WebGL Hero</a></li>
			<li><a href="/herosvg">HeroSvg (Beach Scene)</a></li>
		</ul>
	</nav>

	<section>
		<h2>Deno Logo</h2>
		<div class="logo-row">
			<div class="logo-card light">
				<DenoLogo class="logo" />
				<span>Light background</span>
			</div>
			<div class="logo-card dark">
				<DenoLogo class="logo" variant="dark" />
				<span>Dark background</span>
			</div>
		</div>
	</section>

	<section>
		<h2>Deno Deploy Logo</h2>
		<div class="logo-row">
			<div class="logo-card light wide">
				<DenoDeployLogo />
				<span>Light background</span>
			</div>
			<div class="logo-card dark wide">
				<DenoDeployLogo variant="dark" />
				<span>Dark background</span>
			</div>
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

	nav {
		margin-bottom: 3rem;
	}

	nav ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 1.5rem;
	}

	nav a {
		color: #07c;
		text-decoration: underline;
		font-size: 1.125rem;
	}

	section {
		margin-bottom: 3rem;
	}

	.logo-row {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.logo-card {
		padding: 2rem;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.logo-card.dark {
		background: #002633;
		color: #f8f9fc;
	}

	.logo-card.light {
		background: #f3f4f6;
		color: #002633;
	}

	.logo-card :global(.logo) {
		width: 80px;
		height: 80px;
	}

	.logo-card.wide {
		flex: 1;
		min-width: 280px;
	}

	.logo-card span {
		font-size: 0.875rem;
		opacity: 0.7;
	}
</style>
