// TODO: types
export const load = async ({ fetch }) => {
	const res = await fetch(`/api/posts/all`)
	const resJSON = await res.json()
	
	const popularPosts = resJSON
    .filter(post => post.categories.includes('popular'))
		.map(post => ({ slug: post.slug, title: post.title }))
	
	const allCategories = Array.from(new Set(resJSON.flatMap(p => p.categories)))

	return {
		popularPosts,
		allCategories
	}
}
