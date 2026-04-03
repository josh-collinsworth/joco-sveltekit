<script lang="ts">
	import Main from '$lib/components/Main.svelte'
	import DenoMarkCustom from '$lib/components/icons/DenoMarkCustom.svelte'
	import DeployMark from '$lib/components/icons/DeployMark.svelte'
	import HondoLogo from '$lib/components/icons/HondoLogo.svelte'
	import QuinaLogo from '$lib/components/icons/QuinaLogo.svelte'

	let { data } = $props()
</script>

<svelte:head>
	<title>Josh Collinsworth</title>
	<meta property="og:title" content="Josh Collinsworth" />
	<meta
		data-key="description"
		property="og:description"
		name="description"
		content="Frontend developer, designer, teacher and writer working as a design engineer"
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
			src="/images/bio-photo.jpg?ver=032026"
			alt="Me, Josh Collinsworth, an average middle-aged white guy in a patterned button-up, with a beard, glasses, and a CodePen trucker hat."
		/>

		<h2>What I do</h2>
		<p class="big-copy">
			I’m a frontend developer and designer who works across code, design, and
			messaging, distilling complexity into seamless simplicity.
		</p>

		<h2>Where I do it</h2>
		<p class="big-copy" style="max-width: 32em;">
			I live in the Kansas City area, and currently work as a design engineer
			for <a href="https://deno.land">Deno</a>.
		</p>

		<h2>Why I do it</h2>
		<p class="big-copy">
			I love building things that solve problems, create joy, and make the world
			a little better (and sharing what I learn along the way).
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
				I
				<a href="/projects">designed and built</a>
				the word games
				<a href="https://quina.app">Quina</a> and
				<a href="https://playhondo.com">Hondo</a>
			</li>

			<li class="big-copy">
				I’m the designer behind the <a href="https://deno.com/brand"
					>Deno logo and brand</a
				>, plus <a href="https://deno.com/deploy">Deno Deploy</a>
				and <a href="https://jsr.io">JSR</a>
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

		<div class="icons">
			<a href="https://quina.app" class="icon icon--quina" aria-label="Quina">
				<QuinaLogo />
			</a>
			<a
				href="https://playhondo.com"
				class="icon icon--hondo"
				aria-label="Hondo"
			>
				<HondoLogo />
			</a>
			<a href="https://deno.com" class="icon icon--deno" aria-label="Deno">
				<DenoMarkCustom />
			</a>
			<a
				href="https://deno.com/deploy"
				class="icon icon--deno-deploy"
				aria-label="Deno Deploy"
			>
				<DeployMark />
			</a>
		</div>

		<div class="intro__links">
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
		--delay-step: 0.1s;
		--column-gap: 0;
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
	.intro > *:nth-child(11) {
		animation-delay: calc(var(--delay-step) * 11);
	}

	img {
		margin: 0;
	}

	.profile-pic {
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 9999px;
		width: 100%;
		max-width: 240px;
		height: auto;

		@media (min-width: 64rem) {
			max-width: 360px;
		}
	}

	.intro {
		width: 100%;
		position: relative;
		margin-block-start: var(--whole-note);
		gap: 0 var(--column-gap);
		@media (min-width: 64rem) {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			align-items: center;
		}

		@media (min-width: 64rem) {
			--column-gap: var(--whole-note);
		}

		@media (min-width: 92rem) {
			--column-gap: var(--whole-note);
			display: grid;
			grid-template-columns: repeat(5, minmax(0, 1fr));
		}

		p {
			margin: 0;
		}

		h2 {
			text-transform: uppercase;
			font-size: 1rem;
			margin-block-end: 1rem;
			color: var(--neutral-600);

			:global(.dark) & {
				color: var(--blue-light);
			}

			&::before {
				display: none;
			}
		}

		> :where(p, h2, ul) {
			@media (min-width: 64rem) {
				grid-column: 1 / 3;
			}
			@media (min-width: 92rem) {
				grid-column: 1 / 5;
			}
			@media (min-width: 128rem) {
				grid-column: 1 / 4;
			}
		}

		> :where(h2, p, ul, img, .icons) {
			opacity: 0;
			animation:
				fade_in 1.2s cubic-bezier(0.23, 1, 0.32, 1) both,
				slide_up_in 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;

			@media (prefers-reduced-motion: reduce) {
				animation: fade_in 1.2s linear both;
			}
		}

		.big-copy {
			font-size: 2rem;
			font-size: clamp(1.25rem, calc(0.6rem + 1.5vw), 1.75rem);
			font-weight: normal;
			text-wrap: balance;

			a {
				background: linear-gradient(var(--yellow), var(--yellow)) no-repeat
					right;
				background-size: 0% 100%;
				transition:
					background-size 0.1s cubic-bezier(0.83, 0, 0.17, 1),
					background-position 0s;

				&:hover,
				&:focus {
					background-position: left;
					background-size: 100% 100%;
					color: var(--neutral-900);
				}
			}
		}

		ul {
			padding-inline-start: 1rem;
			margin-block-start: 0;

			@media (min-width: 64rem) {
				padding-inline-start: 1.25rem;
			}

			li {
				text-wrap: balance;

				+ li {
					margin-block-start: 1rem;
				}

				small {
					font-size: 0.75em;
					font-style: italic;
					color: var(--neutral-mid);
				}
			}
		}
	}

	.icons {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--quarter-note);
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 28rem;
		margin-block-start: var(--half-note);

		@media (min-width: 24rem) {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		@media (min-width: 64rem) {
			margin: 0;
			gap: 1rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			grid-template-rows: repeat(2, minmax(0, auto));
			max-width: unset;
		}

		@media (min-width: 92rem) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		@media (min-width: 128rem) {
			gap: 2rem;
		}

		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: auto;
			aspect-ratio: 1;
			transition: transform 0.15s cubic-bezier(0, 0.25, 0.25, 1);

			&:hover {
				transform: scale(1.05);
			}
		}

		.icon--deno-deploy {
			height: 100%;
			width: auto;
			max-width: 100%;
		}

		.icon--quina {
			padding: 10%;
			background-color: #f0f0f0;
			border-radius: 25%;
		}
	}

	@media (min-width: 64rem) {
		.profile-pic {
			grid-column: 3 / 4;
			grid-row: 1 / 4;
		}
	}

	@media (min-width: 92rem) {
		.profile-pic,
		.icons {
			grid-column: 5 / 6;
			grid-row: 1 / 4;
			margin: auto auto auto 0;
		}

		.icons {
			grid-row: 8 / 9;
		}
	}

	.intro__links {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		margin-block-start: var(--dotted-whole-note);
		gap: var(--dotted-half-note);
		font-size: 1rem;
		line-height: 1.5;
		grid-column-start: 1;
		grid-column: 1 / -1;

		ul {
			margin-block-start: var(--quarter-note);
			padding-inline-start: 0.875rem;
		}

		@media (min-width: 64rem) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			column-gap: var(--column-gap);
		}

		@media (min-width: 128rem) {
			grid-column: 3 / 6;
		}

		@media (min-width: 128rem) {
			margin-block-start: calc(var(--whole-note) * 2);
		}
	}

	.list-heading {
		font-size: 1rem;
		font-family: var(--heading-font);
		text-transform: uppercase;
		font-weight: bold;
		margin: 0;
		line-height: 1;

		@media (min-width: 64rem) {
			padding: var(--eighth-note) 0 var(--sixteenth-note);
		}
	}

	@keyframes fade_in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide_up_in {
		from {
			transform: translateY(16px);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
