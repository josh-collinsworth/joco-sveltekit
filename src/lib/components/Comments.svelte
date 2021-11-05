<script lang="ts">
  import { onMount } from 'svelte'
  import { TIMING_DURATION } from '$lib/data/constants'
  import { prefersDarkMode } from '$lib/data/store'

  onMount(() => {
    // setTimeout is used because if this runs too soon it will "miss" and fail to load due to page transitions
    setTimeout(() => {
      const s = document.createElement('script')
      const tag = document.getElementById('utterances-comments')
      s.setAttribute('repo', 'josh-collinsworth/joco-sveltekit')
      s.setAttribute('issue-term', 'pathname')
      s.setAttribute('label', 'comments')
      // TODO: if a user changes theme on the page, the comments won't update with the theme.
      s.setAttribute('theme', $prefersDarkMode ? 'github-dark' : 'github-light')
      s.setAttribute('crossorigin', 'anonymous')
      s.src = 'https://utteranc.es/client.js'
      tag.parentNode.insertBefore(s, tag)
    }, TIMING_DURATION)
  })
</script>

<div id="utterances-comments" />