// TODO: types

export const load = async ({ fetch }) => {
	const res = await fetch(`/api/posts/offset/0`)
	const posts = await res.json()
	
	const count = await fetch(`/api/posts/count`)
	const total = await count.json()

	return { 
		posts, 
		totalPosts: total 
	}
}
