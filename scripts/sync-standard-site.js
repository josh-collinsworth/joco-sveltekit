/**
 * Syncs this site's publication and posts to AT Protocol records using the
 * standard.site lexicons (https://standard.site), which makes the blog
 * followable and discoverable in apps like Leaflet, Pckt, and Offprint.
 *
 * Usage:
 *   ATPROTO_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx npm run sync:standard-site
 *
 * Flags:
 *   --dry-run  Show what would change without writing anything (no password needed)
 *   --prune    Delete records (and map entries) for posts that no longer exist
 *
 * The password must be a Bluesky app password (Settings → Privacy and
 * security → App passwords), never the main account password.
 *
 * Two generated files must be committed and deployed after running:
 *   - src/lib/data/standard-site.json — slug → record AT-URI map, read by
 *     RenderedPost.svelte to emit each post's <link rel="site.standard.document">
 *   - static/.well-known/site.standard.publication — the publication
 *     verification endpoint required by the spec
 */

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const HANDLE = 'collinsworth.dev'
const EXPECTED_DID = 'did:plc:dr7ktxokjqc2suwnook4k73h'
const SITE_URL = 'https://joshcollinsworth.com'

const PUBLICATION = {
	$type: 'site.standard.publication',
	url: SITE_URL,
	name: 'Josh Collinsworth',
	description:
		'Frontend developer, designer, teacher and writer working as a design engineer',
	preferences: { showInDiscover: true }
}

const root = new URL('..', import.meta.url)
const POSTS_DIR = fileURLToPath(new URL('src/lib/content/posts/', root))
const MAP_PATH = fileURLToPath(new URL('src/lib/data/standard-site.json', root))
const WELL_KNOWN_PATH = fileURLToPath(
	new URL('static/.well-known/site.standard.publication', root)
)

const dryRun = process.argv.includes('--dry-run')
const prune = process.argv.includes('--prune')

// ---
// Frontmatter parsing (handles this repo's frontmatter: scalar values,
// optionally quoted, plus simple block lists like `categories:`)
// ---

const unquote = (value) => {
	if (/^'.*'$/.test(value)) return value.slice(1, -1).replaceAll("''", "'")
	if (/^".*"$/.test(value)) return value.slice(1, -1).replaceAll('\\"', '"')
	return value
}

const parseFrontmatter = (src) => {
	const match = src.match(/^---\r?\n([\s\S]*?)\r?\n---/)
	if (!match) return null

	const meta = {}
	let currentList = null

	for (const line of match[1].split(/\r?\n/)) {
		const listItem = line.match(/^\s+-\s+(.+)$/)
		if (listItem && currentList) {
			currentList.push(unquote(listItem[1].trim()))
			continue
		}
		const kv = line.match(/^(\w+):\s*(.*)$/)
		if (!kv) continue

		const [, key, raw] = kv
		if (raw === '') {
			currentList = meta[key] = []
		} else {
			currentList = null
			meta[key] = unquote(raw.trim())
		}
	}
	return meta
}

// Dates in frontmatter are YYYY-M-D (sometimes unpadded); AT Protocol
// requires full ISO 8601 datetimes
const toDatetime = (date) => {
	const match = String(date).match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/)
	if (!match) throw new Error(`Unrecognized date: ${date}`)
	const [, y, m, d] = match
	return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T00:00:00.000Z`
}

const stableStringify = (value) => {
	if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`
	if (value && typeof value === 'object') {
		const entries = Object.keys(value)
			.sort()
			.map((k) => `${JSON.stringify(k)}:${stableStringify(value[k])}`)
		return `{${entries.join(',')}}`
	}
	return JSON.stringify(value)
}

// ---
// XRPC helpers
// ---

const xrpc = async (base, method, { params, body, token } = {}) => {
	const url = new URL(`/xrpc/${method}`, base)
	for (const [key, value] of Object.entries(params ?? {})) {
		url.searchParams.set(key, value)
	}
	const response = await fetch(url, {
		method: body ? 'POST' : 'GET',
		headers: {
			...(body ? { 'Content-Type': 'application/json' } : {}),
			...(token ? { Authorization: `Bearer ${token}` } : {})
		},
		body: body ? JSON.stringify(body) : undefined
	})
	const json = await response.json().catch(() => ({}))
	if (!response.ok) {
		const detail = json.message ?? json.error ?? response.statusText
		throw Object.assign(new Error(`${method}: ${detail}`), {
			status: response.status,
			code: json.error
		})
	}
	return json
}

const getRecordOrNull = async (pds, repo, collection, rkey) => {
	try {
		const { value } = await xrpc(pds, 'com.atproto.repo.getRecord', {
			params: { repo, collection, rkey }
		})
		return value
	} catch (error) {
		if (error.status === 400) return null
		throw error
	}
}

// ---
// Main
// ---

const password = process.env.ATPROTO_APP_PASSWORD
if (!password && !dryRun) {
	console.error(
		'Missing ATPROTO_APP_PASSWORD. Create an app password in Bluesky settings,\n' +
			'then run: ATPROTO_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx npm run sync:standard-site'
	)
	process.exit(1)
}

const { did } = await xrpc(
	'https://public.api.bsky.app',
	'com.atproto.identity.resolveHandle',
	{
		params: { handle: HANDLE }
	}
)
if (did !== EXPECTED_DID) {
	throw new Error(
		`Handle ${HANDLE} resolved to ${did}, expected ${EXPECTED_DID} — refusing to write records`
	)
}

const didDoc = await (await fetch(`https://plc.directory/${did}`)).json()
const pds = didDoc.service?.find(
	(s) => s.id === '#atproto_pds'
)?.serviceEndpoint
if (!pds) throw new Error(`No PDS endpoint found in DID document for ${did}`)

let accessJwt = null
if (!dryRun) {
	;({ accessJwt } = await xrpc(pds, 'com.atproto.server.createSession', {
		body: { identifier: HANDLE, password }
	}))
}

const putRecord = async (collection, rkey, record) =>
	xrpc(pds, 'com.atproto.repo.putRecord', {
		token: accessJwt,
		body: { repo: did, collection, rkey, record }
	})

const createRecord = async (collection, record) =>
	xrpc(pds, 'com.atproto.repo.createRecord', {
		token: accessJwt,
		body: { repo: did, collection, record }
	})

const map = JSON.parse(
	await readFile(MAP_PATH, 'utf8').catch(
		() => '{"publication":null,"documents":{}}'
	)
)
const rkeyOf = (atUri) => atUri.split('/').pop()

// 1. Publication record
if (!map.publication) {
	if (dryRun) {
		console.log('would create: publication record')
	} else {
		const { uri } = await createRecord('site.standard.publication', PUBLICATION)
		map.publication = uri
		console.log(`created publication: ${uri}`)
	}
} else {
	const existing = await getRecordOrNull(
		pds,
		did,
		'site.standard.publication',
		rkeyOf(map.publication)
	)
	if (stableStringify(existing) !== stableStringify(PUBLICATION)) {
		if (dryRun) {
			console.log('would update: publication record')
		} else {
			await putRecord(
				'site.standard.publication',
				rkeyOf(map.publication),
				PUBLICATION
			)
			console.log(`updated publication: ${map.publication}`)
		}
	}
}

// 2. One document record per published post
const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith('.md')).sort()
const slugs = new Set()
let created = 0
let updated = 0
let unchanged = 0

for (const file of files) {
	const slug = file.replace(/\.md$/, '')
	const meta = parseFrontmatter(await readFile(`${POSTS_DIR}${file}`, 'utf8'))

	if (!meta?.title || !meta?.date) {
		console.warn(`skipping ${slug}: missing title or date`)
		continue
	}
	if (meta.draft === 'true' || meta.draft === true) continue
	slugs.add(slug)

	const record = {
		$type: 'site.standard.document',
		site: map.publication ?? SITE_URL,
		path: `/blog/${slug}`,
		title: meta.title,
		publishedAt: toDatetime(meta.date),
		...(meta.updated ? { updatedAt: toDatetime(meta.updated) } : {}),
		...(meta.excerpt ? { description: meta.excerpt } : {}),
		...(meta.categories?.length ? { tags: meta.categories } : {})
	}

	const atUri = map.documents[slug]
	if (!atUri) {
		if (dryRun) {
			console.log(`would create: ${slug}`)
			created++
		} else {
			const { uri } = await createRecord('site.standard.document', record)
			map.documents[slug] = uri
			console.log(`created: ${slug}`)
			created++
		}
		continue
	}

	const existing = await getRecordOrNull(
		pds,
		did,
		'site.standard.document',
		rkeyOf(atUri)
	)
	if (stableStringify(existing) === stableStringify(record)) {
		unchanged++
		continue
	}
	if (dryRun) {
		console.log(`would update: ${slug}`)
	} else {
		await putRecord('site.standard.document', rkeyOf(atUri), record)
		console.log(`updated: ${slug}`)
	}
	updated++
}

// 3. Prune records for deleted posts (only ones this script created)
if (prune) {
	for (const [slug, atUri] of Object.entries(map.documents)) {
		if (slugs.has(slug)) continue
		if (dryRun) {
			console.log(`would delete: ${slug}`)
			continue
		}
		await xrpc(pds, 'com.atproto.repo.deleteRecord', {
			token: accessJwt,
			body: {
				repo: did,
				collection: 'site.standard.document',
				rkey: rkeyOf(atUri)
			}
		})
		delete map.documents[slug]
		console.log(`deleted: ${slug}`)
	}
}

// 4. Write the generated files
if (!dryRun) {
	map.documents = Object.fromEntries(
		Object.entries(map.documents).sort(([a], [b]) => a.localeCompare(b))
	)
	await writeFile(MAP_PATH, JSON.stringify(map, null, '\t') + '\n')
	await mkdir(dirname(WELL_KNOWN_PATH), { recursive: true })
	await writeFile(WELL_KNOWN_PATH, map.publication + '\n')
}

console.log(
	`\n${dryRun ? '[dry run] ' : ''}${created} created, ${updated} updated, ${unchanged} unchanged (${slugs.size} published posts)`
)
if (!dryRun && (created || updated)) {
	console.log(
		'Remember to commit src/lib/data/standard-site.json and static/.well-known/'
	)
}
