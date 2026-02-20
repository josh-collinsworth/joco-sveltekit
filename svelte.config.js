import autoprefixer from 'autoprefixer'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { sveltePreprocess } from 'svelte-preprocess'
import { myFootnoteRehypePlugin } from './src/lib/assets/js/footnoteRehypePlugin.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			highlight: {
				alias: { vue: 'html' }
			},
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
				myFootnoteRehypePlugin
			]
		}),
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			}
		})
	],

	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	},

	compilerOptions: {
		// This is a temporary workaround to suppress warnings about the way I'm handling footnotes in the custom rehype plugin. The warnings are expected and don't indicate any actual issues, but they were cluttering up the console during development.
		warningFilter: (warning) => {
			if (
				warning.code === 'element_implicitly_closed' &&
				warning.message.includes('</footnote>')
			)
				return false
			return true
		}
	}
}

export default config
