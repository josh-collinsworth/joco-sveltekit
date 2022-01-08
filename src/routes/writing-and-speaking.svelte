<script lang="ts">
  import { EXTERNAL_POSTS } from '$lib/data/external_posts'
  import { talks } from '$lib/data/talks'
  import PostList from '$lib/components/posts/PostList.svelte'
  import Main from '$lib/components/Main.svelte'
</script>


<Main>
  <div class="compressed-content wider writing">
    <h2>Writing</h2>
    <p class="subhead">Articles written for other publications.</p>
    <hr>
    <PostList posts={EXTERNAL_POSTS} external={true} />
    
    <h2>Speaking, etc.</h2>
    <p class="subhead">To do: add slide decks where possible.</p>
    <hr>
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
  </div>
</Main>


<style lang="scss">
  .writing {
    h2 {
      margin-bottom: var(--quarterNote);
    }
    
    hr {
      margin: var(--quarterNote) 0 var(--dottedHalfNote) ;
    }
    
    .subhead {
      font-size: 1.1rem;
      font-style: italic;
      margin: 0;
    }
  }
</style>