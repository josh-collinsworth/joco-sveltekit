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
import Accordion from '$lib/components/Accordion.svelte';


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
.intro {
  width: 100%;

  @media (min-width: $xs) {
    width: 36rem;
  }

  h2 {
    font-size: 3.5rem;
    font-family: var(--body-font);
    margin: 0;
  }

  .subhead {
    font-size: 1.5rem;
    margin: 0.25em 0 4rem;
    line-height: 1.2;
    font-style: italic;

    @media (min-width: $md) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-family: var(--accent-font);
    font-weight: bold;
    margin-top: 3rem;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    line-height: 1;
    border: 0;
  }

  ul {
    margin-top: 4rem;
  }
}	
</style>