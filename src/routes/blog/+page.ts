import type { LoadOutput } from '@sveltejs/kit'

export const load = async ({ url }): Promise<LoadOutput> => {
	const res = await fetch(`${url.origin}/api/posts.json`)
	const posts = await res.json()
	
	const count = await fetch(`${url.origin}/api/posts/count.json`)
	const total = await count.json()

	return { 
		posts, 
		totalPosts: total 
	}
}
