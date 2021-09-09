<script context=module>
  export async function load({page}) {
    try {
      const Post = await import(`./posts/${page.params.post}.md`)
      
      return {
        props: {
          Post: Post.default,
          meta: Post.metadata
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
  import TagList from '$lib/components/tags/TagList.svelte'
  import Tag from '$lib/components/tags/Tag.svelte'
  
  import '$lib/assets/scss/code.scss'

  export let Post, meta
</script>


<svelte:head>
  <title>{meta.title}</title>
</svelte:head>

<template>
  <img src="/images/post_images/{meta.coverImage}" alt="" />

  <h1>{ meta.title }</h1>
  
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


</template>

<style global>
@font-face {
	font-family: 'MonoLisa';
	src: url('/fonts/monolisa-regular-webfont.woff2') format('woff2');
	font-weight: normal;
  font-style: normal;
  font-display: swap;
}

aside h2 {
  margin-top: 1rem;
  border: 0;
}

main > p:first-of-type::first-letter,
main > hr + p:first-letter {
	font-size: 3.4em;
	font-family: var(--heading-font);
	float: left;
	line-height: 0.7em;
	margin: 0.5rem 0.4rem 0 0;
	color: inherit;
}
</style>