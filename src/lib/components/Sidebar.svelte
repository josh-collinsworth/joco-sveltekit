
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
</aside>



<script lang="ts">
// import TagList from './TagList'
// import Tag from './Tag'
import { onMount } from 'svelte'
import LogoSVG from './header/LogoSVG.svelte'

let posts: object[] = []
let onBlogIndexPage: boolean = false

onMount(async () => {
  if (typeof window !== 'undefined') {
    onBlogIndexPage = window.location.pathname === '/blog'
  }

  const res = await fetch('/blog/posts.json')
  const resJSON = await res.json()
  const info = resJSON.posts
    .map(post => ({ slug: post.slug, title: post.title }))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3)
  
  posts = info
})
</script>



<style lang="scss" global>
#sidebar {
  font-size: .85rem;
  display: none;
  align-self: start;
  position: sticky;
  top: 2rem;
  grid-column: 3 / 4;
  text-align: right;

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
