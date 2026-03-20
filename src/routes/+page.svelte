<script lang="ts">
	import Main from '$lib/components/Main.svelte'
	import DenoLogo from '$lib/components/deno/icons/DenoLogo.svelte'
	import DenoDeployLogo from '$lib/components/deno/icons/DenoDeployLogo.svelte'
	import LoFiDino from '$lib/components/deno/runtime/LoFiDino.svelte'

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
			src="/images/bio-photo.jpg"
			alt=""
			style="width: 100%; margin: 0; height: auto;"
			class="bio-pic"
		/>
		<!-- <div></div> -->
		<!-- <div></div> -->
		<div class="card text-card larger big-text professionally">
			<h2>Professionally</h2>

			<p>
				I'm a design engineer, working as a hybrid designer and frontend
				developer where code meets design.
			</p>
			<p>
				I currently work at <a href="https://deno.com">Deno</a>, where my work
				touches design, development, marketing, and communications.
			</p>
		</div>
		<div
			style="background: var(--neutral-950);"
			class="center-content card image-card deno-logo"
		>
			<DenoLogo variant="dark" />
		</div>
		<div
			style="padding: clamp(2%, 5%, 1rem);"
			class="center-content card image-card deno-deploy-logo"
		>
			<img
				src="/images/deploy-mark-light.svg"
				alt=""
				style="height: 100%; width: auto;"
			/>
		</div>
		<div style="padding: 0;" class="center-content card image-card jsr-logo">
			<img
				src="/images/jsr.svg"
				alt="JSR logo"
				style="width: 100%; height: auto;"
			/>
		</div>

		<div class="card text-card large previously">
			<h2>Previously</h2>

			<p>
				I've worked in engineering at <a href="https://shopify.com">Shopify</a>,
				<a href="https://wpengine.com">WP Engine</a>; in customer-facing
				technical roles for
				<a href="https://getflywheel.com">Flywheel</a>; and as a code instructor
				for
				<a
					href="https://aiminstitute.org/programs/technology-training/aim-code-school/"
					>AIM Code School</a
				>.
			</p>
		</div>

		<div
			class="center-content card image-card"
			style="border-radius: 10%; background: #F0F0F0; padding: 15%;"
		>
			<img
				src="/images/quina-logo.svg"
				alt=""
				style="height: 100%; width: auto;"
			/>
		</div>
		<div
			class="center-content card image-card"
			style="border-radius: 5%; padding: 0;"
		>
			<img
				src="/images/hondo-logo.svg"
				alt=""
				style="height: 100%; width: auto;"
			/>
		</div>

		<div class="card text-card large projects">
			<h2>Projects</h2>
			<p>
				I
				<a href="/projects">designed and built</a>
				the word games
				<a href="https://quina.app">Quina</a> and
				<a href="https://playhondo.com">Hondo</a>.
			</p>
		</div>

		<div
			class="card span-3 lofi-dino"
			style="padding: 0; overflow: hidden; isolation: isolate;"
		>
			<LoFiDino />
		</div>

		<div class="card text-card large personally">
			<h2>Personally</h2>

			<p>
				Hobby coder; font hoarder; husband since 2012; dad since 2019 (though
				notorious for dad jokes since long before); accessibility advocate; DEI
				accomplice; cold brew aficionado; Facebook, Instagram, and Twitter
				abandoner; Mastodon appreciator; semi-notorious React critic; occasional
				public speaker and podcast guest; pun enthusiast; curious learner; dog
				person; lifelong Nintendo fan; musician/guitarist/hack pianist;
				he/him/his; liberal abuser of semicolons.
			</p>
		</div>

		<div class="card text-card punditry">
			<h2>Punditry</h2>
			<p>
				I enjoy writing, and authored (among other things)
				<a href="https://css-tricks.com/a-complete-beginners-guide-to-npm/"
					><i>a Complete Beginner's Guide to npm</i></a
				>
				on <a href="https://css-tricks.com">CSS Tricks</a>.
			</p>
			<p>
				Occasionally I'll
				<a href="/about-me#appearances">appear on a podcast</a>, and I
				<a href="/blog">blog on this site</a> semi-regularly.
			</p>
		</div>

		<div class="card text-card proficiencies">
			<h2>Proficiencies</h2>
			<p>
				I've worked in some flavor of React and Tailwind professionally for the
				past 5 years or so, but personally, I love working in SvelteKit. I've
				built projects in Vue/Nuxt as well, though I'm perfectly happy working
				in vanilla JavaScript/HTML/CSS.
			</p>
			<p>
				Most of my work has been frontend-focused, but I have experience with
				shipping things in Ruby on Rails, WordPress, Node, Deno, PHP, and other
				backend technologies.
			</p>
		</div>

		<div class="card text-card pastimes">
			<h2>Pastimes</h2>
			<p>
				I'm a lifelong Nintendo fan and avid gamer. I especially like indie
				games, but I enjoy a good tabletop game, too. I'm an avid musician
				(guitar/bass/piano), and I also enjoy reading and cooking.
			</p>
		</div>

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
	</div></Main
>

<style>
	.intro {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
		width: 100%;
		position: relative;
		margin-top: var(--whole-note);
		height: auto;

		@media (min-width: 96rem) {
			gap: var(--quarter-note);
		}
	}

	.card {
		padding: var(--half-note);
		display: flex;
		flex-direction: column;
		gap: var(--quarter-note);
		aspect-ratio: 1;

		&.text-card {
			grid-column: span 3;
			grid-row: span 3;
			color: var(--neutral-900);

			a {
				color: inherit;
				text-decoration: underline;
				text-decoration-thickness: 1px;
				text-decoration-color: inherit;

				&:hover {
					text-shadow: 0 0 8px var(--white);
				}
			}
		}

		&.image-card {
			aspect-ratio: none;
			height: 100%;
			width: 100%;
			justify-content: center;
			align-items: center;
			align-content: center;
			padding: var(--quarter-note);
		}

		&.big-text {
			color: var(--neutral-800);
			font-size: clamp(
				calc(var(--body-font-size)),
				2vw,
				calc(var(--body-font-size) * 1.25)
			);

			@media (min-width: 128rem) {
				font-size: calc(var(--body-font-size) * 1.375);
			}
		}

		img {
			margin: 0;
		}

		&.professionally {
			background-color: var(--yellow);
		}

		&.personally {
			background-color: var(--blue-light);

			p {
				font-size: calc(var(--body-font-size) * 0.675);
			}
		}

		&.projects {
			background-color: var(--blue-dark);
			color: var(--neutral-50);
		}

		&.previously {
			border: var(--sixteenth-note) solid var(--yellow);
		}

		&.punditry {
			background-color: var(--neutral-lighter);

			:global(.dark) & {
				color: var(--neutral-50);
			}

			@media (min-width: 64rem) {
				grid-row: span 2;
				aspect-ratio: unset;
			}
		}

		&.proficiencies {
			background-color: var(--blue-100);
		}

		&.pastimes {
			background-color: var(--orange);
			color: var(--neutral-darker);

			@media (min-width: 64rem) {
				grid-row: span 2;
				aspect-ratio: unset;
			}
		}
	}

	.span-2 {
		grid-column: span 2;
		grid-row: span 2;
	}

	.span-3 {
		grid-column: span 3;
		grid-row: span 3;
	}

	@media (min-width: 42rem) {
		.intro {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 64rem) {
		.intro {
			grid-template-columns: repeat(5, minmax(0, 1fr));
		}

		.card {
			&.large,
			&.larger {
				grid-area: span 2 / span 2;
			}
		}
	}
	@media (min-width: 96rem) {
		.intro {
			grid-template-columns: repeat(8, minmax(0, 1fr));
		}

		.card {
			&.larger {
				grid-area: span 3 / span 3;
			}
		}

		.lofi-dino {
			grid-area: span 2 / span 2;
		}
	}

	.bio-pic,
	.deno-logo,
	.deno-deploy-logo {
		/* grid-column: 1 / 2; */
	}

	.deno-logo {
		/* grid-row-start: 2; */
	}

	.deno-deploy-logo {
		/* grid-row-start: 3; */
	}

	h2,
	p {
		margin: 0;
		color: inherit;
	}

	h2 {
		transform-origin: top left;
		position: sticky;
		top: 0;
		width: max-content;
		max-width: 100%;
		position: relative;
		text-transform: uppercase;
		line-height: 1;
		font-size: 1rem;

		&::before {
			display: none;
		}
	}

	p {
		text-align: balance;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.intro__grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		font-size: 0.8125rem;
		line-height: 1.5;
		grid-column-start: 1;
		grid-column: 1 / -1;

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

		ul,
		li {
			list-style-type: square;
		}

		@media (min-width: 32rem) {
			grid-template-columns: subgrid;
		}

		@media (min-width: 64rem) {
			grid-column: 2 / 5;
		}

		@media (min-width: 96rem) {
			grid-column: 3 / 9;

			section {
				grid-column: span 2;
			}
		}
	}

	.list-heading {
		font-size: 0.8rem;
		font-family: var(--heading-font);
		text-transform: uppercase;
		font-weight: bold;
		margin: 0;
		border-bottom: 1px solid var(--neutral-lighter);
		padding: 0.75em 0 0.5em;
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
</style>
