import type APIResponse from '$lib/assets/js/interfaces/api-response'
import { dev } from '$app/env'

export const get = async (): Promise<APIResponse> => {

	let posts

  if (dev) {
		posts = import.meta.glob(`../../blog/_posts/**/*.md`)
  } else {
		posts = import.meta.glob(`../../blog/_posts/*.md`)
  }

	try {
		return {
			status: 200,
			body: {
				total: Object.keys(posts).length
			}
		}
	}

	catch {
		return {
			status: 500,
			body: {
				error: 'Could not retrieve total number of posts.'
			}
		}
	}
}