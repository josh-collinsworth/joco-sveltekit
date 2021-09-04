<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post.js'
  
  export let posts: Post[]
</script>


<ul>
  {#each posts as post}
    <li>
      <article>
        <a href={'/blog/' + post.slug}>
          <img src="/images/post_images/{post.coverImage}" alt="" loading="lazy" />
          <h2>{post.title}</h2>
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
    
    h2 {
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