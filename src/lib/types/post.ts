export default interface Post {
	categories?: string|string[]
	coverImage: string
	coverWidth?: number
	coverHeight?: number
	date: string
	excerpt: string
	slug: string
	subtitle?: string
	title: string
	updated?: string
	draft?: boolean
}