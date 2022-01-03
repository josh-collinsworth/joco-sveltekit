<script lang="ts">
  import type Post from '$lib/assets/js/interfaces/post'

  import TagList from './tags/TagList.svelte'
  import Tag from './tags/Tag.svelte'
  
  export let recentPosts: Post[]
  export let allCategories: string[]
</script>


<aside>
  <h2>Recent blog posts</h2>

  <ul class="sidebar__posts-list">
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
  
  <h2>More links</h2>

  <ul>
    <li>
      <a href="/blog">All blog posts</a>
    </li>
    <li>
      <a href="/writing-and-speaking">Other writing & speaking</a>
    </li>
    <li>
      <a href="/">Home</a>
    </li>
  </ul>
</aside>


<style lang="scss" global>
  #sidebar {
    font-size: .85rem;
    align-self: start;
    position: sticky;
    top: var(--halfNote);
    max-width: var(--max-width);
    font-family: var(--heading-font);
    grid-row: 3 / 4;
	  margin: var(--dottedHalfNote)  auto 0;
    
    @media (min-width: $lg) {
      grid-column: auto;
      grid-row: auto;
      margin: 0;
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
              left: -.35em;
            }
          }

          &:hover,
          &:focus {
            outline: none;

            &:after {
              position: absolute;
              content: ']';
            }
          }
        }
      }
    }
  }
</style>
