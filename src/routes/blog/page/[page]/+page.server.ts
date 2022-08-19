import { redirect } from '@sveltejs/kit'
import { fetchPosts } from '$lib/assets/js/utils'
import { error } from '@sveltejs/kit'

export const load = async ({ params, url }) => {
  const page = params.page ? params.page : 1

  if (!page || page <= 1) {
    throw redirect(301, '/blog');
  }
  
  try {
    const offset = page * 10 - 10
    const posts = await fetchPosts({ offset, limit: 10 })
    
    const count = await fetch(`${url.origin}/api/posts/count.json`)
    const { total } = await count.json()
    
    return {
      posts,
      page,
      totalPosts: total
    }
  }
  catch({ message }) {
    throw error(404, message)
  }
}
