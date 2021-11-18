<script lang="ts">
  import HomepageLinkList from "$lib/components/HomepageLinkList.svelte"
</script>


<svelte:head>
	<title>Josh Collinsworth</title>
	<meta property="og:title" content="Josh Collinsworth" />
	<meta data-key="description" property="og:description" name="description" content="Front-end developer, designer, teacher and writer">
  <meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>

<div class="intro">
  <div class="intro__headline">
    <h2>Hi, I’m Josh.</h2>
    
    <p class="subhead">
      I'm a front-end developer, designer, teacher,&nbsp;and&nbsp;writer.
    </p>
  </div>

  <div class="intro__body"> 
    <h3>Professionally:</h3>

    <p>
      Senior frontend developer at <a href="https://shopify.com">Shopify</a>;
      maker and designer of <i>Quina</i>
      (<a href="https://quina.app">web </a>/<a href="https://play.google.com/store/apps/details?id=app.quina.collinsworth">Android</a>);
      occasional <a href="/blog">tech blog author</a> and freelance developer/designer.
    </p>

    <h3>Previously:</h3>
    <p>
      Senior JavaScript developer at <a href="https://aware3.com">Aware3</a>;
      front-end engineer at <a href="https://wpengine.com">WP Engine</a>;
      senior support lead at <a href="https://getflywheel.com">Flywheel</a>;
      course instructor for <a href="https://interfaceschool.com">AIM Code School</a>;
      graphic designer;
      seasoned bartender who makes a pretty good old fashioned.
    </p>

    <h3>Personally:</h3>
    <p>
      Hobby coder;
      font hoarder;
      husband;
      dad (jokes/bod);
      accessibility advocate;
      cold brew consumer;
      DEI accomplice;
      occasional public speaker;
      pun enthusiast;
      curious learner;
      dog person;
      Nintendo fan;
      musician/guitarist/hack pianist;
      Omaha, Nebraska resident;
      liberal abuser of semicolons.
    </p>
  </div>
  <HomepageLinkList />
</div>


<style lang="scss" global>
.intro {
  width: 100%;
  position: relative;
  margin-top: calc(var(--rhythm) * 4);

  /**
    This is what makes the landing page all fancy. It uses explicit
    width combined with negative left margin to avoid needing to resize
    the <main> element, which would result in layout jumping around during
    page transitions. It's a little icky, but it's best for animation, and
    it also lets me keep the unordered list at the end where I want it
    visually without moving its place in the DOM.
  */
  @media (min-width: $xxl) {
    // width: calc(100vw - (var(--margin) * 2) - (var(--rhythm) / 2));
    width: 100%;
    max-width: unset;
    // margin-left: calc(50% - 50vw + var(--margin) + (var(--rhythm) / 4));
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 0 calc(var(--rhythm) * 8);

    &__body {
      max-width: 30rem;
      grid-row: 1 / 3;
      grid-column: 2 / 3;

      p {
        font-size: .875rem;
        margin: 0;
      }
    }

    .homepage-link-list {
      margin: 0;
    }
  }

  h2 {
    font-size: 2.2rem;
    margin-bottom: var(--rhythm);

    @media (min-width: $sm) {
      font-size: 3rem;
    }

    @media (min-width: $md) {
      font-size: 4rem;
    }

    @media (min-width: $lg) {
      font-size: 5rem;
    }
    
    @media (min-width: $xxl) {
      font-size: 6rem;
    }
    
    @media (min-width: $xxxl) {
      font-size: 6.9rem;
    }
  }

  h3 {
    font-size: 1.3rem;
    margin: 0 0 calc(var(--rhythm) / 2);
    position: relative;
    z-index: 1;

    ~ h3 {
      margin-top: calc(var(--rhythm) * 4);
    }
  }

  .subhead {
    font-size: 1.3rem;
    margin: 0 0 4rem;
    max-width: 20em;
    line-height: 1.2;
    font-family: var(--heading-font);

    @media (min-width: $md) {
      font-size: 1.7rem;
      margin-bottom: calc(var(--rhythm) * 6);
    }

    @media (min-width: $xxl) {
      font-size: 1.9rem;
    }
  }
}	
</style>