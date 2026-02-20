export const prerender = true

// TODO: types
import { fetchPosts } from '$lib/assets/js/utils'
import type Post from '$lib/types/post'


export const GET = async () => {
	const data = await fetchPosts({ limit: -1 })

	const body: string = render(data)
	const headers = {
		'Cache-Control': `max-age=0, s-maxage=3600`,
		'Content-Type': 'application/xml',
	}
	return new Response(
		body,
		{
			status: 200,
			headers,
		}
	)
}

const renderCategories = (categories: Post['categories']): string => {
	if (!categories) return ''
	const list = Array.isArray(categories) ? categories : [categories]
	return list.map((cat) => `<category>${cat}</category>`).join('\n')
}

const render = (posts: Post[]): string => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Josh Collinsworth</title>
<description>Josh Collinsworth's blog</description>
<language>en</language>
<link>https://joshcollinsworth.com</link>
<atom:link href="https://joshcollinsworth.com/api/rss.xml" rel="self" type="application/rss+xml"/>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">https://joshcollinsworth.com/blog/${post.slug}</guid>
<title><![CDATA[${post.title}]]></title>
<link>https://joshcollinsworth.com/blog/${post.slug}</link>
<description><![CDATA[${post.excerpt}]]></description>
${renderCategories(post.categories)}
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`
