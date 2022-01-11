<script context="module" lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import type { LoadOutput } from '@sveltejs/kit'
  import type { SvelteComponent } from 'svelte';

  export const load = async ({ params }): Promise<LoadOutput> => {
    // Ensures we don't let the route be handled by this file and kick it over to the `/page` directory instead
    if (params.post == 'page') {
      return {
        status: 301,
        redirect: '/blog'
      }
    }
    try {  
      const post: SvelteComponent = await import(`./_posts/${params.post}.md`)

      return {
        props: {
          PostContent: post.default,
          meta: { ...post.metadata, slug: params.post } 
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
  import RenderedPost from '$lib/components/RenderedPost.svelte'

  export let PostContent: SvelteComponent
  export let meta: Post
</script>


<RenderedPost {PostContent} {meta} />
