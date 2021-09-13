<script lang="ts">
  import CodePen from '$lib/content/codepen'
</script>


<svelte:head>
  <title>Josh Collinsworth | Projects</title>
	<meta data-key="description" name="description" content="A sampling of apps and code projects.">
</svelte:head>

<article>
  <div class="sticky">
    <h2>Featured project: Quina</h2>
    
    <p>Quina is a strategic, logical word game available on 
      <a href="https://play.google.com/store/apps/details?id=app.quina.collinsworth&hl=en_US&gl=US" rel="external">Google Play</a>
      and as a <a href="https://quina.app" rel="external">Progressive Web App</a>. 
      I wrote about the process of building the app and the tech behind it both 
      <a href="/blog/announcing-quina-my-first-app">on this blog</a> and 
      <a rel="external" href="https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/">CSS Tricks</a>.
    </p>
  </div>
  
  <div class="image-gallery">
    <img src="/images/post_images/01-Google-Pixel-4-Front.jpg" height="250" alt="" loading="lazy" />
    <img src="/images/quina-mockup1.png" height="250" alt="" loading="lazy" />
    <img src="/images/post_images/tutorial-1.png" alt="" loading="lazy" height="250"/>
    <img src="/images/quina-clues.png" height="250" alt="" loading="lazy" />
    <img src="/images/post_images/tutorial-3.png" alt="" loading="lazy" height="250"/>
    <img src="/images/post_images/tutorial-4.png" alt="" loading="lazy" height="250"/>
    <img src="/images/post_images/02-Google-Pixel-4-Front.png" height="250" alt="" loading="lazy" />
  </div>
</article>
  
{@html CodePen}

<style lang="scss" global>
  p {
    max-width: var(--max-width);
  }

  article {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
    
    @media (min-width: $narrow) {
      grid-template-columns: 2fr 3fr;

      .sticky {
        position: sticky;
        top: 2rem;
      }
    }

    @media (min-width: $wider) {
      grid-template-columns: 22rem var(--max-width) 1fr;
    }

    + article {
      margin-top: 6rem;
    }

    img {
      margin: 0 auto 2rem;
      display: block;
      max-width: 100%;
    }
  }

  .codepens > h3 {
    margin-bottom: .5rem;

    &:first-of-type {
      margin-top: 0;
    }
  }
</style>