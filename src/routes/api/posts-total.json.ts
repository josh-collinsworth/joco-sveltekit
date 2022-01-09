import type APIResponse from '$lib/assets/js/interfaces/api-response'
import type PostsEndpointOptions from '$lib/assets/js/interfaces/posts-endpoint-options'
import { fetchPosts } from '$lib/assets/js/utils'

export const get = async (): Promise<APIResponse> => {
	const options: PostsEndpointOptions = {
		limit: null
	}

	try {
		const posts = await fetchPosts( options )
		return {
			status: 200,
			body: {
				total: posts.length
			}
		}
	}

	catch {
		return {
			status: 500,
			body: {
				error: 'Could not retrieve total number of posts.'
			}
		}
	}
}