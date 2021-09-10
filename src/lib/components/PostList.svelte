<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import TagList from '$lib/components/tags/TagList.svelte'
  import Tag from '$lib/components/tags/Tag.svelte'
  import { isLoading } from '$lib/assets/js/store'
  
  export let posts: Post[]
  export let external: boolean = false
  
  let slugPath: string
  $: slugPath = external ? '' : '/blog/'
</script>


<ul>
  {#each posts as post}
    <li>
      <article>
        <a on:click={() => isLoading.set(true)} href={slugPath + post.slug}>
          <img src="/images/post_images/{post.coverImage}" alt="" loading="lazy" />
          <h3>{post.title}</h3>
        </a>

        {#if post.subtitle}
          <p class="subtitle">{post.subtitle}</p>
        {/if}

        <p class="excerpt">
          {post.excerpt}
          <a on:click={() => isLoading.set(true)} href="{slugPath + post.slug}">Read&nbsp;more…</a>
        </p>

        {#if post.categories && !external}
          <TagList>
            {#each post.categories as category}
              <Tag
                to="/blog/category/{category}/"
              >
                { category }
              </Tag>
            {/each}
          </TagList>
        {/if}
      </article>
    </li>
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

  li {
    margin: 0;
  }
  
  article {
    --padding-unit: 1.5rem;

    padding: var(--padding-unit) var(--padding-unit) calc(var(--padding-unit) * 1.5);
    box-shadow: 0.25rem 0.25rem 0 0 rgba(var(--lightGrayRGB), 0.2);
    border-radius: 0;
    border: 1px solid var(--lightGray);
    transition: .2s;
    transform-origin: bottom left;

    .prefers-dark & {
      box-shadow: 0.25rem 0.25rem 0 0 rgba(0, 0, 0, 0.2);
      background: rgba(var(--lightGrayRGB), 0.05);
      border: none;
    }
  }
  
  h3 {
    margin: 0;
    line-height: 1.2;
    border: 0;
    padding: 0;
  }
  
  img {
    width: calc(100% + (var(--padding-unit) * 2));
    max-width: unset;
    margin: calc(var(--padding-unit) * -1) 0 1rem calc(var(--padding-unit) * -1);
  }
  
  .subtitle {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.65rem;
    margin: 0.5rem 0 0;
  }

  .excerpt {
    font-style: italic;
    margin: 1.5rem 0;
    font-size: 0.9rem;
    line-height: 1.5;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>