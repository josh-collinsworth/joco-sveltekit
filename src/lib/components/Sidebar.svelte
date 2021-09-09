<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'
  import LogoSVG from './header/LogoSVG.svelte'
  import { EXTERNAL_POSTS } from '$lib/assets/js/constants'
  
  import { onMount } from 'svelte'
  
  let posts: Post[] = []
  let allCategories: string[] = []
  
  onMount(async () => {
    try {
      const res = await fetch('/blog/posts-detail.json')
      const resJSON = await res.json()
      
      posts = resJSON.posts
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .map(post => ({ slug: post.slug, title: post.title }))
        .slice(0, 3)
      
      allCategories = Array.from(new Set(resJSON.posts.flatMap(p => p.categories)))
    }
    catch(error) {
      posts = [{ title: 'ERROR'}]
    }
  })
</script>


<aside id="sidebar">
  <a href="/" class="home-link">
    <LogoSVG iconOnly={true} />
  </a>

  <h2>External Writing</h2>
  <ul>
    {#if !EXTERNAL_POSTS.length}
      <li>Loading…</li>
    {/if}
    {#each EXTERNAL_POSTS as post}
      <li>
        <a rel="external" href="{post.slug}">
          <span>{post.title}</span>
        </a>
      </li>    
    {/each}
  </ul>

  <h2>Recent blog posts</h2>
  <ul>
    {#if !posts.length}
      <li>Loading…</li>
    {/if}
    {#each posts as post}
      <li>
        <a href="/blog/{post.slug}">
          <span>{post.title}</span>
        </a>
      </li>
    {/each}
  </ul>

  <h2>Categories</h2>
  <ul class="display-flex">
    {#each allCategories as category}
      <li>
        <a href="/blog/category/{category}">
          <span>{ category }</span>
        </a>
      </li>
    {/each}
  </ul>
</aside>


<style lang="scss" global>
@import '../assets/scss/_vars.scss';

#sidebar {
  font-size: .85rem;
  display: none;
  align-self: start;
  position: sticky;
  top: 2rem;
  grid-column: 3 / 4;
  text-align: right;

  @media (min-width: $wider) {
    display: block;
  }

  .home-link {
    display: block;
    margin: 0 0 1rem auto;
    width: 1.5rem;
    overflow: hidden;

    svg {
      width: 500%;
    }
  }

  h2 {
    font-family: var(--body-font);
    font-size: .8em;
    font-weight: bold;
    text-transform: uppercase;
    margin: 3em 0 1em;
    padding: 0 0 .1em 0;
    border: none;
    border-bottom: .15em solid;

    &:first-of-type {
      margin-top: 0;
    }
  }

  ul {
    margin: 0;
    list-style-type: none;
    padding: 0;
    justify-content: flex-end;
    line-height: 1.2;

    &.display-flex li {
      margin-left: .75em;
    }

    li {
      font-size: inherit;
      margin-bottom: .6em;

      a {
        font-size: inerit;
        color: inherit;
        text-decoration-color: var(--lightGray);
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
