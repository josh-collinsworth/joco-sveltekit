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
</svelte:head>

<Main>
	<div class="intro">
		<img
			class="profile-pic"
			src="/images/bio-photo.jpg"
			alt="Me, Josh Collinsworth, an average white guy in a patterned button-up, with a beard, glasses, and a CodePen trucker hat."
		/>

		<h2>What I do</h2>
		<p class="big-copy">
			I’m a frontend developer and designer, specializing in bringing delightful
			simplicity to user interfaces.
		</p>

		<h2>Where I do it</h2>
		<p class="big-copy">
			I live in the Kansas City area, and currently work as a design engineer
			for <a href="https://deno.land">Deno</a>.
		</p>

		<h2>Why I do it</h2>
		<p class="big-copy">
			I love building things that make the world look and work a little better,
			and sharing what I learn along the way.
		</p>

		<h2>Why you might know me</h2>
		<ul>
			<li class="big-copy">
				I wrote
				<a href="https://css-tricks.com/a-complete-beginners-guide-to-npm/"
					><i>a Complete Beginner’s Guide to npm</i></a
				>
				on <a href="https://css-tricks.com">CSS Tricks</a>
			</li>

			<li class="big-copy">
				I’m the designer behind the <a href="https://deno.com/brand"
					>Deno logo and brand</a
				>, plus <a href="https://deno.com/deploy">Deno Deploy</a>
				and <a href="https://jsr.io">JSR</a>
			</li>

			<li class="big-copy">
				I
				<a href="/projects">designed and built</a>
				the word games
				<a href="https://quina.app">Quina</a> and
				<a href="https://playhondo.com">Hondo</a>
			</li>

			<li class="big-copy">
				Sometimes something I write on
				<a href="/blog">my blog</a> gets popular for a little bit
				<small>(for whatever reason)</small>
			</li>

			<li class="big-copy">
				I’ve
				<a href="/about-me#appearances">appeared on a few podcasts</a>
				<small>(usually about one of those blog posts)</small>
			</li>
		</ul>

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

<style>
	.intro {
		--delay-step: 0.12s;
	}
	.intro > *:nth-child(1) {
		animation-delay: var(--delay-step);
	}
	.intro > *:nth-child(2) {
		animation-delay: calc(var(--delay-step) * 2);
	}
	.intro > *:nth-child(3) {
		animation-delay: calc(var(--delay-step) * 3);
	}
	.intro > *:nth-child(4) {
		animation-delay: calc(var(--delay-step) * 4);
	}
	.intro > *:nth-child(5) {
		animation-delay: calc(var(--delay-step) * 5);
	}
	.intro > *:nth-child(6) {
		animation-delay: calc(var(--delay-step) * 6);
	}
	.intro > *:nth-child(7) {
		animation-delay: calc(var(--delay-step) * 7);
	}
	.intro > *:nth-child(8) {
		animation-delay: calc(var(--delay-step) * 8);
	}
	.intro > *:nth-child(9) {
		animation-delay: calc(var(--delay-step) * 9);
	}
	.intro > *:nth-child(10) {
		animation-delay: calc(var(--delay-step) * 10);
	}

	.profile-pic {
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 9999px;
		width: 100%;
		max-width: 380px;
		height: auto;
		margin: 0;

		@media (min-width: 92rem) {
			grid-column: 5 / 6;
			grid-row: 1 / 4;
			margin: auto auto auto 0;
		}
	}

	.intro {
		width: 100%;
		position: relative;
		margin-top: var(--whole-note);

		@media (min-width: 66rem) {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		h2 {
			text-transform: uppercase;
			font-size: 1rem;
			margin-bottom: 1rem;
			color: var(--neutral-600);

			:global(.dark) & {
				color: var(--blue-light);
			}

			&::before {
				display: none;
			}
		}

		> p,
		> h2,
		> ul {
			@media (min-width: 66rem) {
				grid-column: 1 / 3;
			}
			@media (min-width: 92rem) {
				grid-column: 1 / 5;
			}
			@media (min-width: 108rem) {
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

		@media (min-width: 92rem) {
			display: grid;
			grid-template-columns: repeat(5, minmax(0, 1fr));
			gap: 0 var(--whole-note);
		}

		p {
			margin: 0;
		}

		.big-copy {
			font-size: 2rem;
			font-size: clamp(1.25rem, calc(0.5rem + 1.5vw), 1.675rem);
			font-weight: normal;
			text-wrap: balance;
		}

		ul {
			padding-left: 1.5rem;
			margin-top: 1rem;

			li {
				text-wrap: balance;

				+ li {
					margin-top: 1rem;
				}

				small {
					font-size: 0.75em;
					font-style: italic;
					color: var(--neutral-mid);
				}

				a {
					text-decoration-thickness: 1px;
				}
			}
		}
	}

	.intro__grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		margin-top: var(--dotted-whole-note);
		gap: var(--dotted-half-note);
		font-size: 0.8125rem;
		line-height: 1.5;
		grid-column-start: 1;
		grid-column: 1 / -1;

		@media (min-width: 72rem) {
			font-size: 1rem;
		}

		ul,
		li {
			list-style-type: square;
		}

		@media (min-width: 56rem) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		@media (min-width: 108rem) {
			grid-column: 3 / 6;
		}
	}

	.list-heading {
		font-size: 0.8rem;
		font-family: var(--heading-font);
		text-transform: uppercase;
		font-weight: bold;
		margin: 0;
		line-height: 1;

		@media (min-width: 56rem) {
			padding: var(--eighth-note) 0 var(--sixteenth-note);
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
