	import autoprefixer from 'autoprefixer'
  import adapter from '@sveltejs/adapter-static'
  import { mdsvex } from 'mdsvex'
	import rehypeAutolinkHeadings from 'rehype-autolink-headings'
	import rehypeSlug from 'rehype-slug'
	import { sveltePreprocess } from 'svelte-preprocess'

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
			],
		}),
		sveltePreprocess({
			scss: {
				prependData: `@use 'src/lib/assets/scss/vars';`
			},
			postcss: {
				plugins: [autoprefixer]
			}
		}),
	],

	kit: {
		adapter: adapter(),
	}
}

export default config;
