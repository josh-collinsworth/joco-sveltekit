<script lang="ts">
	import CodePenLink from '$lib/components/CodePenLink.svelte'
	import Main from '$lib/components/Main.svelte'
</script>

<svelte:head>
	<title>Josh Collinsworth | Projects</title>
	<meta data-key="description" name="description" content="A sampling of apps and code projects." />
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png" />
</svelte:head>

<Main>
	<div class="projects compressed-content double-wide">
		<article>
			<div class="sticky">
				<h2>Featured project: Quina</h2>

				<p>
					Quina is a strategic, logical word game, built from scratch with Nuxt. The gameplay is
					based on classic pen-and-paper word games (think: Mastermind, but with words), but the app
					and design are 100% original.
				</p>
				<p>
					Quina was released December 2020 as a progressive web app and on the Google Play store.
					Version 2.0 was released in spring 2022 (with an overhauled game board, a daily puzzle
					mode, and new achievements). Version 2.0 was also released on the iOS App Store.
				</p>

				<ul>
					<li>
						<a href="https://apps.apple.com/us/app/quina/id1636895462">Quina on iOS</a>
					</li>
					<li>
						<a
							href="https://play.google.com/store/apps/details?id=app.quina.collinsworth&hl=en_US&gl=US"
							rel="external">Quina on Android</a
						>
					</li>
					<li>
						<a href="https://quina.app">Quina on the web</a>
					</li>
					<li>
						<a href="https://github.com/josh-collinsworth/hondo">GitHub repo</a>
					</li>
					<li>
						Read about the making of Quina <a href="/blog/announcing-quina-my-first-app"
							>on this blog</a
						>
						and
						<a
							rel="external"
							href="https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/"
						>
							on CSS Tricks</a
						>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<img
					src="/images/quina-mockup1.png"
					alt=""
					loading="lazy"
					width="1200"
					height="1697"
					style="aspect-ratio: 1200 / 1697"
				/>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>Hondo</h2>

				<p>
					Another word game, this one built with SvelteKit, and a bit more akin to Wordle (but with
					some twists and more complex mechanics).
				</p>
				<p>
					The goal is to guess as many words as possible in a row, earning bonus points for streaks,
					to get to 100 points as quickly as possible.
				</p>
				<ul>
					<li>
						<a href="https://apps.apple.com/us/app/hondo/id1636016699">Hondo on iOS</a>
					</li>
					<li>
						<a href="https://play.google.com/store/apps/details?id=com.playhondo.www.twa"
							>Hondo on Android</a
						>
					</li>
					<li>
						<a href="https://playhondo.com">Hondo on the web</a>
					</li>
					<li>
						<a href="https://github.com/josh-collinsworth/hondo">GitHub repo</a>
					</li>
					<li>
						<a href="/blog/announcing-hondo">Read about the making of Hondo</a>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<img
					src="/images/post_images/announcing_hondo/share-image.png"
					alt=""
					style="border: 1px solid;"
				/>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>SvelteKit static blog starter</h2>

				<p>
					A fully open-source, pre-configured starter for a SvelteKit blog. Includes Markdown and
					Sass preprocessing; has mdsvex with rehype plugins pre-installed; and includes automatic
					prefetching of top-level routes, an RSS feed, and a JSON API.
				</p>
				<ul>
					<li>
						<a href="https://sveltekit-static-starter.netlify.app">Live demo</a>
					</li>
					<li>
						<a href="https://github.com/josh-collinsworth/sveltekit-blog-starter">GitHub repo</a>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<figure>
					<iframe
						src="https://sveltekit-static-starter.netlify.app"
						frameborder="0"
						title="Live demo of the starter, from sveltekit-static-starter.netlify.app"
						width="100%"
						height="800"
					/>
					<figcaption>
						<a href="https://sveltekit-static-starter.netlify.app"
							>sveltekit-static-starter.netlify.app</a
						>
					</figcaption>
				</figure>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>CSS Easing playground</h2>

				<p>
					Created for <a href="/blog/easing-curves">this blog post</a>, this interactive playground
					lets you examine how a variety of easing curves look and feel, and allows you to draw up
					your own and copy the CSS.
				</p>

				<p>
					Every curve on the page is an SVG, including the interactive demo, which is accessible
					across device types. The curve redraws in real time as the handles are moved, and an
					animated node follows the curve to demonstrate the movement.
				</p>
				<ul>
					<li>
						<a href="/demos/easing">Live demo</a>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<figure>
					<iframe
						src="/demos/easing"
						frameborder="0"
						title="Live demo of the starter, from sveltekit-static-starter.netlify.app"
						width="100%"
						height="800"
					/>
					<figcaption><a href="/demos/easing">joshcollinsworth.com/demos/easing</a></figcaption>
				</figure>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>CodePen Projects</h2>
				<p>
					A sampling of some games and experiments I've built on <a
						href="https://codepen.io/collinsworth"
						rel="external">CodePen</a
					>, mostly in Vue, but some in React or vanilla JS as well.
				</p>
			</div>
			<ul class="codepens">
				<li>
					A <CodePenLink hash="XwPXrM">Sliding Puzzle in Vue</CodePenLink> (with an <CodePenLink
						hash="MMagLb">alternate version</CodePenLink
					> that converts images to sliding puzzles)
				</li>
				<li>
					A fun <CodePenLink hash="OYgGNK">Emoji Slider</CodePenLink> made with Vue
				</li>
				<li>
					An <CodePenLink hash="MLjVrQ">interactive Vue tutorial</CodePenLink> blog post
				</li>
				<li>
					The game of <CodePenLink hash="oNbavJN">Hangman</CodePenLink> in Vue, using a quotes API
				</li>
				<li>
					An <CodePenLink hash="bKXoRN">Interactive CSS Filter React Component</CodePenLink>
				</li>
				<li>
					The classic <CodePenLink hash="Pymdxo">Color Flood Game</CodePenLink> build with React
				</li>
				<li>
					The game of <CodePenLink hash="MWwXpLd">Connect Four</CodePenLink> in Vue
				</li>
				<li>
					A (mostly) pure CSS exploration of making a completely different view at several
					breakpoints called <CodePenLink hash="jOYPjMB">Retro Breakpoints of Infinity</CodePenLink>
				</li>
				<li>
					A silly "<CodePenLink hash="vYOPKqx">Pick Two</CodePenLink> of three" checklist
				</li>
				<li>
					Some pure CSS illustrations, like this <CodePenLink hash="vdGYpo"
						>Raccoon Mario sprite</CodePenLink
					> and this <CodePenLink hash="LVMRwQ">Pure CSS Game Boy Advance SP</CodePenLink>
				</li>
				<li>
					A mouse-tracking <CodePenLink hash="ExjZexY">game of cat and mouse</CodePenLink>
				</li>
				<li>
					A small but handy <CodePenLink hash="bGdmmrY">liquid measurement converter</CodePenLink> app
				</li>
				<li>
					A <CodePenLink hash="WNrpGJX">dramatic d20 roller</CodePenLink>
				</li>
				<li>
					<CodePenLink hash="ZEGrMRQ">Generative typographic art grid</CodePenLink> in Vue
				</li>
				<li>
					A <CodePenLink hash="mdJmBQz">Hex/RGB(a)</CodePenLink> color converter in Vue
				</li>
			</ul>
		</article>

		<article>
			<div class="sticky">
				<h2>Other projects and&nbsp;apps</h2>
				<p>
					You can also find my work on <a href="https://github.com/josh-collinsworth">GitHub</a> (although
					truth be told I don't really bother curating it there at all.)
				</p>
			</div>
			<ul>
				<li>
					Website for <a href="https://rise.getflywheel.com" rel="external">Rise</a>, Flywheel/WP
					Engine's BIPOC employee resource group
				</li>
				<li><a href="https://nolanfabricius.com">NolanFabricius.com</a></li>
				<li>
					<a href="https://passthepigs.vercel.app/" rel="external">Pass the Pigs scorekeeper app</a>
					built in React
				</li>
				<li>
					A handy <a href="https://vlmc.netlify.app/" rel="external">liquid measurement converter</a
					> progressive web app, built with Vue
				</li>
				<li>
					A Svelte <a href="https://dadjokefinder.netlify.app/" rel="external"
						>Dad Joke randomizer and searcher app</a
					>
				</li>
				<li>
					<a href="https://smitty.netlify.app" rel="external">"Smitty"</a>, the Super Metroid Item
					Tracker app built in Svelte
				</li>
				<li>
					<a href="https://wpmultisitedomainreplace.com" rel="external"
						>WPMultisiteDomainReplace.com</a
					>, a Nuxt app to update your WordPress multisite's database when switching main domains
				</li>
				<li>
					<a href="https://qvicklist.vercel.app/" rel="external">Qvick List</a>, an on-demand Vue
					to-do list app that saves to local storage. (Needs some updating.)
				</li>
				<li>
					Flywheel retreat websites for <a href="https://fest2019.getflywheel.com/" rel="external"
						>2019</a
					>
					and <a href="https://fest.getflywheel.com/" rel="external">2020</a>.
				</li>
				<li>
					A <a href="https://github.com/josh-collinsworth/flywheel-cloud-wp-load-fix"
						>WordPress plugin</a
					>
					to help make various other plugins and theme compatible with
					<a href="https://getflywheel.com/cloud-platform/">Flywheel's cloud platform</a>
				</li>
				<li>
					A Chrome extension, an internal knowledge base, various WordPress themes, a couple of Node
					CLI tools, and a handful of trainings and presentations (none of which I can show here
					because employer privacy and such)
				</li>
			</ul>
		</article>
	</div>
</Main>

<style lang="scss">
	.projects {
		p {
			max-width: var(--maxWidth);
			// min-width: 12em;
		}

		article {
			display: grid;
			grid-template-columns: 1fr;
			gap: var(--halfNote);
			align-items: start;

			@media (min-width: vars.$sm) {
				grid-template-columns: 2fr 3fr;

				.sticky {
					position: sticky;
					top: var(--halfNote);
				}
			}

			@media (min-width: vars.$lg) {
				grid-template-columns: 2fr 3fr;
			}

			+ article {
				margin-top: 6rem;
			}
		}

		.image-gallery {
			figure {
				margin-top: 0;
			}

			img {
				margin: 0 auto var(--halfNote);
				display: block;
				max-width: unset;
				width: calc(100% + (var(--margin) * 2));
				margin-left: calc(var(--margin) * -1);

				@media (min-width: vars.$sm) {
					max-width: calc(100% + var(--margin));
					width: auto;
					margin-left: 0;
				}
			}
		}
	}
</style>
