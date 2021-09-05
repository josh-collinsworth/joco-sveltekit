<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  
  export let posts: Post[]
  export let external: boolean = false
  
  let imageRoute: string|null
  $: imageRoute = external ? '' : '/images/post_images/'
</script>


<ul>
  {#each posts as post}
    <li>
      <article>
        <a href={'/blog/' + post.slug}>
          <img src="{imageRoute}{post.coverImage}" alt="" loading="lazy" />
          <h3>{post.title}</h3>
        </a>
        <p>{post.excerpt}</p>
      </article>
    </li>
  {/each}
</ul>


<style lang="scss">
ul {
  padding: 0;
  list-style-type: none;
  
  article {
    margin-bottom: 8rem;
    
    h3 {
      margin: 0;
      border: 0;
      padding: 0;
    }
    
    img {
      margin: 0 0 .5rem;
    }
    
    p {
      font-style: italic;
    }
  }
}
</style>