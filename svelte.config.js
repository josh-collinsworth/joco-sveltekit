  import preprocess from 'svelte-preprocess'
  import adapter from '@sveltejs/adapter-static'
  import { mdsvex } from 'mdsvex'
	import rehypeAutolinkHeadings from 'rehype-autolink-headings'
	import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import 'src/lib/assets/scss/_vars.scss';`
			},
		}),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				alias: { vue: 'html' }
			},
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			]
			//Optional: add a layout here
		}),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		//Added for static adapter
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
}

export default config;
