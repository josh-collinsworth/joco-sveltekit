<script context=module>
  export async function load({page}) {
    const Post = await import(`./posts/${page.params.slug}.md`)

    return {
      props: {
        Post: Post.default,
        meta: Post.metadata
      }
    }
  }
</script>

<script>
  import TagList from '$lib/components/tags/TagList.svelte'
  import Tag from '$lib/components/tags/Tag.svelte'
	import prism from '$lib/assets/js/prism.js'
  import { onMount } from 'svelte'

  export let Post, meta

  onMount(() => {
		prism.init()
	})
</script>


<svelte:head>
  <title>{meta.title}</title>
</svelte:head>

<template>
  <img src="/images/post_images/{meta.coverImage}" alt="" />

  <h1>{ meta.title }</h1>
  
  <Post />

  <hr>

  {#if meta.categories}
    <aside>
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
    </aside>
  {/if}

  <ul>
    <li>
      <a href="/contact">Send me a note about this post</a>
    </li>
    <li>
      <a href="/blog">Back to all posts</a>
    </li>
  </ul>
</template>