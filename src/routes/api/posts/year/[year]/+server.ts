import type PostsEndpointOptions from '$lib/types/posts-endpoint-options'
import { fetchPosts } from '$lib/assets/js/utils'
import { json } from '@sveltejs/kit'
import type { RouteParams } from './$types.js'

export const GET = async ({ params }: { params: RouteParams }): Promise<Response> => {
	const options: PostsEndpointOptions = {
		year: undefined
	}

	if (params.year) {
		options.year = parseInt(params.year)
	}

	const posts = await fetchPosts({ ...options })
	return json(posts)
}
