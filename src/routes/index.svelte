<script context="module" lang="ts">
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
	<meta data-key="description" name="description" content="Front-end developer, designer, teacher and writer">
</svelte:head>

<div class="intro">
	<svelte:component this={Homepage} />
</div>


<style lang="scss" global>
:root {
  --max-width: 36rem;
}

.intro {

  h2 {
    font-size: 3.4rem;
    margin: 0;
  }

  .subhead {
    font-size: 1.5rem;
    font-style: italic;
    margin: 0.25em 0 4rem;
    line-height: 1.2;
  }

  h3 {
    font-family: var(--body-font);
    font-weight: bold;
    margin-top: 3rem;
    margin-bottom: 0.5rem;
		padding: 0;
    font-size: 1.2rem;
    line-height: 1;
    border: 0;
  }

  ul {
    margin-top: 4rem;
  }
}	
</style>