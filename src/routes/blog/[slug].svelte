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
  export let Post, meta
</script>

<svelte:head>
  <title>{meta.title}</title>
</svelte:head>

<main>
  <img src="/images/post_images/{meta.coverImage}" alt="" />

  <h1>{ meta.title }</h1>
  
  <Post />

  <hr>

  <a href="/blog">Back to blog posts</a>
</main>