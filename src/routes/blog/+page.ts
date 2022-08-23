// TODO: types

export const load = async ({ fetch }) => {
	const res = await fetch(`/api/posts.json?limit=10`)
	const posts = await res.json()
	
	const count = await fetch(`/api/posts/count.json`)
	const total = await count.json()

	return { 
		posts, 
		totalPosts: total 
	}
}
