<script lang="ts">
  import { EXTERNAL_POSTS } from "$lib/data/external_posts"
  import { talks } from '$lib/data/talks'
  import PostList from '$lib/components/posts/PostList.svelte'
</script>


<h2>Writing</h2>

<hr />

<p class="subhead">A list of articles I've written for other publications.</p>

<PostList posts={EXTERNAL_POSTS} external={true} />

<h2>Speaking</h2>

<hr />

<p class="subhead"></p>


<ul>
  {#each talks as talk}
    <li>
      <b>
        {#if talk.link}
        <a href={talk.link} rel="external">
          {talk.title}
        </a>
        {:else}
        {talk.title}
        {/if}
      </b>
      <br />
      <i>{talk.event}</i>
    </li>
  {/each}
</ul>

<style lang="scss">
  h2 {
    margin-bottom: 0;
  }

  .subhead {
    font-size: 1.1rem;
    font-style: italic;
    margin: 0;
  }

  hr {
    margin: 0.5rem 0;
  }
</style>