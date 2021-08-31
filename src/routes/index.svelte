<main>
	<div class="intro">
		<h1>Hi, I’m Josh.</h1>

		<p class="fancy">
			<span aria-hidden="true" style="font-style: normal;">👋🏼</span>
			I’m a front-end developer and designer.
		</p>


		<h2 class="h3">Professionally:</h2>
		<p>
			Senior developer at <Xa to="shopify.com">Shopify</Xa>;
			maker and designer of <i>Quina</i> (<Xa to="quina.app">web</Xa>/<Xa to="https://play.google.com/store/apps/details?id=app.quina.collinsworth">Android</Xa>);
			occasional author on <g-link to="/blog">my own blog</g-link>
			and on <Xa to="https://css-tricks.com/author/joshcollinsworth/">CSS&nbsp;Tricks</Xa>.
		</p>

		<h2 class="h3">Previously:</h2>

		<p>
			Senior JavaScript developer at <Xa to="aware3.com">Aware3</Xa>;
			front-end engineer at <Xa to="wpengine.com">WP Engine</Xa>;
			senior support lead at <Xa to="getflywheel.com">Flywheel</Xa>;
			course instructor for <Xa to="interfaceschool.com">AIM Code School</Xa>;
			graphic designer and contractor;
			seasoned bartender who makes a pretty good old fashioned. 
		</p>
		
		<h2 class="h3">Personally:</h2>

		<p>
			Hobby coder;
			infrequent blog author;
			font hoarder;
			husband;
			dad (with both the jokes and bod to match);
			accessibility advocate;
			cold brew coffee lover;
			DEI accomplice;
			occasional conference speaker;
			pun enthusiast;
			curious learner;
			dog owner and lover;
			lifelong Nintendo fan;
			musician/guitarist/hack pianist;
			liberal abuser of semicolons.
		</p>
	</div>
</main>


<script lang="ts">
	import Xa from '$lib/components/ExternalLink.svelte'
</script>


<style lang="scss">
@import "../lib/assets/scss/_vars.scss";

:root {
  --max-width: 36rem;
}

.intro {
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr;

  p, h1 {
    margin: 0;
  }

  h1 {
    font-size: calc(2.2rem + 2vw);

    @media (min-width: $widest) {
      font-size: 4rem;
    }
  }

  p.fancy {
    margin-top: .75rem;
		margin-bottom: 1.5rem;
    font-size: 1.2rem;

    @media (min-width: $narrow) {
      font-size: calc(1rem + 0.5vw);
    }

    @media (min-width: $widest) {
      font-size: 1.5rem;
    }
  }

  .h3 {
    font-family: var(--body-font);
    font-weight: bold;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-size: 1.2rem;
    line-height: 1.2;
    border: 0;
  }
}	
</style>