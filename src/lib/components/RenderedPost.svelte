<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'

  import TagList from '$lib/components/tags/TagList.svelte'
  import Tag from '$lib/components/tags/Tag.svelte'
  import Bio from '$lib/components/posts/Bio.svelte'
  import Comments from '$lib/components/Comments.svelte'
  import Main from '$lib/components/Main.svelte'
  import { appendScriptToHead, readableDate } from '$lib/assets/js/utils'
  import { onMount, SvelteComponent } from 'svelte'

  export let PostContent: SvelteComponent 
  export let meta: Post

  let imagePath: string
  $: imagePath = `/images/post_images/${meta.coverImage}`

  const wrapTablesInScrollableDivs = (): void => {
    /**
     * This is super hacky and I don't like it, but it lets 
     * tables scroll horizontally without clobbering accessibility, 
     * so here it is.
     */
    const tables = document.querySelectorAll('.post table')

    tables.forEach(table => {
      let newHTML = `<div class="table-outer"><div class="table">`
      newHTML += table.outerHTML
      newHTML += `</div></div>`

      table.insertAdjacentHTML('afterend', newHTML)
      table.remove()
    })
  }

  const loadEmbeddedTweets = (): void => {
    /**
     * This is necessary because prefetching blog posts prevents
     * the Twitter widget script from loading. Plus, there isn't
     * really a good way to embed scripts in Markdown to begin
     * with. So, this does the job just fine. All I need to do
     * is paste the Twitter embed code for a tweet, and remove the
     * script tag from it.
     */
    const allTweets = document.getElementsByClassName('twitter-tweet')

    if (allTweets.length) {
      appendScriptToHead('https://platform.twitter.com/widgets.js')
    }
  }

  onMount((): void => {
    wrapTablesInScrollableDivs()
    loadEmbeddedTweets()
  })
</script>


<svelte:head>
  <title>{meta.title} - Josh Collinsworth blog</title>
  <meta data-key="description" name="description" content="{meta.excerpt}">
  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
  <meta name="twitter:title" content={meta.title} />
  <meta property="og:description" content={meta.excerpt} />
  <meta name="twitter:description" content={meta.excerpt} />
  <meta property="og:image" content="https://joshcollinsworth.com{imagePath}" />
  <meta property="og:image:width" content={meta.coverWidth} />
  <meta property="og:image:height" content={meta.coverHeight} />
  <meta name="twitter:image" content="https://joshcollinsworth.com{imagePath}" />
  <meta property="og:url" content="https://joshcollinsworth.com/blog/{meta.slug}/" />
</svelte:head>


<Main>
  <article class="post compressed-content">
    <img
      class="cover-image"
      src="{imagePath}"
      alt=""
      style="aspect-ratio: {meta.coverWidth} / {meta.coverHeight}"
      width={meta.coverWidth}
      height={meta.coverHeight}
    />

    <h1>{ meta.title }</h1>

    
    <div class="meta">
      <b>Published:</b> { readableDate(meta.date) }
      <br>
      <b>Updated:</b> { readableDate(meta.updated) }
    </div>
    
    <svelte:component this={PostContent} />

    <aside class="post-footer">
      <Bio currentPage={meta.slug} />

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
    </aside>

    <Comments />
  </article>
</Main>


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
      border: 1px solid hsla(var(--darkGrayHSL), 1);
    }
    
    .meta + p::first-letter,
    .toc-wrap + p::first-letter,
    .meta + .side-note + p::first-letter,
    .toc-wrap + .side-note + p::first-letter {
      font-size: 3.6em;
      float: left;
      line-height: 0.7em;
      margin: 0.45rem 0.4rem 0 0;
      color: inherit;
      font-weight: bold;
    }
    
    .meta {
      font-size: 0.8rem;
      line-height: 1.6;
      margin: var(--halfNote) 0 var(--wholeNote);
      width: max-content;
      padding: 0.5em 0; 
      font-family: var(--headingFont);
      border-top: 2px solid var(--lightGray);
      
      b {
        text-transform: uppercase;
        font-style: normal;
        font-size: 0.7rem;
      }
    }

    .post-footer {   
      margin: 0 0 var(--halfNote);

      .h4 {
        margin: 0 0 calc(var(--quarterNote) / 2);

        &::before {
          display: none;
        }
      }
    }

    .post-links {
      margin: var(--halfNote) 0;
      font-family: var(--headingFont);

      a {
        margin-left: 1ch;
      }

      &__contact::marker {
        content: '📩';
      }

      &__blog::marker {
        content: '🔙';
      }
    }

    .section-heading-image {
      margin-top: var(--dottedWholeNote) ;

      & + * {
        margin-top: var(--quarterNote);
      }
    }
  }

  :global(.sidebar) {
    margin-inline: auto !important;
  }
</style>