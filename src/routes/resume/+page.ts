import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	const resume = await import('$lib/content/resume.md')

	return {
		Resume: resume.default
	}
}
