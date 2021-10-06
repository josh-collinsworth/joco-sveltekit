<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import Tag from '../tags/Tag.svelte'
  import TagList from '../tags/TagList.svelte'
  import ExternalLink from '../icons/ExternalLink.svelte'
  import { isLoading } from '$lib/data/store'

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
  <article class="post-preview">
    <a on:click={startLoading} href={computedURL} sveltekit:prefetch class="image-link">
      <img
        src="/images/post_images/{post.coverImage}"
        style="aspect-ratio: {post.coverRatio}"
        alt="Preview image for {post.title}"
        loading="lazy"
      />
    </a>

    <div class="article-info">
      <h2 class="h3">
        <a on:click={startLoading} href={computedURL} sveltekit:prefetch>
          {post.title}
          {#if external}
            <ExternalLink />
          {/if}
        </a>
      </h2>
      
      {#if post.subtitle}
        <p class="subtitle">{post.subtitle}</p>
      {/if}
      
      <p class="excerpt">
        {post.excerpt}
        <a on:click={startLoading} href="{computedURL}" sveltekit:prefetch>
          {#if external}
            Read more on {post.subtitle}
            <ExternalLink />
          {:else}
            Read&nbsp;more…
          {/if}
        </a>
      </p>
      
      {#if post.categories}
        <TagList>
          {#each post.categories as category}
          <Tag to="/blog/category/{category}/" on:click={startLoading}>
            { category }
          </Tag>
          {/each}
        </TagList>
      {/if}
    </div>
  </article>
</li>


<style lang="scss">
  li {
    margin: 0 0 2rem;

    @media (min-width: $md) {
      margin: 0;
    }
  }
  
  .post-preview {
    box-shadow: 0.25rem 0.25rem 0 0 hsla(var(--lightGrayHSL), 0.2);
    border: 1px solid var(--lightGray);
    transition: .2s;
    transform-origin: bottom left;
    display: block;

    .article-info {
      --padding-unit: 1.5rem;

      padding: var(--padding-unit) var(--padding-unit) calc(var(--padding-unit) * 1.5);
      max-width: 32rem;
    }

    h2 {
      margin: 0;
      line-height: 1.2;
      border: 0;
      padding: 0;
      font-size: 1.5rem;
    }

    .image-link {
      display: block;
      width: 100%;
      line-height: 1;

      img {
        margin: 0;
      }
    }
    
    .subtitle,
    .excerpt a {
      font-weight: bold;
      text-transform: uppercase;
      font-family: var(--accent-font);
      font-style: normal;
      font-size: 0.65rem;
      margin: 0.5rem 0 0;
    }
  
    .excerpt {
      font-style: italic;
      margin: 1rem 0 1.5rem;
      font-size: 0.9rem;
      line-height: 1.5;
  
      &:last-child {
        margin-bottom: 0;
      }

      a {
        display: block;
        margin-top: 1rem;
      }
    }
  }
  
</style>