import type Post from '$lib/assets/js/interfaces/post.js'
import type APIResponse from '$lib/assets/js/interfaces/api-response.js'

export const get = async (): Promise<APIResponse> => {
	try {
		const posts: Post[] = await Promise.all(
			Object.entries(import.meta.glob('./posts/*.md')).map(async ([path, page]) => {
				const { metadata } = await page()
				const slug = path.split('/').pop().split('.').shift()
				return { ...metadata, slug }
			})
		).then(posts => 
			posts
				.map(post => ({
					title: post.title,
					slug: post.slug,
					excerpt: post.excerpt,
					coverImage: post.coverImage,
					date: post.date,
					categories: post.categories,
				}))
				.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
		)
			
		return {
			status: 200,
			body: { posts },
		}
	}

	catch {
		return {
			status: 500,
			body: {
				error: 'Could not fetch posts.'
			}
		}
	}
}