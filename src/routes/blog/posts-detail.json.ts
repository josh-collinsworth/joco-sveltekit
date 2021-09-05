import type APIResponse from '$lib/assets/js/interfaces/api-response.js'
import fetchPosts from '$lib/assets/js/utils/fetchPosts'

export const get = async (): Promise<APIResponse> => {
	try {
		const posts = await fetchPosts(true)
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