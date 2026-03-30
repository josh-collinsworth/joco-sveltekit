import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, test } from 'vitest'

const BUILD_DIR = resolve(import.meta.dirname, '../../build')

/**
 * These tests run against the static build output.
 * Run with: npm test (which builds first, then runs vitest)
 *
 * Tests are intentionally super basic because they're just here to
 * prevent major catastrophes and let's be honest: it's just my blog.
 */

describe('build', () => {
	test('build output directory exists', () => {
		expect(existsSync(BUILD_DIR)).toBe(true)
	})
})

describe('routes', () => {
	const expectedRoutes = [
		'index.html',
		'about-me.html',
		'blog.html',
		'contact.html',
		'projects.html',
		'resume.html',
		'uses.html'
	]

	test.each(expectedRoutes)('%s exists', (route) => {
		const filePath = resolve(BUILD_DIR, route)
		expect(existsSync(filePath), `Missing route: ${route}`).toBe(true)
	})

	test('blog posts are generated', () => {
		const blogDir = resolve(BUILD_DIR, 'blog')
		expect(existsSync(blogDir)).toBe(true)

		const entries = readdirSync(blogDir)
		const postFiles = entries.filter(
			(name: string) => name.endsWith('.html') && name !== 'category.html'
		)
		expect(postFiles.length).toBeGreaterThan(0)
	})
})

describe('RSS feed', () => {
	const rssPath = resolve(BUILD_DIR, 'api/rss.xml')

	test('rss.xml exists', () => {
		expect(existsSync(rssPath)).toBe(true)
	})

	test('rss.xml is valid XML with expected structure', () => {
		const content = readFileSync(rssPath, 'utf-8')

		expect(content).toContain('<?xml version="1.0"')
		expect(content).toContain('<rss version="2.0"')
		expect(content).toContain('<channel>')
		expect(content).toContain('<title>Josh Collinsworth</title>')
		expect(content).toContain('</channel>')
		expect(content).toContain('</rss>')
	})

	test('rss.xml contains at least one item', () => {
		const content = readFileSync(rssPath, 'utf-8')
		const itemCount = (content.match(/<item>/g) || []).length
		expect(itemCount).toBeGreaterThan(0)
	})

	test('rss.xml items have required fields', () => {
		const content = readFileSync(rssPath, 'utf-8')
		// Extract first item
		const firstItem = content.match(/<item>[\s\S]*?<\/item>/)?.[0]
		expect(firstItem).toBeDefined()
		expect(firstItem).toContain('<title>')
		expect(firstItem).toContain('<link>')
		expect(firstItem).toContain('<pubDate>')
		expect(firstItem).toContain('<guid')
	})
})

describe('sitemap', () => {
	const sitemapPath = resolve(BUILD_DIR, 'sitemap.xml')

	test('sitemap.xml exists', () => {
		expect(existsSync(sitemapPath)).toBe(true)
	})

	test('sitemap.xml is valid XML with expected structure', () => {
		const content = readFileSync(sitemapPath, 'utf-8')

		expect(content).toContain('<?xml version="1.0"')
		expect(content).toContain('<urlset')
		expect(content).toContain('</urlset>')
	})

	test('sitemap.xml contains key pages', () => {
		const content = readFileSync(sitemapPath, 'utf-8')

		const expectedUrls = [
			'https://joshcollinsworth.com/about-me',
			'https://joshcollinsworth.com/blog',
			'https://joshcollinsworth.com/contact',
			'https://joshcollinsworth.com/resume',
			'https://joshcollinsworth.com/projects'
		]

		for (const url of expectedUrls) {
			expect(content, `Missing URL: ${url}`).toContain(url)
		}
	})

	test('sitemap.xml contains blog post URLs', () => {
		const content = readFileSync(sitemapPath, 'utf-8')
		const blogUrls = content.match(/joshcollinsworth\.com\/blog\/[^<]+/g) || []
		expect(blogUrls.length).toBeGreaterThan(0)
	})
})
