import type PostsEndpointOptions from '$lib/types/posts-endpoint-options'
import { fetchPosts } from '$lib/assets/js/utils'
import { error } from '@sveltejs/kit'

// TODO: types
export const GET = async ({ url }) => {
	const params = new URLSearchParams(url.search)

	const options: PostsEndpointOptions = {
		offset: parseInt(params.get('offset')) || null,
		limit: parseInt(params.get('limit')) || 10
	}

  const responseOptions = {
    status: 200,
    headers: {
      'content-type': 'application/json'
    }
  }

	try {
		const posts = await fetchPosts({ ...options })

		return new Response(
			JSON.stringify(posts),
      responseOptions
    )
	}

	catch {
		throw error(
			500,
			'could not fetch posts'
    )
	}
}