<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit'

	export const load = async ({ fetch, params }): Promise<LoadOutput> => {
    const { category } = params
    //TODO: maybe add a way to fetch with query parameter to avoid filtering?
		const res = await fetch(`/api/posts.json`)
		let { posts } = await res.json()

    const matchingPosts = posts
      .filter(post => post.categories.includes(category))

		return {
			props: { 
        posts: matchingPosts,
        category
      }
		}
	}
</script>

<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import PostList from '$lib/components/posts/PostList.svelte'

  export let posts: Post[]
  export let category: string
</script>


<svelte:head>
  <title>Blog | Category: {category}</title>
  <meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<h1 class="h2">Category: <b>{ category }</b></h1>

<PostList {posts} />  


<style lang="scss">
  h1.h2 {
    margin: 0 0 var(--wholeNote);
  }
</style>