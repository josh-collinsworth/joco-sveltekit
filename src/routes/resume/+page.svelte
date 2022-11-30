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

  hr {
    display: none;
  }

  @media (min-width: vars.$lg) {
    display: grid;
    grid-template-columns: 12rem 1fr;
    gap: 0 var(--halfNote);

    &.compressed-content {
      max-width: 52rem;
    }

    hr {
      display: block;
      opacity: 0;
      margin: var(--halfNote) 0;
    }

    * {
      grid-column: 2 / -1;
    }

    h2 {
      grid-column: 1 / 2;
      margin: 0;
      padding-top: 0;
      position: sticky;
      top: var(--halfNote);
      background: var(--paper);

      + h3 {
        margin-top: 0;
      }

      &::before {
        top: calc(var(--wholeNote) * -1);
        position: absolute;
        width: 100%;
        background: linear-gradient(to top, var(--paper), hsla(var(--paperHSL), 0));
        height: var(--wholeNote);
        z-index: 1;
      }
    }

    ul {
      margin: 0;
    }

    p + ul {
      margin-top: var(--quarterNote);
    }
  }
}
</style>