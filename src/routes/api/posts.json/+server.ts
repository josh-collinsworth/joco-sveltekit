import type PostsEndpointOptions from '$lib/types/posts-endpoint-options'
import { fetchPosts } from '$lib/assets/js/utils'
import { json, error } from '@sveltejs/kit'

// TODO: types
export const GET = async ({ url }) => {
	const params = new URLSearchParams(url.search)

	const options: PostsEndpointOptions = {
		offset: parseInt(params.get('offset')) || null,
		limit: parseInt(params.get('limit')) || 10
	}

	try {
		const posts = await fetchPosts({ ...options })
		return json(posts)
	}

	catch {
		throw error(
			500,
			'could not fetch posts'
    )
	}
}