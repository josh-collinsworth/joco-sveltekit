<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import TagList from '$lib/components/tags/TagList.svelte'
  import Tag from '$lib/components/tags/Tag.svelte'
  
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

        <TagList>
          {#each post.categories as category}
            <Tag
              to="/blog/category/{category}/"
            >
              { category }
            </Tag>
          {/each}
        </TagList>

      </article>
    </li>
  {/each}
</ul>


<style lang="scss">
@import '../assets/scss/_vars';

ul {
  padding: 0;
  list-style-type: none;
  margin-top: 1rem;
  
  article {
    margin-bottom: 1rem;
    padding: 1.5rem;
    box-shadow: 0.25rem 0.25rem 4px 0 rgba(var(--lightGrayRGB), 0.2);
    border-radius: 8px;
    border: 1px solid var(--lightGray);
    transition: .2s;
    transform-origin: bottom left;

    @media (min-width: $narrow) {
      margin-bottom: 2rem;
    }

    .prefers-dark & {
      box-shadow: 0.25rem 0.25rem 4px 0 rgba(0, 0, 0, 0.2);
      background: rgba(var(--lightGrayRGB), 0.05);
      border: none;
    }
    
    h3 {
      margin: 0 0 2rem;
      line-height: 1.4;
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