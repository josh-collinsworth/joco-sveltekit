import type RSSResponse from '$lib/assets/js/interfaces/rss-response'
import type Post from '$lib/assets/js/interfaces/post'

import { fetchPosts } from '$lib/assets/js/utils'

export const get = async (): Promise<RSSResponse> => {
  const data = await fetchPosts()

  const body: string = render(data)
  const headers = {
    'Cache-Control': `max-age=0, s-maxage=3600`,
    'Content-Type': 'application/xml',
  }
  return {
    status: 200,
    body,
    headers,
  }
}

const render = (posts: Post[]): string => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Josh Collinsworth</title>
<description>Josh Collinsworth</description>
<link>https://joshcollinsworth.com</link>
<atom:link href="https://joshcollinsworth.com/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">https://joshcollinsworth.com/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://joshcollinsworth.com/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
  )
  .join('')}
</channel>
</rss>
`