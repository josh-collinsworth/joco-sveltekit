<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  
  export let posts: Post[]
  export let external: boolean = false
  
  let imageRoute: string
  $: imageRoute = external ? '' : '/images/post_images/'

  let slugPath: string
  $: slugPath = external ? '' : '/blog/'
</script>


<ul>
  {#each posts as post}
    <li>
      <article>
        <a href={slugPath + post.slug}>
          <img src="{imageRoute + post.coverImage}" alt="" loading="lazy" />
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
  margin-top: 1rem;
  
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