import { json } from '@sveltejs/kit'
export const prerender = true

const mastodonData = {
	"subject": "acct:collinsworth@hachyderm.io",
	"aliases": [
		"https://hachyderm.io/@collinsworth",
		"https://hachyderm.io/users/collinsworth"
	],
	"links": [
		{
			"rel": "http://webfinger.net/rel/profile-page",
			"type": "text/html",
			"href": "https://hachyderm.io/@collinsworth"
		},
		{
			"rel": "self",
			"type": "application/activity+json",
			"href": "https://hachyderm.io/users/collinsworth"
		},
		{
			"rel": "http://ostatus.org/schema/1.0/subscribe",
			"template": "https://hachyderm.io/authorize_interaction?uri={uri}"
		}
	]
}

export const GET = () => {
	return json(mastodonData)
}