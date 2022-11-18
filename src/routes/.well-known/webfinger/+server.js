import { json } from '@sveltejs/kit'
export const prerender = true

const mastodonData = {
  "subject": "acct:collinsworth@mastodon.sandwich.net",
  "aliases": [
    "https://mastodon.sandwich.net/@collinsworth",
    "https://mastodon.sandwich.net/users/collinsworth"
  ],
  "links": [
    {
      "rel": "http://webfinger.net/rel/profile-page",
      "type": "text/html",
      "href": "https://mastodon.sandwich.net/@collinsworth"
    },
    {
      "rel": "self",
      "type": "application/activity+json",
      "href": "https://mastodon.sandwich.net/users/collinsworth"
    },
    {
      "rel": "http://ostatus.org/schema/1.0/subscribe",
      "template": "https://mastodon.sandwich.net/authorize_interaction?uri={uri}"
    }
  ]
}

export const GET = () => {
  return json(mastodonData)
}