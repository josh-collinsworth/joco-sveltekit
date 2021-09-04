import type Post from './post.js'

export default interface APIResponse {
  status: number;
  body: {
    posts?: Post[];
    error?: string;
  }
}