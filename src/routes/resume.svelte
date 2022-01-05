<script context="module" lang="ts">
  import type { SvelteComponent } from 'svelte'
  import type { LoadOutput } from '@sveltejs/kit'

  export const load = async (): Promise<LoadOutput> => {
		const resume: SvelteComponent = await import('$lib/content/resume.md')
		
		return {
			props: {
				Resume: resume.default
			}
		}
	}
</script>

<script lang="ts">
  export let Resume: SvelteComponent
</script>


<svelte:head>
  <title>Josh Collinsworth | Résumé</title>
	<meta data-key="description" name="description" content="My professional resume">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
  <meta name="robots" content="noindex,nofollow">
</svelte:head>

<div class="resume compressed-content">
	<svelte:component this={Resume} />
</div>


<style lang="scss" global>
  .resume {

    h3 {
      margin-bottom: calc(var(--quarterNote) / 2);

      ~ p {
        margin: 0;
      }

      a {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-decoration-color: var(--yellow);
      }
    }
  }
</style>