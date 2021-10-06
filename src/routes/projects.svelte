<script lang="ts">
  import { appendScriptToHead } from '$lib/assets/js/utils'
  import { onMount } from 'svelte'

  onMount(() => {
    const codePenEmbedURL = 'https://static.codepen.io/assets/embed/ei.js'
    appendScriptToHead(codePenEmbedURL)
  })
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
    <img
      src="/images/post_images/01-Google-Pixel-4-Front.jpg"
      alt="The main menu of Quina, with options for 'New Game', 'How to Play', 'Preferences,' Stats & Awards', 'About/FAQ', and 'Support Quina.'"
      loading="lazy"
      width="1030"
      height="1200"
      style="aspect-ratio: 103 / 120"
    />
    <img
      src="/images/quina-mockup1.png"
      alt=""
      loading="lazy"
      width="1200"
      height="1697"
      style="aspect-ratio: 1200 / 1697"
    />
    <img
      src="/images/post_images/tutorial-1.png"
      alt="Guess the secred five-letter code word in ten guesses or fewer."
      loading="lazy"
      width="1600"
      height="900"
      style="aspect-ratio: 16 / 9"
    />
    <img
      src="/images/quina-clues.png"
      alt="Use clues to refine your guesses. A clue of '3/2' means three letters in your guess are also in the code word, and two are in the same position in both words."
      loading="lazy"
      width="1600"
      height="900"
      style="aspect-ratio: 16 / 9"
    />
    <img
      src="/images/post_images/tutorial-3.png"
      alt="You can tap or long-press letters in your guesses to cross them out or highlight them"
      loading="lazy"
      width="1600"
      height="900"
      style="aspect-ratio: 16 / 9"
    />
    <img
      src="/images/post_images/tutorial-4.png"
      alt="Quina tracks your stats, such as how many games you've played on each difficulty, longest win streak, and many more!"
      loading="lazy"
      width="1600"
      height="900"
      style="aspect-ratio: 16 / 9"
    />
    <img
      src="/images/post_images/02-Google-Pixel-4-Front.png"
      alt="Quina features both light and dark mode."
      loading="lazy"
      width="1600"
      height="1442"
    />
  </div>
</article>
  
<article>
  <div class="sticky">
    <h2>CodePen Projects</h2>
    <p>A sampling of some games and experiments I've built on <a href="https://codepen.io/collinsworth" rel="external">CodePen</a>, mostly in Vue, but some in React or vanilla JS as well.</p>
    <p>You can also find my work on <a href="https://github.com/josh-collinsworth">GitHub</a> (although truth be told I don't really bother curating it there at all.)</p>
  </div>
  <div class="codepens">
    <h3 class="h4">Sliding Puzzle in Vue</h3>
    <p class="codepen" data-height="620" data-theme-id="37288" data-default-tab="result" data-slug-hash="XwPXrM" data-preview="true" data-editable="true" data-user="collinsworth" style="height: 620px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/collinsworth/pen/XwPXrM">
      Sliding Puzzle in Vue </a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <h3 class="h4">Custom Accessible Vue Emoji Slider</h3>
    <p class="codepen" data-height="450" data-theme-id="37288" data-default-tab="result" data-slug-hash="OYgGNK" data-preview="true" data-editable="true" data-user="collinsworth" style="height: 450px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/collinsworth/pen/OYgGNK">
      Custom Accessible Vue Emoji Slider</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p> 
    <h3 class="h4">Emoji Pick Two</h3>
    <p class="codepen" data-height="360" data-theme-id="37288" data-default-tab="result" data-slug-hash="vYOPKqx" data-preview="true" data-editable="true" data-user="collinsworth" style="height: 320px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/collinsworth/pen/vYOPKqx">
      Emoji Pick Two</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <h3 class="h4">Vue Hangman</h3>
    <p class="codepen" data-height="800" data-theme-id="37288" data-default-tab="result" data-slug-hash="oNbavJN" data-preview="true" data-editable="true" data-user="collinsworth" style="height: 540px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/collinsworth/pen/oNbavJN">
      Vue Hangman</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <h3 class="h4">Interactive CSS Filter React Component</h3>
    <p class="codepen" data-height="580" data-theme-id="37288" data-default-tab="result" data-slug-hash="bKXoRN" data-preview="true" data-editable="true" data-user="collinsworth" style="height: 520px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/collinsworth/pen/bKXoRN">
      Interactive CSS Filter React Component (with GIFs!)</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <h3 class="h4">React Color Flood Game</h3>
    <p class="codepen" data-height="651" data-theme-id="37288" data-default-tab="result" data-slug-hash="Pymdxo" data-preview="true" data-editable="true" data-user="collinsworth" style="height: 651px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/collinsworth/pen/Pymdxo">
      Color Flood Game with Colorblind Mode (React + CSS Grid)</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <h3 class="h4">Connect Four in Vue and CSS</h3>
    <p class="codepen" data-height="530" data-theme-id="37288" data-default-tab="result" data-slug-hash="MWwXpLd" data-preview="true" data-editable="true" data-user="collinsworth" style="height: 530px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/collinsworth/pen/MWwXpLd">
      Connect Four in Vue and CSS</a> by Josh Collinsworth (<a href="https://codepen.io/collinsworth">@collinsworth</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
  </div>
</article>

<style lang="scss">
  p {
    max-width: var(--max-width);
  }

  article {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
    
    @media (min-width: $xs) {
      grid-template-columns: 2fr 3fr;

      .sticky {
        position: sticky;
        top: 2rem;
      }
    }

    @media (min-width: $lg) {
      grid-template-columns: 2fr 3fr;
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
    font-weight: bold;

    &:first-of-type {
      margin-top: 0;
    }
  }
</style>