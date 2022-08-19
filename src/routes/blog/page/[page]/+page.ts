import { redirect } from '@sveltejs/kit';
import type { LoadOutput } from '@sveltejs/kit'
import { fetchPosts } from '$lib/assets/js/utils'

export const load = async ({ fetch, params }): Promise<LoadOutput> => {
  try {
    const page = params.page ? params.page : 1

    if (page <= 1) {
      throw redirect(301, '/blog');
    }
    
    let offset = page * 10 - 10
    
    const posts = await fetchPosts({ offset, limit: 10 })
    
    const count = await fetch(`/api/posts/count.json`)
    const { total } = await count.json()
    
    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
    return {
      status: 200,
      props: {
        posts,
        page,
        totalPosts: total
      }
    }
  } catch(error) {
    throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
    return {
      status: 404,
      error: error.message
    }
  }
}
