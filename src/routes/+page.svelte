<script lang="ts">
	import Main from '$lib/components/Main.svelte'
</script>


<svelte:head>
	<title>Josh Collinsworth</title>
	<meta property="og:title" content="Josh Collinsworth" />
	<meta data-key="description" property="og:description" name="description" content="Front-end developer, designer, teacher and writer">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<Main>
	<div class="intro">
		<div class="intro__headline">
			<h2><strong>Hi, I’m Josh</strong>. I'm a frontend developer, designer, writer, and&nbsp;teacher.
			</h2>
			<p class="subhead h2">I currently live in the Kansas City area, and work for Shopify as a senior frontend developer.</p>
			<section>
				<ul>
					<li><a href="/blog">My blog</a></li>
					<li><a href="/blog">Some of my projects</a></li>
					<li><a href="/blog">Other writing, talks, and appearances</a></li>
					<li><a href="/blog">More about me</a></li>
					<li><a href="/blog">Get in touch</a></li>
				</ul>
			</section>
		</div>
	</div>
</Main>


<style lang="scss">
.intro {
	width: 100%;
	position: relative;
	margin-top: var(--wholeNote);
	max-width: var(--maxWidth);

	@media (min-width: vars.$xl) {
		width: 100%;
		max-width: unset;
		display: grid;
		grid-template-columns: 48rem 1fr;
		gap: 0 calc(var(--wholeNote) * 2);
	}

	h2,
	.subhead {
		font-size: 2.5rem;
		font-size: clamp(1.8rem, calc(1rem + 3vw), 3.5rem);
		margin-bottom: var(--halfNote);
		font-weight: normal;

		strong {
			background: var(--yellow);
			color: var(--darkerGray);
		}

		&::before {
			display: none;
		}
	}

	.subhead {
		font-size: clamp(1.2rem, calc(0.7rem + 2vw), 1.8rem);
		margin-top: 0;
		margin-bottom: var(--wholeNote);
		color: var(--darkGray);
		line-height: 1.4;
	}

	h3 {
		font-size: 1.3rem;
		margin: 0 0 calc(var(--quarterNote) / 2);
		position: relative;
		z-index: 1;
	}
}
</style>
