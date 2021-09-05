<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post.js'
  import LogoSVG from './header/LogoSVG.svelte'
  
  import { onMount } from 'svelte'
  
  let posts: Post[] = []
  let allCategories: string[] = []
  let onBlogIndexPage: boolean = false
  
  onMount(async () => {
    if (typeof window !== 'undefined') {
      onBlogIndexPage = window.location.pathname === '/blog'
    }
  
    const res = await fetch('/blog/posts-detail.json')
    const resJSON = await res.json()
    
    posts = resJSON.posts
      .map(post => ({ slug: post.slug, title: post.title }))
      .sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date)))
      .slice(0, 3)
    
    allCategories = Array.from(new Set(resJSON.posts.flatMap(p => p.categories)))
  })
</script>

<aside id="sidebar">
  <a href="/" class="home-link">
    <LogoSVG iconOnly={true} />
  </a>

  <h2>Links</h2>
  <ul>
    <li>
      <a href="/contact">
        Contact
      </a>
    </li>
    <!-- <li>
      <a href="/projects">
        Projects
      </a>
    </li> -->
    <li>
      <a rel="external" href="https://github.com/josh-collinsworth">
        GitHub
      </a>
    </li>
    <li>
      <a rel="external" href="https://codepen.io/collinsworth/">
        CodePen
      </a>
    </li>
  </ul>

  <h2>Recent posts</h2>
  <ul>
    {#if !posts.length}
      <li>Loading…</li>
    {/if}
    {#each posts as post}
      <li>
        <a href="/blog/{post.slug}">
          {post.title}
        </a>
      </li>
    {/each}
    {#if !onBlogIndexPage}
      <li>
        <a href="/blog">
          More…
        </a>
      </li>
    {/if}
  </ul>

  <h2>Categories</h2>
  <ul class="display-flex">
    {#each allCategories as category}
      <li>
        <a href="/blog/category/{category}">
          { category }
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

  @media (min-width: $widest) {
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
    margin: 3em 0 1.5em;
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

        &:hover,
        &:focus {
          outline: none;

          &:before,
          &:after {
            position: absolute;
          }

          &:before {
            content: '[';
            left: -.5em;
          }
          &:after {
            content: ']';
            right: -.5em;
          }
        }
      }
    }
  }
}
</style>
