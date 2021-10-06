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
.intro {
  width: 100%;

  h2 {
    margin: 0;
  }

  .subhead {
    font-size: 1.2rem;
    margin: 0.25em 0 4rem;
    line-height: 1.2;
    font-family: var(--accent-font);
  }

  h3 {
    font-family: var(--accent-font);
    font-weight: normal;
    margin-top: 4rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    line-height: 1;
    border: 0;
  }

  ul {
    margin-top: 4rem;
  }
}	
</style>