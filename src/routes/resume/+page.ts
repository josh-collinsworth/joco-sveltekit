	import type { SvelteComponent } from 'svelte'
	import type { PageLoad } from './$types'

	//TODO: wrong typing
	export const load = async (): Promise<PageLoad> => {
	const resume: SvelteComponent = await import('$lib/content/resume.md')
	
	return {
		Resume: resume.default
	}
}
