import type APIResponse from '$lib/assets/js/interfaces/api-response'
import fetchPosts from '$lib/assets/js/utils/fetchPosts'

//TODO: this file has a lot of duplication with posts-detail.json.ts. 
export const get = async (): Promise<APIResponse> => {
	try {
		const posts = await fetchPosts({ withContent: true })
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