<script context="module" lang="ts">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

  // import type { LoadOutput } from '@sveltejs/kit'
  // import { fetchPosts } from '$lib/assets/js/utils'

  // export const load = async ({ fetch, params }): Promise<LoadOutput> => {
  //   try {
  //     const page = params.page ? params.page : 1

  //     if (page <= 1) {
  //       return {
  //         status: 301,
  //         redirect: '/blog'
  //       }
  //     }
  //     
  //     let offset = page * 10 - 10
  //     
  //     const posts = await fetchPosts({ offset, limit: 10 })
  //     
  //     const count = await fetch(`/api/posts/count.json`)
  //     const { total } = await count.json()
  //     
  //     return {
  //       status: 200,
  //       props: {
  //         posts,
  //         page,
  //         totalPosts: total
  //       }
  //     }
  //   } catch(error) {
  //     return {
  //       status: 404,
  //       error: error.message
  //     }
  //   }
  // }
</script>


<script lang="ts">
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
  // Suggestion (check code before using, and possibly convert to data.X access later):
  // import type { PageData } from './$types';
  // export let data: PageData;
  // $: ({ posts, page, totalPosts } = data);

  import type Post from '$lib/types/post'
  import PostList from '$lib/components/posts/PostList.svelte'
  import Main from '$lib/components/Main.svelte'
  import Pagination from '$lib/components/Pagination.svelte'

  export let posts: Post[]
  export let page: number = 1
  export let totalPosts: number

  $: lowerBound = page * 10 - 9 || 1
  $: upperBound = Math.min(page * 10, totalPosts)
</script>


<svelte:head>
	<title>Josh Collinsworth | Blog page {page}</title>
	<meta data-key="description" name="description" content="Past posts on the web, development, and design.">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<Main>
  <h1 class="h2">Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
  <Pagination currentPage={page} {totalPosts} />
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