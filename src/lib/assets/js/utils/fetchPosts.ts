import type Post from '$lib/types/post'
import type PostsEndpointOptions from '$lib/types/posts-endpoint-options'
import { dev } from '$app/environment'

const fetchPosts = async ({
	offset = 0,
	limit = 10,
	category = '',
	year
}: PostsEndpointOptions = {}): Promise<Post[]> => {
	let posts: Post[]

	posts = await Promise.all(
		Object.entries(import.meta.glob(`../../../content/posts/*.md`)).map(async ([path, page]) => {
			const { metadata } = await page()
			const slug = path.split('/').pop().split('.').shift()
			return { ...metadata, slug }
		})
	)

	if (!dev) posts = posts.filter((post) => !post.draft)

	let sortedPosts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

	if (category) {
		sortedPosts = posts.filter((post) => post.categories.includes(category))
	}

	if (year) {
		sortedPosts = posts.filter((post) => new Date(post.date).getFullYear() === year)
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset)
	}

	// -1 means all posts, so -1 skips limiting
	if (limit && limit != -1 && limit < sortedPosts.length) {
		sortedPosts = sortedPosts.slice(0, limit)
	}

	const finalPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		date: post.date,
		categories: post.categories
	}))

	return finalPosts
}

export default fetchPosts
