<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit'
  import { fetchPosts } from '$lib/assets/js/utils'

  export const load = async ({ fetch, params }): Promise<LoadOutput> => {
    try {
      const page = params.page ? params.page : 1
      let offset = 0
      
      for (let i = 1; i < page; i++) {
        offset += 10
      }
      
      const posts = await fetchPosts({ offset })
      
      const count = await fetch(`/api/posts/count.json`)
      const { total } = await count.json()
      
      return {
        status: 200,
        props: {
          posts,
          page,
          totalPosts: total
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


<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import PostList from '$lib/components/posts/PostList.svelte'
  import Main from '$lib/components/Main.svelte'
  import Pagination from '$lib/components/Pagination.svelte'

  export let posts: Post[]
  export let page: number = 1
  export let totalPosts: number

  $: lowerBound = page * 10 - 10 || 1
  $: upperBound = Math.min(page * 10, totalPosts)
</script>


<svelte:head>
	<title>Josh Collinsworth | Blog page {page}</title>
	<meta data-key="description" name="description" content="Past posts on the web, development, and design.">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<Main>
  <h1 class="h2">Blog, posts {lowerBound}–{upperBound} of {totalPosts}</h1>
  <PostList {posts} />
  <Pagination currentPage={page} {totalPosts} />
</Main>


<style lang="scss">
  h1.h2 {
    font-size: 1.3rem;
    padding: 0;
    margin: 0 0 var(--halfNote);

    &::before {
      display: none;
    }
  }
</style>