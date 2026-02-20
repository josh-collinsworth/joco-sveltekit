import { fetchPosts } from '$lib/assets/js/utils'
import type Post from '$lib/types/post'

export const load = async (): Promise<{ aiPosts: Post[] }> => {
	const aiPosts = await fetchPosts({ limit: -1, category: 'AI' })

	return { aiPosts }
}
