import type { SvelteComponent } from 'svelte'
import { redirect } from '@sveltejs/kit'
import { error } from '@sveltejs/kit'

import { dev } from '$app/environment'

export const load = async ({ params }) => {
  // Ensures we don't let the route be handled by this file and kick it over to the `/page` directory instead
  if (params.post == 'page') {
    throw redirect(301, '/blog');
  }
  try { 
    const post: SvelteComponent = await import(`../posts/${params.post}.md`)

    if (post) {
      return {
        PostContent: post.default,
        meta: { ...post.metadata, slug: params.post } 
      }
    }
  } catch({ message }) {

    if (dev) {
      const draft: SvelteComponent = await import(`../posts/drafts/${params.post}.md`)

      return {
        PostContent: draft.default,
        meta: { ...draft.metadata, slug: params.post } 
      }
    }
    throw error(404, message)
  }
}
