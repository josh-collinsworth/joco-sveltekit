import type { LoadOutput } from '@sveltejs/kit'

	export const load = async (): Promise<LoadOutput> => {
	const Uses = await import('$lib/content/uses.md')
	
	return {
		Uses: Uses.default
	}
}
