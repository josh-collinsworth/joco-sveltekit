<script context="module" lang="ts">
  export async function load({page}) {
    try {
      const Post = await import(`./posts/${page.params.post}.md`)
      
      return {
        props: {
          Post: Post.default,
          meta: Post.metadata,
        }
      }
    } catch(error) {
      return {
        status: 404,
        error: error.message
      }
    }
  }
</script>

<script>
  import TableOfContents from '$lib/components/posts/TableOfContents.svelte'
  import TagList from '$lib/components/tags/TagList.svelte'
  import Tag from '$lib/components/tags/Tag.svelte'
  import { onMount } from 'svelte'
  
  import '$lib/assets/scss/code.scss'

  export let Post, meta

  const wrapTablesInScrollableDivs = () => {
    /**
     * This is super hacky and I don't like it, but it lets 
     * tables scroll horizontally without clobbering accessibility, 
     * so here it is.
     */
    const tables = document.querySelectorAll('.post table')

    tables.forEach(table => {
      let newHTML = `<div class="table">`
      newHTML += table.outerHTML
      newHTML += `</div>`

      table.insertAdjacentHTML('afterend', newHTML)
      table.remove()
    })
  }

  onMount(() => {
    wrapTablesInScrollableDivs()
  })
</script>


<svelte:head>
  <title>{meta.title}</title>
  <meta data-key="description" name="description" content="{meta.excerpt}">
</svelte:head>

<article class="post">
  <img
    class="cover-image"
    src="/images/post_images/{meta.coverImage}"
    style="aspect-ratio: {meta.coverRatio}"
    alt=""
  />

  <h1>{ meta.title }</h1>

  
  <div class="meta">
    <b>Published:</b> { meta.date }
    <br>
    <b>Updated:</b> { meta.updated }
  </div>

  <TableOfContents />
  
  <svelte:component this={Post} />

  <hr>

  <aside>
    {#if meta.categories}
      <h2 class="h4">Posted in: </h2>
      <TagList>
        {#each meta.categories as category}
          <Tag
            to="/blog/category/{category}/"
          >
            { category }
          </Tag>
        {/each}
      </TagList>
    {/if}

    <ul>
      <li>
        <a href="/contact">Send me a note about this post</a>
      </li>
      <li>
        <a href="/blog">Back to all posts</a>
      </li>
    </ul>
  </aside>
</article>


<style lang="scss" global>
  @font-face {
    font-family: 'MonoLisa';
    src: url('/fonts/monolisa-regular-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  .post {
    .cover-image {
      margin: 0;
    }

    h1 {
      margin: 0;
    }
    
    .meta + p:first-of-type::first-letter,
    .toc + p:first-of-type::first-letter,
    > hr + p:first-letter {
      font-size: 3.4em;
      font-family: var(--heading-font);
      float: left;
      line-height: 0.7em;
      margin: 0.5rem 0.4rem 0 0;
      color: inherit;
    }
    
    .meta {
      font-size: 0.7rem;
      line-height: 1.4;
      font-style: italic;
      margin: 1rem 0 2rem;
      
      b {
        text-transform: uppercase;
        font-style: normal;
      }
    }
  }
</style>