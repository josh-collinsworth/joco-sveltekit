import type { LoadOutput } from '@sveltejs/kit'

export const load = async ({ url }): Promise<LoadOutput> => {
  const rss = await fetch(`${url.origin}/api/rss.xml`) // This isn't used; it's just here to make sure the route gets prerendered
	const res = await fetch(`${url.origin}/api/posts.json`)
	const resJSON = await res.json()
	
	const recentPosts = resJSON
		.map(post => ({ slug: post.slug, title: post.title }))
		.slice(0, 5)
	
	const allCategories = Array.from(new Set(resJSON.flatMap(p => p.categories)))

	return {
		recentPosts,
		allCategories
	}
}
