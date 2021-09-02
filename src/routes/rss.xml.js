import { SITE_DOMAIN } from '$lib/assets/js/constants.js'

export const get = async () => {
  const res = await fetch(`https://${SITE_DOMAIN}/blog/posts.json`)
  const data = await res.json();
  const body = render(data.posts);
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  };
  return {
    body,
    headers,
  };
};

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Josh Collinsworth</title>
<description>Josh Collinsworth</description>
<link>https://joshcollinsworth.com</link>
<atom:link href="https://joshcollinsworth.com/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">https://joshcollinsworth.com/posts/${post.slug}</guid>
<title>${post.title}</title>
<link>https://joshcollinsworth.com/posts/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
  )
  .join('')}
</channel>
</rss>
`;
