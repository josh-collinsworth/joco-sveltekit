// TODO: types
export const load = async ({ fetch }) => {
	const rss = await fetch(`/api/rss.xml`) // This isn't used; it's just here to make sure the route gets prerendered. Yes, it's still needed, even if the route goes into the kit.prerender.entries, for some reason.
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
