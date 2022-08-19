<script lang="ts">
  import type { PageData } from './$types'
  import type { SvelteComponent } from 'svelte'
  import type Post from '$lib/types/post'

  import RenderedPost from '$lib/components/RenderedPost.svelte'

  export let data: PageData
  let PostContent: SvelteComponent = data.PostContent
  let meta: Post = data.meta
</script>


<RenderedPost {PostContent} {meta} />
