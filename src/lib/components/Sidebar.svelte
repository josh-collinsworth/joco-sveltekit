<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import LogoSVG from './header/LogoSVG.svelte'
  import { isLoading } from '$lib/data/store'
  
  import { onMount } from 'svelte'
  import TagList from './tags/TagList.svelte'
  import Tag from './tags/Tag.svelte'
  
  let recentPosts: Post[] = []
  let allCategories: string[] = []
  
  onMount(async () => {
    try {
      const res = await fetch('/blog/posts-detail.json')
      const resJSON = await res.json()
      
      recentPosts = resJSON.posts
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .map(post => ({ slug: post.slug, title: post.title }))
        .slice(0, 5)
      
      allCategories = Array.from(new Set(resJSON.posts.flatMap(p => p.categories)))
    }
    catch(error) {
      recentPosts = []
    }
  })
</script>


<aside>
  <a href="/" class="home-link">
    <LogoSVG iconOnly={true} />
  </a>

  <h2>Recent blog posts</h2>
  <ul class="sidebar__posts-list">
    {#if !recentPosts.length}
      Loading…
    {/if}
    {#each recentPosts as post}
      <li>
        <a href="/blog/{post.slug}" sveltekit:prefetch>
          <span>{post.title}</span>
        </a>
      </li>
    {/each}
  </ul>

  <h2>Categories</h2>
  <TagList>
    {#each allCategories as category}
    <Tag to="/blog/category/{category}">
      { category }
    </Tag>
    {/each}
  </TagList>
  
  <h2>More</h2>
  <ul>
    <li>
      <a href="/blog">All blog posts</a>
    </li>
    <li>
      <a href="/writing-and-speaking">Other writing & speaking</a>
    </li>
  </ul>
</aside>


<style lang="scss" global>
  #sidebar {
    font-size: .85rem;
    align-self: start;
    position: sticky;
    top: calc(var(--rhythm) * 2);
    max-width: calc(var(--sidebar-width) * 1.5);
    font-family: var(--heading-font);
    
    @media (min-width: $lg) {
      text-align: right;
    }

    .home-link {
      display: none;
      
      @media (min-width: $lg) {
        margin: 0 0 1rem 0;
        width: 1.5rem;
        overflow: hidden;
        display: block;
        margin-left: auto;
      }
      
      svg {
        width: 500%;
      }
    }
    
    h2 {
      font-size: .8em;
      font-weight: bold;
      text-transform: uppercase;
      margin: 3em 0 1em;
      padding: 0 0 .1em 0;
      border: none;
      border-bottom: .15em solid;
      width: max-content;
      text-align: inherit;

      @media (min-width: $lg) {
        margin-left: auto;
      }

      &:first-of-type {
        margin-top: 0;
      }

      &::before {
        display: none;
      }
    }

    ul {
      margin: 0;
      list-style-type: none;
      padding: 0;
      line-height: 1.2;

      @media (min-width: $lg) {
        justify-content: flex-end;
      }

      &.tag-list li {
        margin: 0;
        font-size: inherit;
      }

      &.sidebar__posts-list li {
        font-size: inherit;

        a {
          font-size: inerit;
          color: inherit;
          text-decoration: none;
          position: relative;
          display: inline-block;

          &:hover span,
          &:focus span {
            position: relative;
            outline: none;

            &:before {
              position: absolute;
              content: '[';
              left: -.5em;
            }
          }

          &:hover,
          &:focus {
            outline: none;

            &:after {
              position: absolute;
              content: ']';
              right: -.5em;
            }
          }
        }
      }
    }
  }
</style>
