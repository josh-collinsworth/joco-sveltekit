import type PostsEndpointOptions from '$lib/types/posts-endpoint-options'
import { fetchPosts } from '$lib/assets/js/utils'
import { json, error } from '@sveltejs/kit'

// TODO: types
export const GET = async () => {
	try {
		const posts = await fetchPosts()
		return json(posts)
	}

	catch {
		throw error(
			500,
			'could not fetch posts'
		)
	}
}