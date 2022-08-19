<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
  $: ({ Resume } = data)

  import Main from '$lib/components/Main.svelte'

  // export let Resume: SvelteComponent
</script>


<svelte:head>
  <title>Josh Collinsworth | Résumé</title>
	<meta data-key="description" name="description" content="My professional resume">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
  <meta name="robots" content="noindex,nofollow">
</svelte:head>


<Main>
  <div class="resume compressed-content">
    <svelte:component this={Resume} />
  </div>
</Main>


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