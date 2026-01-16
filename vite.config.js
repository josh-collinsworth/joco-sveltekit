import devtoolsJson from 'vite-plugin-devtools-json'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), devtoolsJson()]
}

export default config
