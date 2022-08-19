//TODO: types
import { dev } from '$app/env'
import { error } from '@sveltejs/kit'


export const GET = async () => {
	let posts

  if (dev) {
		posts = import.meta.glob(`/src/routes/blog/_posts/**/*.md`)
  } else {
		posts = import.meta.glob(`/src/routes/blog/_posts/*.md`)
  }

	try {
    const responseMeta = {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }

    const total = Object.keys(posts).length

    return new Response(
      JSON.stringify({ total }),
      responseMeta
    )
	}

	catch(err) {
    throw error(500, err)
	}
}