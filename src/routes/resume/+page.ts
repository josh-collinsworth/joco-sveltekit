import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	const resume = await import('$lib/content/resume.md')

	console.log('resume', resume)
	return {
		Resume: resume.default
	}
}
