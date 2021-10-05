<script context="module" lang="ts">
	export async function load({ fetch, page }) {
    const category = page.params.category
    //TODO: maybe add a way to fetch with query parameter to avoid filtering?
		const res = await fetch(`/blog/posts-detail.json`)
		let { posts } = await res.json()

    const matchingPosts = posts
      .filter(post => post.categories.includes(category))

		return {
			props: { 
        posts: matchingPosts,
        category
      }
		}
	}
</script>

<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import PostList from '$lib/components/posts/PostList.svelte'
  import PageHeading from '$lib/components/PageHeading.svelte'

  export let posts: Post[]
  export let category: string
</script>


<svelte:head>
  <title>Blog | Category: {category}</title>
</svelte:head>

<PageHeading title="Category: { category }" />

<PostList {posts} />  
