import type { PageData } from './$types'

export const prerender = true

export const load = async ({ url }: {url: URL}): Promise<PageData> => {
	const path: string = url.pathname

	return {
		path
	}
}
