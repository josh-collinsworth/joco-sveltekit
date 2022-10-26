  import preprocess from 'svelte-preprocess'
	import autoprefixer from 'autoprefixer'
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
				prependData: `@use 'src/lib/assets/scss/vars';`
			},
			postcss: {
				plugins: [autoprefixer]
			}
		}),
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
	],

	kit: {
		adapter: adapter(),
    prerender: {
      entries: [
        '*'
      ]
    }
	}
}

export default config;
