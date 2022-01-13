import type Post from '../../../types/post'
import type PostsEndpointOptions from '../../../types/posts-endpoint-options'
import { dev } from '$app/env'

const fetchPosts = async (options: PostsEndpointOptions = { offset: null, limit: 10 }): Promise<Post[]> => {
  const { offset, limit } = options

  let posts: Post[]

  if (dev) {
    posts = await Promise.all(
      Object.entries(import.meta.glob(`../../../../routes/blog/_posts/**/*.md`)).map(async ([path, page]) => {
        const { metadata } = await page()
        let slug = path.split('/').pop().split('.').shift()
        // Sends the page to the proper preview URL when in dev
        if (path.includes('_posts/drafts/')) {
          slug = 'preview/' + slug
        }
        return { ...metadata, slug }
      })
    )
  } else {
    posts = await Promise.all(
      Object.entries(import.meta.glob(`../../../../routes/blog/_posts/*.md`)).map(async ([path, page]) => {
        const { metadata } = await page()
        const slug = path.split('/').pop().split('.').shift()
        return { ...metadata, slug }
      })
    )
  }

  let sortedPosts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  
  if (offset) {
    sortedPosts = sortedPosts.slice(offset)
  }
  
  if (limit && limit < sortedPosts.length) {
    sortedPosts = sortedPosts.slice(0, limit)
  }
  
  const finalPosts = sortedPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    date: post.date,
    categories: post.categories,
  }))
  
  return finalPosts
}

export default fetchPosts