import type { SvelteComponent } from 'svelte'
import { redirect } from '@sveltejs/kit'
import { error } from '@sveltejs/kit'
import type Post from '$lib/types/post'

interface MarkdownPost {
	PostContent: SvelteComponent
	meta: Post
}

export const load = async ({ params }): Promise<MarkdownPost> => {
	// Ensures we don't let the route be handled by this file and kick it over to the `/blog` directory instead
	if (params.post == 'page') {
		throw redirect(301, '/blog')
	}
	try {
		const post: SvelteComponent = await import(`../../../../lib/content/posts/${params.post}.md`)

		if (post) {
			return {
				PostContent: post.default,
				meta: { ...post.metadata, slug: params.post }
			}
		}
	} catch ({ message }) {
		throw error(404, message)
	}
}
