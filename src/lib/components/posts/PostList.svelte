<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import PostPreview from './PostPreview.svelte'
  
  export let posts: Post[]
  export let external: boolean = false
</script>


<ul class="no-bullets post-list">
  {#each posts as post}
    <PostPreview {post} {external} />
  {/each}
</ul>


<style lang="scss">
  .post-list {
    padding: 0;
    list-style-type: none;
    margin: 0 0 calc(var(--rhythm) * 4);
    max-width: var(--max-width);

    @media (min-width: $md) {
      max-width: 60rem;
    }
  }
</style>