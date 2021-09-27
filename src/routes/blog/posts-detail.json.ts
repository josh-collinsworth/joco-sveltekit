import type APIResponse from '$lib/assets/js/interfaces/api-response'
import fetchPosts from '$lib/assets/js/utils/fetchPosts'

export const get = async (): Promise<APIResponse> => {
	try {
		const posts = await fetchPosts({ withContent: false })
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