<script lang="ts">
  import { onMount } from 'svelte'
  import { TIMING_DURATION } from '$lib/data/constants'
  import { prefersDarkMode } from '$lib/data/store'

  const siteTheme = $prefersDarkMode ? 'github-dark' : 'github-light'

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
      const tag = document.getElementById('utterances-comments')
    
      for (const prop in options) {
        utteranceScript.setAttribute(prop, options[prop])
      }

      tag.appendChild(utteranceScript)
    }, TIMING_DURATION)
  })
</script>

<div id="utterances-comments" />