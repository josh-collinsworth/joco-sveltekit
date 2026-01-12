export const prerender = true
import { fetchPosts } from '$lib/assets/js/utils'

export async function GET() {
	const allPosts = await fetchPosts({ limit: -1 })

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="http://www.w3.org/1999/xhtml"
			xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
		>
      <url>
        <loc>https://joshcollinsworth.com/about-me</loc>
      </url>
      <url>
        <loc>https://joshcollinsworth.com/blog</loc>
      </url>
      <url>
        <loc>https://joshcollinsworth.com/contact</loc>
      </url>
      <url>
        <loc>https://joshcollinsworth.com</loc>
      </url>
      <url>
        <loc>https://joshcollinsworth.com/projects</loc>
      </url>
      <url>
        <loc>https://joshcollinsworth.com/resume</loc>
      </url>
      <url>
        <loc>https://joshcollinsworth.com/uses</loc>
      </url>
      <url>
        <loc>https://joshcollinsworth.com/api/posts</loc>
      </url>
      <url>
        <loc>https://joshcollinsworth.com/demos/easing</loc>
      </url>
			${allPosts
				.map((post) => {
					return `
          <url>
            <loc>https://joshcollinsworth.com/blog/${post.slug}</loc>
            <lastmod>${post.updated || post.date}</lastmod>
          </url>
        `
				})
				.join('')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	)
}
