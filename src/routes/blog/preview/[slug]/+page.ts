import { error } from '@sveltejs/kit';
import type Post from '$lib/types/post'
import type { SvelteComponent } from 'svelte'

import { dev } from '$app/env'

export const load = async ({ params }) => {
  try {
    if (!dev) {
      throw error(404, "No posts to preview.");
    }

    const { slug } = params
    const post: SvelteComponent = await import(`../../_posts/drafts/${slug}.md`)

    return {
  PostContent: post.default,
  meta: { ...post.metadata, slug: params.post } 
}
  } catch(error) {
    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
    return {
      status: 404,
      error: error.message
    }
  }
}
