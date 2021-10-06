<script lang="ts">
  import Grid from './Grid.svelte'

  const currentYear: number = new Date().getFullYear()
</script>


<div class="footer-wrapper">
  <Grid inverted={true} />
  <footer class="footer">
    <div>
      <nav>
        <ul class="footer__links">
          <li><a href="/">About me</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/writing-and-speaking">Writing & Speaking</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <ul class="footer__links">
        <li><a href="/rss.xml">RSS</a></li>
        <li><a rel="external" href="https://github.com/josh-collinsworth">GitHub</a></li>
        <li><a rel="external" href="https://codepen.io/collinsworth">CodePen</a></li>
        <li><a rel="external" href="https://twitter.com/jjcollinsworth">Twitter</a></li>
      </ul>
    </div>

    <div class="fine-print">
      <p>©2015–{ currentYear } Josh Collinsworth.</p>

      <p>
        Made with love and
        <del>WordPress</del>
        <del>Gridsome</del>
        <a rel="external" href="https://kit.svelte.dev/">SvelteKit</a>;
        <br />
        hosted on <a rel="external" href="https://netlify.com">Netlify</a>.
      </p>
    </div>
  </footer>
</div>


<style lang="scss">
  .footer {
    width: 100%;
    background: var(--darkBlue);
    color: var(--white);
    font-size: .75rem;
    line-height: 1.6em;
    padding: 2.5rem var(--margin) 2rem;

    @media (min-width: $xs) {
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      align-items: center;
    }

    a {
      color: inherit;
    }

    &-wrapper {
      overflow: hidden;
      max-width: 100vw;
    }

    &__links {
      list-style-type: square;
      padding: 0 1rem 1rem;
      margin: 2rem 2rem 2rem 1rem;
      border-bottom: 1px solid var(--lightBlue);

      @media (min-width: $xs) {
        border-bottom: 0;
        border-right: 1px solid var(--lightBlue);
        padding: 1rem;
        margin-left: 0;
      }

      li {
        margin: 0 0 .5rem;
        font-family: var(--accent-font);
      }
    }

    .fine-print {
      font-style: italic;
      margin-left: 1rem;

      @media (min-width: $xs) {
       margin-left: 0;
      }

      p {
        margin: .5rem 0;
        max-width: 44em;
      }
    }
  }
</style>
