import type { PageData } from './$types'

export const prerender = true

// TODO: type this somehow?
export const load = async ({ url }): PageData => {
	const path: string = url.pathname

	return {
		path
	}
}
