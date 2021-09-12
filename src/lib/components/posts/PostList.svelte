<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import PostPreview from './PostPreview.svelte'
  
  export let posts: Post[]
  export let external: boolean = false
</script>


<ul>
  {#each posts as post}
    <PostPreview {post} {external} />
  {/each}
</ul>


<style lang="scss">
  ul {
    padding: 0;
    list-style-type: none;
    margin: 2rem 0 4rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;

    @media (min-width: $wide) {
      grid-gap: 1.5rem;
    }
  }
</style>