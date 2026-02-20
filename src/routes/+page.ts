import { fetchPosts } from '$lib/assets/js/utils'
import type Post from '$lib/types/post'

type HomePagePosts = {
	recentPosts: Post[]
	popularPosts: Post[]
}

export const load = async (): Promise<HomePagePosts> => {
	const allPosts = await fetchPosts({ limit: -1 })

	const recentPosts = [...allPosts.slice(0, 5)]
	const popularPosts = [
		...allPosts
			.filter((post) => post.categories.includes('popular'))
			.slice(0, 5)
	]

	return {
		recentPosts,
		popularPosts
	}
}
