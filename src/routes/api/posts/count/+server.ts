import { json } from '@sveltejs/kit'

export const GET = async (): Promise<Response> => {
	const posts = import.meta.glob(`/src/lib/content/posts/*.md`)

	const total = Object.keys(posts).length
	return json({ total })
}