<script lang="ts">
  import type { LayoutData } from './$types'
  import type Post from '$lib/types/post'
  import Sidebar from '$lib/components/Sidebar.svelte'
  import { prefersReducedData } from '$lib/assets/js/utils'
  import { prefetch } from '$app/navigation'
  import { onMount } from 'svelte'
  
  export let data: LayoutData

  let recentPosts: Post[]
  let allCategories: string[]
  $: ({ recentPosts, allCategories } = data)

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
    
    @media (min-width: vars.$lg) {
      grid-gap: 0 var(--halfNote);
      grid-template-columns: var(--sidebarWidth) 1fr var(--sidebarWidth);
    }
  }

  .sidebar-wrapper {
    display: none;
    
    @media (min-width: vars.$lg) {
      display: block;
      align-self: start;
      position: sticky;
      top: var(--halfNote);
    }
  }
</style>