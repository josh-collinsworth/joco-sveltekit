/**
 * Syncs this site's publication and posts to AT Protocol records using the
 * standard.site lexicons (https://standard.site), which makes the blog
 * followable and discoverable in apps like Leaflet, Pckt, and Offprint.
 *
 * The records already on the PDS are the source of truth: existing documents
 * are matched to posts by their `path`, so this is safe to re-run anywhere
 * (locally or in CI) without creating duplicates. It runs automatically
 * before production builds on Netlify (see netlify.toml), which needs an
 * ATPROTO_APP_PASSWORD environment variable set in the Netlify UI.
 *
 * Usage:
 *   ATPROTO_APP_PASSWORD=xxxx-xxxx-xxxx-xxxx npm run sync:standard-site
 *
 * Flags:
 *   --dry-run    Show what would change without writing anything (no password needed)
 *   --prune      Delete records for posts that no longer exist (and duplicates)
 *   --soft-fail  Log errors but exit 0, so a sync failure can't block a deploy
 *
 * The password must be a Bluesky app password (Settings → Privacy and
 * security → App passwords), never the main account password. It's only
 * needed when there's actually something to write.
 *
 * Two generated files are written (the repo copies act as a fallback cache):
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
const softFail = process.argv.includes('--soft-fail')

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

// ---
// Main
// ---

const run = async () => {
	const { did } = await xrpc(
		'https://public.api.bsky.app',
		'com.atproto.identity.resolveHandle',
		{ params: { handle: HANDLE } }
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

	const listAll = async (collection) => {
		const records = []
		let cursor
		do {
			const page = await xrpc(pds, 'com.atproto.repo.listRecords', {
				params: { repo: did, collection, limit: 100, ...(cursor && { cursor }) }
			})
			records.push(...page.records)
			cursor = page.cursor
		} while (cursor)
		return records
	}

	// Authenticate lazily: only when there's actually something to write
	let accessJwt = null
	const ensureSession = async () => {
		if (accessJwt) return
		const password = process.env.ATPROTO_APP_PASSWORD
		if (!password) {
			throw new Error(
				'Records need updating, but ATPROTO_APP_PASSWORD is not set. Create an app\n' +
					'password in Bluesky settings (never use the main account password), then\n' +
					'set it locally or in the Netlify environment variables.'
			)
		}
		;({ accessJwt } = await xrpc(pds, 'com.atproto.server.createSession', {
			body: { identifier: HANDLE, password }
		}))
	}

	const putRecord = async (collection, rkey, record) => {
		await ensureSession()
		return xrpc(pds, 'com.atproto.repo.putRecord', {
			token: accessJwt,
			body: { repo: did, collection, rkey, record }
		})
	}

	const createRecord = async (collection, record) => {
		await ensureSession()
		return xrpc(pds, 'com.atproto.repo.createRecord', {
			token: accessJwt,
			body: { repo: did, collection, record }
		})
	}

	const deleteRecord = async (collection, rkey) => {
		await ensureSession()
		return xrpc(pds, 'com.atproto.repo.deleteRecord', {
			token: accessJwt,
			body: { repo: did, collection, rkey }
		})
	}

	// 1. Publication record (matched by url)
	const publications = await listAll('site.standard.publication')
	const publication = publications.find((r) => r.value.url === SITE_URL)
	let publicationUri = publication?.uri ?? null

	if (!publication) {
		if (dryRun) {
			console.log('would create: publication record')
		} else {
			;({ uri: publicationUri } = await createRecord(
				'site.standard.publication',
				PUBLICATION
			))
			console.log(`created publication: ${publicationUri}`)
		}
	} else if (
		stableStringify(publication.value) !== stableStringify(PUBLICATION)
	) {
		if (dryRun) {
			console.log('would update: publication record')
		} else {
			await putRecord(
				'site.standard.publication',
				publicationUri.split('/').pop(),
				PUBLICATION
			)
			console.log(`updated publication: ${publicationUri}`)
		}
	}

	// 2. Existing document records for this site's blog, grouped by slug.
	// Only records that belong to this publication and live under /blog/ are
	// considered ours — records created by other AT Protocol apps are untouched.
	const documents = (await listAll('site.standard.document')).filter(
		(r) =>
			(r.value.site === publicationUri || r.value.site === SITE_URL) &&
			r.value.path?.startsWith('/blog/')
	)
	const existingBySlug = new Map()
	for (const record of documents) {
		const slug = record.value.path.slice('/blog/'.length)
		if (!existingBySlug.has(slug)) existingBySlug.set(slug, [])
		existingBySlug.get(slug).push(record)
	}
	// Oldest first (rkeys are timestamp-sortable); the first is the keeper,
	// any others are duplicates
	for (const records of existingBySlug.values()) {
		records.sort((a, b) => a.uri.localeCompare(b.uri))
	}

	// 3. One document record per published post
	const files = (await readdir(POSTS_DIR))
		.filter((f) => f.endsWith('.md'))
		.sort()
	const slugToUri = {}
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
			site: publicationUri ?? SITE_URL,
			path: `/blog/${slug}`,
			title: meta.title,
			publishedAt: toDatetime(meta.date),
			...(meta.updated ? { updatedAt: toDatetime(meta.updated) } : {}),
			...(meta.excerpt ? { description: meta.excerpt } : {}),
			...(meta.categories?.length ? { tags: meta.categories } : {})
		}

		const existing = existingBySlug.get(slug)?.[0]
		if (!existing) {
			if (dryRun) {
				console.log(`would create: ${slug}`)
			} else {
				const { uri } = await createRecord('site.standard.document', record)
				slugToUri[slug] = uri
				console.log(`created: ${slug}`)
			}
			created++
			continue
		}

		slugToUri[slug] = existing.uri
		if (stableStringify(existing.value) === stableStringify(record)) {
			unchanged++
			continue
		}
		if (dryRun) {
			console.log(`would update: ${slug}`)
		} else {
			await putRecord(
				'site.standard.document',
				existing.uri.split('/').pop(),
				record
			)
			console.log(`updated: ${slug}`)
		}
		updated++
	}

	// 4. Records with no matching post (deleted posts, or duplicates of a
	// kept record). Deleted only with --prune, listed otherwise.
	const orphans = []
	for (const [slug, records] of existingBySlug) {
		const extras = slugs.has(slug) ? records.slice(1) : records
		orphans.push(...extras.map((r) => ({ slug, uri: r.uri })))
	}
	if (orphans.length && slugs.size === 0) {
		throw new Error('No posts found — refusing to prune anything')
	}
	for (const { slug, uri } of orphans) {
		if (!prune) {
			console.warn(
				`orphaned record (rerun with --prune to delete): ${slug} ${uri}`
			)
		} else if (dryRun) {
			console.log(`would delete: ${slug} ${uri}`)
		} else {
			await deleteRecord('site.standard.document', uri.split('/').pop())
			console.log(`deleted: ${slug} ${uri}`)
		}
	}

	// 5. Write the generated files
	if (!dryRun && publicationUri) {
		const map = {
			publication: publicationUri,
			documents: Object.fromEntries(
				Object.entries(slugToUri).sort(([a], [b]) => a.localeCompare(b))
			)
		}
		await writeFile(MAP_PATH, JSON.stringify(map, null, '\t') + '\n')
		await mkdir(dirname(WELL_KNOWN_PATH), { recursive: true })
		await writeFile(WELL_KNOWN_PATH, publicationUri + '\n')
	}

	console.log(
		`\n${dryRun ? '[dry run] ' : ''}${created} created, ${updated} updated, ${unchanged} unchanged, ${orphans.length} orphaned (${slugs.size} published posts)`
	)
}

try {
	await run()
} catch (error) {
	if (!softFail) throw error
	console.error(
		`standard.site sync failed (continuing anyway): ${error.message}`
	)
}
