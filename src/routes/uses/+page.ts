import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	const Uses = await import('$lib/content/uses.md')

	return {
		Uses: Uses.default
	}
}
