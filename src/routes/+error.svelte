<script lang="ts" context="module">
  import type { ErrorLoad } from '@sveltejs/kit';

  export const load: ErrorLoad = ({ error, status }) => {
      return { props: { error, status } };
  };
</script>


<script lang="ts">
  import Main from '$lib/components/Main.svelte'

  export let status: number
  export let error: Error
</script>


<Main>
  <h2>{status}</h2>
  
  <p class="subhead">{error.message}</p>
  
  <p><strong>Ope!</strong> Maybe try these links?</p>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contact?from_page=error">Contact</a></li>
  </ul>
</Main>


<style lang="scss">
  .subhead {
    font-size: 1.4rem;
    margin: 0 0 4rem;
    max-width: 20em;
    line-height: 1.2;
    font-family: var(--headingFont);
  }
</style>