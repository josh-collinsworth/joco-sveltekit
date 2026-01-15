import devtoolsJson from 'vite-plugin-devtools-json'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), devtoolsJson()],
	onwarn: (warning, handler) => {
		if (warning.code === 'element_implicitly_closed') return
		handler(warning)
	}
}

export default config
