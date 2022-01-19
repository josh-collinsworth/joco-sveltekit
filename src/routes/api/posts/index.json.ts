import type APIResponse from '$lib/types/api-response'
import type PostsEndpointOptions from '$lib/types/posts-endpoint-options'
import { fetchPosts } from '$lib/assets/js/utils'

export const get = async ({ url }): Promise<APIResponse> => {
	const params = new URLSearchParams(url.search)

	const options: PostsEndpointOptions = {
		offset: parseInt(params.get('offset')) || null,
		limit: parseInt(params.get('limit')) || 10
	}

	try {
		const posts = await fetchPosts({ ...options })
		return {
			status: 200,
			body: {
				posts
			}
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