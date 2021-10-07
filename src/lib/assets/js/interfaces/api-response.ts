import type Post from './post'

export default interface APIResponse {
  status: number
  body: {
    posts?: Post[]
    error?: string
  }
}