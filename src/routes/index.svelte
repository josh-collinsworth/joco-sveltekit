<script context="module">
	export async function load() {
		const Homepage = await import('$lib/content/homepage.md')
		
		return {
			props: {
				Homepage: Homepage.default
			}
		}
	}
</script>

<script lang="ts">
	export let Homepage
</script>


<svelte:head>
	<title>Josh Collinsworth</title>
	<meta data-key="description" name="description" content="Front-end developer and designer">
</svelte:head>

<div class="intro">
	<svelte:component this={Homepage} />
</div>


<style lang="scss" global>
:root {
  --max-width: 36rem;
}

.intro {
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr;

  p, h1 {
    margin: 0;
  }

  h2 {
    font-family: var(--body-font);
    font-weight: bold;
    margin-top: 2em;
    margin-bottom: 0;
		padding: 0;
    font-size: 1.2rem;
    line-height: 1;
    border: 0;
  }
}	
</style>