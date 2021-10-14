<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import PostPreview from './PostPreview.svelte'
  
  export let posts: Post[]
  export let external: boolean = false
</script>


<ul class="no-bullets">
  {#each posts as post}
    <PostPreview {post} {external} />
  {/each}
</ul>


<style lang="scss">
  ul {
    padding: 0;
    list-style-type: none;
    margin: calc(var(--rhythm) * 2) 0 calc(var(--rhythm) * 4);
    max-width: var(--max-width);

    @media (min-width: $md) {
      max-width: 60rem;
    }
  }
</style>