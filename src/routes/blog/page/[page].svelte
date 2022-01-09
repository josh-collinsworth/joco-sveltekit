<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit';

  export const load = async ({ fetch, params }): Promise<LoadOutput> => {
    const page = params.page
    let offset = 0

    for (let i = 1; i < page; i++) {
      offset += 10
    }

    const res = await fetch(`/api/posts.json?offset=${offset}`);
    const posts = await res.json()

    return {
      status: 200,
      props: {
        ...posts
      }
    }
  }
</script>


<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import PostList from '$lib/components/posts/PostList.svelte'
  import Main from '$lib/components/Main.svelte'

  export let posts: Post[]
</script>


<Main>
  <PostList {posts} />
</Main>


