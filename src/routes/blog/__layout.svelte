<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit'

	export const load = async ({ fetch }): Promise<LoadOutput> => {
    const rss = await fetch('/api/rss.xml') // This isn't used; it's just here to make sure the route gets prerendered
		const res = await fetch('/api/posts.json')
		const resJSON = await res.json()
		
		const recentPosts = resJSON.posts
			.map(post => ({ slug: post.slug, title: post.title }))
			.slice(0, 5)
		
		const allCategories = Array.from(new Set(resJSON.posts.flatMap(p => p.categories)))

		return {
			props: {
				recentPosts,
				allCategories
			}
		}
	}
</script>


<script lang="ts">
  import type Post from '$lib/types/post'
  
  import Sidebar from '$lib/components/Sidebar.svelte'
  import { prefersReducedData } from '$lib/assets/js/utils'
  import { prefetch } from '$app/navigation'
  import { onMount } from 'svelte'

  export let recentPosts: Post[]
  export let allCategories: string[]

  onMount(() => {
    if (!prefersReducedData()) {
      // TODO: should maybe make this the posts on each page, and not just the most recent five.
      recentPosts.forEach(post => {
        prefetch(`/blog/${post.slug}`)
      })
    }
  })
</script>


<div class="layout-grid">
  <div class="sidebar-wrapper">
    <Sidebar {recentPosts} {allCategories} />
  </div>
  
  <slot />
</div>


<style lang="scss">
  .layout-grid {
    display: grid;
    grid-template-columns: 100%;
    
    @media (min-width: $lg) {
      grid-gap: 0 var(--halfNote);
      grid-template-columns: var(--sidebarWidth) 1fr var(--sidebarWidth);
    }
  }

  .sidebar-wrapper {
    display: none;
    
    @media (min-width: $lg) {
      display: block;
      align-self: start;
      position: sticky;
      top: var(--halfNote);
    }
  }
</style>