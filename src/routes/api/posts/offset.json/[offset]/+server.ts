import type PostsEndpointOptions from '$lib/types/posts-endpoint-options'
import { fetchPosts } from '$lib/assets/js/utils'
import { json, error } from '@sveltejs/kit'

// TODO: types
export const GET = async ({ params }) => {

  console.log(params.offset)
  const options: PostsEndpointOptions = {
    offset: 10
  }

  if (params.offset) {
    options.offset = params.offset
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