import { sveltekit } from '@sveltejs/kit/vite'
import devtoolsJson from 'vite-plugin-devtools-json'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), devtoolsJson()],
	build: {
		target: 'es2022'
	},
	css: {
		transformer: 'lightningcss',
		devSourcemap: true
	}
}

export default config
