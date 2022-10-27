import { dev } from '$app/environment'
import { json } from '@sveltejs/kit'

export const GET = async (): Promise<Response> => {
  let posts

  if (dev) {
    posts = import.meta.glob(`/src/routes/blog/posts/**/*.md`)
  } else {
    posts = import.meta.glob(`/src/routes/blog/posts/*.md`)
  }

  const total = Object.keys(posts).length
  return json({ total })
}