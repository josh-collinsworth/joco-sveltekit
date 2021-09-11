<script lang="ts">
  import Grid from './Grid.svelte'

  const currentYear: number = new Date().getFullYear()
</script>


<div class="footer-wrapper">
  <Grid inverted={true} />
  <footer class="footer">
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

    @media(min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 3fr;
      align-items: center;
    }

    a {
      color: inherit;
    }

    &__links {
      list-style-type: square;
      padding-right: 1rem;
      margin-right: 2rem;

      @media(min-width: 768px) {
        border-right: 1px solid;
      }

      li {
        margin: 0 0 .5rem;
      }
    }

    .fine-print {
      font-style: italic;

      p {
        margin: .5rem 0;
        max-width: 44em;
      }
    }
  }
</style>
