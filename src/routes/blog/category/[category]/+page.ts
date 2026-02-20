import fetchPosts from '$lib/assets/js/utils/fetchPosts'

export const load = async ({ params }) => {
	const { category } = params
	const posts	= await fetchPosts({ category, limit: -1 })

	return { 
		posts,
		category
	}
}
