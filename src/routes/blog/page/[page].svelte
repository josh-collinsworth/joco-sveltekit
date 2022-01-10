<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit';

  export const load = async ({ fetch, params }): Promise<LoadOutput> => {
    const page = params.page
    let offset = 0

    for (let i = 1; i < page; i++) {
      offset += 10
    }

    const res = await fetch(`/api/posts.json?offset=${offset}`);
    const { posts } = await res.json()

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
  }
</script>


<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import PostList from '$lib/components/posts/PostList.svelte'
  import Main from '$lib/components/Main.svelte'
  import Pagination from '$lib/components/Pagination.svelte'

  export let posts: Post[]
  export let page: number
  export let totalPosts: number

  $: lowerBound = page * 10 - 10 || 1
  $: upperBound = Math.min(page * 10, totalPosts)
</script>


<Main>
  <h1 class="h2">Blog, Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
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