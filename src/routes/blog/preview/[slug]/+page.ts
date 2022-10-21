import { error } from '@sveltejs/kit'
import type Post from '$lib/types/post'
import type { SvelteComponent } from 'svelte'

import { dev } from '$app/environment'

export const load = async ({ params }) => {
  try {
    if (!dev) {
      throw error(404, "No posts to preview.");
    }

    const { slug } = params
    const post: SvelteComponent = await import(`../../posts/drafts/${slug}.md`)

    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post } 
    }
  } catch({ message }) {
    throw error(404, message)
  }
}
