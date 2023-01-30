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
			<p class="subhead h2">I currently live in the Kansas City area, and work for <a href="https://shopify.com">Shopify</a> as a senior frontend developer.</p>
			<section>
				<ul>
					<li><a href="/blog">My blog</a></li>
					<li><a href="/projects">Some of my projects</a></li>
					<li><a href="/about-me">More about me and what I do</a></li>
					<li><a href="/contact">Get in touch</a></li>
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

	@media (min-width: vars.$xl) {
		display: grid; //TODO: leftover from old design. Probably not needed unless I decide to put stuff in that narrow right column again.
		grid-template-columns: 48rem 1fr;
		gap: 0 calc(var(--wholeNote) * 2);
	}

	h2,
	.subhead {
		font-size: 2.5rem;
		font-size: clamp(1.8rem, calc(1rem + 3vw), 3.5rem);
		margin-bottom: var(--halfNote);
		font-weight: normal;
		max-width: 17em;

		strong {
			background: var(--yellow);
			color: var(--darkerGray);
		}

		&::before {
			display: none;
		}
	}

	.subhead {
		font-size: clamp(1.2rem, calc(0.6rem + 2vw), 1.8rem);
		margin-top: 0;
		margin-bottom: var(--wholeNote);
		color: var(--darkGray);
		line-height: 1.4;
		max-width: 23em;

		.dark & {
			color: var(--lighterGray);
		}

		a {
			text-decoration: underline;
		}
	}
}
</style>
