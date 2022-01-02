<script lang="ts" context="module">
  import type { ErrorLoad } from '@sveltejs/kit';

  export const load: ErrorLoad = ({ error, status }) => {
      return { props: { error, status } };
  };
</script>


<script>
  export let status
  export let error
</script>


<h2>{status}</h2>

<p class="subhead">{error.message}</p>

<p><strong>Ope!</strong> Maybe try these links?</p>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>


<style lang="scss">
  .subhead {
    font-size: 1.4rem;
    margin: 0 0 4rem;
    max-width: 20em;
    line-height: 1.2;
    font-family: var(--heading-font);
  }
</style>