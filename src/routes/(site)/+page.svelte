<script lang="ts">
	import Main from '$lib/components/Main.svelte'

	let { data } = $props()
</script>

<svelte:head>
	<title>Josh Collinsworth</title>
	<meta property="og:title" content="Josh Collinsworth" />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content="Front-end developer, designer, teacher and writer"
	/>
	<meta
		property="og:image"
		content="https://joshcollinsworth.com/images/site-image.png"
	/>
	<meta
		name="twitter:image"
		content="https://joshcollinsworth.com/images/site-image.png"
	/>
</svelte:head>

<Main>
	<div class="intro">
		<h2>
			<strong>Hi, I’m Josh</strong>. I'm a frontend developer, designer, writer,
			and&nbsp;teacher.
		</h2>

		<p class="subhead h2">
			I currently live in the Kansas City area, and work for <a
				href="https://deno.land">Deno</a
			> as a frontend engineer.
		</p>
		<p class="bio">
			I specialize in performant, accessible, user-focused interfaces. I wrote
			<a href="https://css-tricks.com/a-complete-beginners-guide-to-npm/"
				><i>a Complete Beginner's Guide to npm</i></a
			>
			on <a href="https://css-tricks.com">CSS Tricks</a>. I
			<a href="/projects">designed and built</a>
			the word games
			<a href="https://quina.app">Quina</a> and
			<a href="https://playhondo.com">Hondo</a>. Occasionally I'll
			<a href="/about-me#appearances">appear on a podcast</a>, and I
			<a href="/blog">blog here</a> once in a while.
		</p>
		<div class="intro__grid">
			<section>
				<h3 class="list-heading" id="links-list">More</h3>
				<ul aria-labelledby="links-list">
					<li><a href="/about-me">More about me and what I do</a></li>
					<li><a href="/blog">My blog</a></li>
					<li><a href="/projects">Some of my projects</a></li>
					<li><a href="/contact">Get in touch</a></li>
				</ul>
			</section>
			<section>
				<h3 class="list-heading" id="recent-posts">Recent posts</h3>
				<ul aria-labelledby="recent-posts">
					{#each data.recentPosts as post}
						<li>
							<a href="/blog/{post.slug}">{post.title}</a>
						</li>
					{/each}
				</ul>
			</section>
			<section>
				<h3 class="list-heading" id="popular-posts">Popular posts</h3>
				<ul aria-labelledby="popular-posts">
					{#each data.popularPosts as post}
						<li>
							<a href="/blog/{post.slug}">{post.title}</a>
						</li>
					{/each}
				</ul>
			</section>
		</div>
	</div>
</Main>

<style lang="scss">
	@for $i from 1 through 5 {
		.intro > *:nth-child(#{$i}) {
			animation-delay: 0.2 + ($i * 0.14s);
		}
		.intro__grid section:nth-child(#{$i}) {
			animation-delay: 0.8 + ($i * 0.1s) !important;
		}
	}

	.intro {
		width: 100%;
		position: relative;
		margin-top: var(--wholeNote);

		@media (min-width: vars.$md) {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		> h2,
		> p {
			@media (min-width: vars.$md) {
				grid-column: 1 / 3;
			}
			@media (min-width: vars.$xl) {
				grid-column: 1 / 5;
			}
			@media (min-width: vars.$xxl) {
				grid-column: 1 / 4;
			}
		}

		> *,
		.intro__grid section {
			opacity: 0;
			animation: fade_in_intro 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;

			@media (prefers-reduced-motion: reduce) {
				animation-name: fade_in_intro_reduced;
			}
		}

		@media (min-width: vars.$xl) {
			display: grid;
			grid-template-columns: repeat(5, minmax(0, 1fr));
			gap: 0 var(--wholeNote);
		}

		h2,
		.subhead {
			font-size: 2.5rem;
			font-size: clamp(1.8rem, calc(1rem + 3vw), 3.5rem);
			margin-bottom: var(--halfNote);
			font-weight: normal;
			text-wrap: balance;

			&::before {
				display: none;
			}
		}

		h2 strong {
			background: var(--yellow);
			color: var(--darkerGray);
		}

		.subhead {
			font-size: clamp(1.2rem, calc(0.6rem + 2vw), 1.8rem);
			margin-top: 0;
			margin-bottom: var(--halfNote);
			color: var(--darkGray);
			line-height: 1.4;

			a {
				text-decoration: underline;
			}
		}

		.bio {
			@media (min-width: vars.$sm) {
				grid-column: 1 / 3;
			}
			@media (min-width: vars.$xl) {
				grid-column: 1 / 4;
			}
			@media (min-width: vars.$fourxl) {
				grid-column: 1 / 3;
			}
		}

		ul {
			margin: 0;
			margin-top: 1.25em;
			list-style-type: none;
			padding-left: 0;

			li {
				padding-left: 0;
				text-wrap: balance;

				a {
					text-decoration-thickness: 1px;
				}
			}
		}
	}

	.intro__grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		margin-top: var(--dottedWholeNote);
		gap: var(--dottedHalfNote);
		font-size: 0.8125rem;
		line-height: 1.5;
		grid-column-start: 1;
		grid-column: 1 / -1;

		ul,
		li {
			list-style-type: unset;
		}

		@media (min-width: vars.$sm) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		@media (min-width: vars.$xxl) {
			grid-column: 3 / 6;
			grid-row: 5 / 6;
		}
	}

	.list-heading {
		font-size: 0.8rem;
		font-family: var(--headingFont);
		text-transform: uppercase;
		font-weight: bold;
		margin: 0;
		border-bottom: 1px solid var(--lighterGray);
		padding: 0.75em 0 0.5em;
		line-height: 1;

		@media (min-width: vars.$sm) {
			padding: var(--eighthNote) 0 var(--sixteenthNote);
		}
	}

	:global(html:not(.light) .intro .subhead) {
		@media (prefers-color-scheme: dark) {
			color: var(--ink) !important;
		}
	}

	:global(.dark .intro .subhead) {
		color: var(--ink);
	}

	@keyframes fade_in_intro {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade_in_intro_reduced {
		from {
			opacity: 0;
			transform: translateY(0);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
