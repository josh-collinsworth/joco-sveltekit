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
        style="
          aspect-ratio: {post.coverWidth} / {post.coverHeight};
          width: {post.coverWidth};
          height: {post.coverHeight}
        "
        alt="Preview image for {post.title}"
        loading="lazy"
      />
    </a>

    <div class="article-info">
      <h2 class="h3">
        <a on:click={startLoading} href={computedURL} sveltekit:prefetch>
          {#if external}
            {post.title}<ExternalLink />
          {:else}
            {post.title}
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
    transition: .2s;
    transform-origin: bottom left;
    display: block;

    @media (min-width: $md) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: calc(var(--rhythm) * 2);
      margin-bottom: calc(var(--rhythm) * 5);
    }

    .article-info {
      padding: 1.5rem 0;
      max-width: 32rem;

      @media (min-width: $md) {
        padding: 0;
      }
    }

    h2 {
      margin: 0;
      line-height: 1.2;
      border: 0;
      padding: 0;
      font-size: 1.5rem;

      &::before {
        display: none;
      }
    }

    .image-link {
      display: block;
      width: 100%;
      line-height: 1;

      img {
        margin: 0;
        width: auto;
        max-width: 100%;
        border: 1px solid hsla(var(--darkGrayHSL), 1);
      }
    }
    
    .subtitle,
    .excerpt a {
      font-weight: bold;
      text-transform: uppercase;
      font-family: var(--heading-font);
      font-style: normal;
      font-size: 0.65rem;
      margin: 0.5rem 0 0;
    }
  
    .excerpt {
      font-style: italic;
      margin: var(--rhythm) 0 1.5rem;
      font-size: 0.9rem;
      line-height: 1.5;
  
      &:last-child {
        margin-bottom: 0;
      }

      a {
        display: block;
        margin-top: var(--rhythm);
      }
    }
  }
  
</style>