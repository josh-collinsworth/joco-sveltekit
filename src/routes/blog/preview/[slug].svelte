<script context="module" lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import type { SvelteComponent } from 'svelte'

  import { dev } from '$app/env'

  export const load = async ({ params }) => {
    try {
      if (!dev) {
        return {
          status: 404,
          error: "No posts to preview."
        }
      }

      const { slug } = params
      const post: SvelteComponent = await import(`../_posts/drafts/${slug}.md`)

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
