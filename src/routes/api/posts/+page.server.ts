import { redirect } from "@sveltejs/kit"

export const load = (): RequestRedirect => {
	throw redirect(301, '/api/posts/all')
}
