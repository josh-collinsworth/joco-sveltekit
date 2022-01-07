import type Post from '../interfaces/post'
import { dev } from '$app/env'

interface fetchPostsOptions {
  withContent?: boolean
  offset?: number
  limit?: number
}

const fetchPosts = async (options: fetchPostsOptions = { offset: null, limit: null }): Promise<Post[]> => {
  const { offset, limit } = options

  let posts: Post[]

  if (dev) {
    posts = await Promise.all(
      Object.entries(import.meta.glob(`../../../../routes/blog/_posts/**/*.md`)).map(async ([path, page]) => {
        const { metadata } = await page()
        const slug = path.split('/').pop().split('.').shift()
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

  const sortedPosts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  
  
  if (offset) {
    sortedPosts.slice(offset)
  }
  
  if (limit && limit < posts.length) {
    sortedPosts.slice(0, limit)
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