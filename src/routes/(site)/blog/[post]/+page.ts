import type Post from '$lib/types/post'
import { error, redirect } from '@sveltejs/kit'
import type { SvelteComponent } from 'svelte'

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
		const post: SvelteComponent = await import(
			`../../../../lib/content/posts/${params.post}.md`
		)

		if (post) {
			return {
				PostContent: post.default,
				meta: { ...post.metadata, slug: params.post }
			}
		}
	} catch ({ message }) {
		// I don't like the nested try/catch option, but since it's just to load drafts on dev and won't really do anything on prod, I don't mind it too much. Besides, it's one of the  only ways to get this to work properly.
		try {
			const draft: SvelteComponent = await import(
				`../../../../lib/content/posts/drafts/${params.post}.md`
			)

			if (draft) {
				return {
					PostContent: draft.default,
					meta: { ...draft.metadata, slug: params.post }
				}
			}
		} catch ({ message }) {
			throw error(404, message)
		}
	}
}
