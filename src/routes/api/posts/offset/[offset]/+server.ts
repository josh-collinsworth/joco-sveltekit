import type PostsEndpointOptions from '$lib/types/posts-endpoint-options'
import { fetchPosts } from '$lib/assets/js/utils'
import { json } from '@sveltejs/kit'

export const GET = async ({ params }): Promise<Response> => {
	const options: PostsEndpointOptions = {
		offset: 10
	}

	if (params.offset) {
		options.offset = params.offset
	}

	const posts = await fetchPosts({ ...options })
	return json(posts)
}