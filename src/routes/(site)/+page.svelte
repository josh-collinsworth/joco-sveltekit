<script lang="ts">
	import Main from '$lib/components/Main.svelte';
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
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png" />
</svelte:head>

<Main>
	<div class="intro">
		<div class="intro__headline">
			<h2>
				<strong>Hi, I’m Josh</strong>. I'm a frontend developer, designer, writer, and&nbsp;teacher.
			</h2>

			<p class="subhead h2">
				I currently live in the Kansas City area, and work for <a href="https://deno.land">Deno</a> as
				a frontend engineer.
			</p>

			<p>
				I specialize in performant, accessible, user-focused interfaces. I wrote
				<a href="https://css-tricks.com/a-complete-beginners-guide-to-npm/"
					><i>a Complete Beginner's Guide to npm</i></a
				>
				on <a href="https://css-tricks.com">CSS Tricks</a>. I
				<a href="/projects">designed and built</a>
				the word games
				<a href="https://quina.app">Quina</a> and <a href="https://playhondo.com">Hondo</a>.
				Occasionally I'll
				<a href="/about-me#appearances">appear on a podcast</a>, and I
				<a href="/blog">blog here</a> once in a while.
			</p>

			<section>
				<nav>
					<ul>
						<li><a href="/about-me">More about me and what I do</a></li>
						<li><a href="/blog">My blog</a></li>
						<li><a href="/projects">Some of my projects</a></li>
						<li><a href="/contact">Get in touch</a></li>
					</ul>
				</nav>
			</section>
		</div>
	</div>
</Main>

<style lang="scss">
	@for $i from 1 through 4 {
		.intro .intro__headline > *:nth-child(#{$i}) {
			animation-delay: 0.2 + ($i * 0.14s);
		}
		.intro .intro__headline ul li:nth-child(#{$i}) {
			animation-delay: 0.8 + ($i * 0.1s);
		}
	}

	.intro {
		width: 100%;
		position: relative;
		margin-top: var(--wholeNote);

		.intro__headline > *,
		.intro__headline ul li {
			opacity: 0;
			transform: translateY(16px);
			animation: fade_in_intro 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;

			.reduce-motion & {
				transform: translateY(0);
			}
		}

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
			margin-bottom: var(--halfNote);
			color: var(--darkGray);
			line-height: 1.4;
			max-width: 23em;

			.dark & {
				color: var(--ink);
			}

			a {
				text-decoration: underline;
			}
		}

		p {
			max-width: 38em;
		}

		ul {
			margin-top: var(--halfNote);
			margin-bottom: 0;
		}
	}

	@keyframes fade_in_intro {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(html:not(.light) .intro .subhead) {
		@media (prefers-color-scheme: dark) {
			color: var(--ink) !important;
		}
	}
</style>
