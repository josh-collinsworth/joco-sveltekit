<script context="module" lang="ts">
	import type { LoadOutput } from '@sveltejs/kit'

	export const load = async ({ fetch }): Promise<LoadOutput> => {
    //All these here just for rendering routes properly with the router
    const rss = await fetch('/api/rss.xml')
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
  import type Post from '$lib/assets/js/interfaces/post'
  
  import Sidebar from '$lib/components/Sidebar.svelte'

  export let recentPosts: Post[]
  export let allCategories: string[]
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