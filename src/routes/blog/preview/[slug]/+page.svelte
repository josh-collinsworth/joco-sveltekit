<script context="module" lang="ts">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

  // import type Post from '$lib/types/post'
  // import type { SvelteComponent } from 'svelte'

  // import { dev } from '$app/env'

  // export const load = async ({ params }) => {
  //   try {
  //     if (!dev) {
  //       return {
  //         status: 404,
  //         error: "No posts to preview."
  //       }
  //     }

  //     const { slug } = params
  //     const post: SvelteComponent = await import(`../../_posts/drafts/${slug}.md`)

  //     return {
  //       props: {
  //         PostContent: post.default,
  //         meta: { ...post.metadata, slug: params.post } 
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
  // $: ({ PostContent, meta } = data);

  import RenderedPost from '$lib/components/RenderedPost.svelte'

  export let PostContent: SvelteComponent
  export let meta: Post
</script>


<RenderedPost {PostContent} {meta} />
