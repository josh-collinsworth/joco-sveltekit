<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import Tag from '../tags/Tag.svelte'
  import TagList from '../tags/TagList.svelte'
  import { isLoading } from '$lib/assets/js/store'

  export let external: boolean = false
  export let post: Post

  const startLoading = (): void => {
    isLoading.set(true)
  }

  let slugPath: string
  $: slugPath = external ? '' : '/blog/'

  let computedURL: string
  $: computedURL = slugPath + post.slug
</script>

<li>
  <article>
    <a on:click={startLoading} href={computedURL} sveltekit:prefetch>
      <img src="/images/post_images/{post.coverImage}" alt="" loading="lazy" />
    </a>

    <h3>
      <a on:click={startLoading} href={computedURL} sveltekit:prefetch>
        {post.title}
      </a>
    </h3>

    {#if post.subtitle}
      <p class="subtitle">{post.subtitle}</p>
    {/if}

    <p class="excerpt">
      {post.excerpt}
      <a on:click={startLoading} href="{computedURL}" sveltekit:prefetch>
        Read&nbsp;more…
      </a>
    </p>

    {#if post.categories && !external}
      <TagList>
        {#each post.categories as category}
          <Tag to="/blog/category/{category}/" on:click={startLoading}>
            { category }
          </Tag>
        {/each}
      </TagList>
    {/if}
  </article>
</li>


<style lang="scss">
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
</style>