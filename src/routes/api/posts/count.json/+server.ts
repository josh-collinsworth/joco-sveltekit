//TODO: types
import { dev } from '$app/environment'
import { error, json } from '@sveltejs/kit'

export const GET = async () => {
  let posts

  if (dev) {
    posts = import.meta.glob(`/src/routes/blog/posts/**/*.md`)
  } else {
    posts = import.meta.glob(`/src/routes/blog/posts/*.md`)
  }

  try {
    const total = Object.keys(posts).length
    return json({ total })
  }

  catch({ message }) {
    throw error(500, message)
  }
}