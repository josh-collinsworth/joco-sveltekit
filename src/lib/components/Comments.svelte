<script lang="ts">
	import { onMount } from 'svelte'
	import { TIMING_DURATION } from '$lib/data/constants'
	import { Themes } from '$lib/data/constants'
	import { theme } from '$lib/data/store'

	const siteTheme = $theme === Themes.Dark ? 'github-dark' : 'github-light'

	const options = {
		src: 'https://utteranc.es/client.js',
		repo: 'josh-collinsworth/joco-sveltekit',
		label: 'comments',
		crossorigin: 'anonymous',
		theme: siteTheme,
		async: '',
		'issue-term': 'pathname',
	}

	onMount(() => {
		// setTimeout is used because if this runs too soon it will "miss" and fail to load due to page transitions
		setTimeout(() => {
			const utteranceScript = document.createElement('script')
			const targetTag = document.getElementById('utterances-comments')
		
			for (const prop in options) {
				utteranceScript.setAttribute(prop, options[prop])
			}

			targetTag.appendChild(utteranceScript)
		}, TIMING_DURATION)
	})
</script>

<noscript>JavaScript must be enabled to leave comments.</noscript>
<div id="utterances-comments" />