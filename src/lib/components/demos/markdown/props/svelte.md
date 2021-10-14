```svelte
<!-- PageHeading.svelte -->
<script>
  export let pageTitle
  export let pageSubtitle = ''
</script>

<h1>
  {pageTitle}
  {#if pageSubtitle}
    <small>{pageSubtitle}</small>
  {/if}
</h1>
```