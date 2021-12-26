<script>
  import TagList from '$lib/components/tags/TagList.svelte'
  import Tag from '$lib/components/tags/Tag.svelte'
  import Bio from '$lib/components/posts/Bio.svelte'
  import Comments from '$lib/components/Comments.svelte'
  import { appendScriptToHead, readableDate } from '$lib/assets/js/utils'
  import { onMount } from 'svelte'
  
  import '$lib/assets/scss/post-styles.scss'
  import '$lib/assets/scss/code.scss'

  export let coverImage
  export let title
  export let excerpt
  export let coverWidth
  export let coverHeight
  export let slug
  export let date
  export let updated
  export let categories

  $: imagePath = `/images/post_images/${coverImage}`

  const wrapTablesInScrollableDivs = () => {
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

  const loadEmbeddedTweets = () => {
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

  onMount(() => {
    wrapTablesInScrollableDivs()
    loadEmbeddedTweets()
  })
</script>


<svelte:head>
  <title>{title} - Josh Collinsworth blog</title>
  <meta data-key="description" name="description" content="{excerpt}">
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta name="twitter:description" content={excerpt} />
  <meta property="og:image" content="https://joshcollinsworth.com{imagePath}" />
  <meta property="og:image:width" content={coverWidth} />
  <meta property="og:image:height" content={coverHeight} />
  <meta name="twitter:image" content="https://joshcollinsworth.com{imagePath}" />
  <meta property="og:url" content="https://joshcollinsworth.com/blog/{slug}/" />
</svelte:head>

<article class="post compressed-content">
  <img
    class="cover-image"
    src="{imagePath}"
    alt=""
    style="aspect-ratio: {coverWidth} / {coverHeight}"
    width={coverWidth}
    height={coverHeight}
  />

  <h1>{ title }</h1>

  <div class="meta">
    <b>Published:</b> { readableDate(date) }
    <br>
    <b>Updated:</b> { readableDate(updated) }
  </div>
  
  <slot />

  <aside class="post-footer">
    <Bio />

    {#if categories}
      <h2 class="h4">Posted in: </h2>
      <TagList>
        {#each categories as category}
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