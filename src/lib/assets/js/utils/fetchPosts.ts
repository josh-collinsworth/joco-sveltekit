import type Post from '../interfaces/post'

const fetchPosts = async (withContent = false): Promise<Post[]> => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('../../../../routes/blog/posts/*.md')).map(async ([path, page]) => {
      const { metadata } = await page()
      const slug = path.split('/').pop().split('.').shift()
      return { ...metadata, slug }
    })
  ).then(posts => {
    return posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  }
  ).then(posts => {
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