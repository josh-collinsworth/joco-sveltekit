import { fetchPosts } from '$lib/assets/js/utils'
import { json } from '@sveltejs/kit'

export const GET = async (): Promise<Response> => {
	const posts = await fetchPosts({ limit: -1 })
	return json(posts)
}