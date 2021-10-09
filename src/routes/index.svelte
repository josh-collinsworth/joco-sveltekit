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
  import type { SvelteComponentTyped } from 'svelte'

  export let Homepage: SvelteComponentTyped
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
    margin-bottom: var(--rhythm);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }

  .subhead {
    font-size: 1.3rem;
    margin: 0 0 4rem;
    max-width: 20em;
    line-height: 1.2;
    font-family: var(--heading-font);
  }

  ul {
    margin-top: 4rem;
    font-family: var(--heading-font);
  }
}	
</style>