import type { SvelteComponent } from 'svelte'
import { redirect } from '@sveltejs/kit'
import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
  // Ensures we don't let the route be handled by this file and kick it over to the `/page` directory instead
  if (params.post == 'page') {
    throw redirect(301, '/blog');
  }
  try { 
    const post: SvelteComponent = await import(`../posts/${params.post}.md`)

    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post } 
    }
  } catch({ message }) {
    throw error(404, message)
  }
}
