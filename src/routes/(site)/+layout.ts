import type { PageData } from './$types'

export const prerender = true

export const load = ({ url }: {url: URL}): PageData => {
	const path: string = url.pathname

	return {
		path
	}
}
