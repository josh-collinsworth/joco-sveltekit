import type Post from '../interfaces/post'

interface fetchPostsOptions {
  withContent?: boolean
  offset?: number
  limit?: number
}

const fetchPosts = async (options: fetchPostsOptions): Promise<Post[]> => {
  const { withContent, offset, limit } = options

  const posts = await Promise.all(
    Object.entries(import.meta.glob('../../../../routes/blog/*.md')).map(async ([path, page]) => {
      const { metadata } = await page()
      const slug = path.split('/').pop().split('.').shift()
      return { ...metadata, slug }
    })
  )
  .then(posts => {
    return posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  })
  .then(posts => {
    if (offset) {
      return posts.slice(offset)
    }
    return posts
  })
  .then(posts => {
    if (limit && limit < posts.length) {
      return posts.slice(0, limit)
    }
    return posts
  })
  .then(posts => {
    if (withContent) {
      return posts
    }
    return posts.map(post => ({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      date: post.date,
      categories: post.categories,
    }))
  })
  
  return posts
}

export default fetchPosts