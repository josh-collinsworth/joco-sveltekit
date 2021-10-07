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
    margin: 2rem 0 4rem;
    max-width: var(--max-width);

    @media (min-width: $md) {
      max-width: 60rem;
    }
  }
</style>