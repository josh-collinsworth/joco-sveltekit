<script lang="ts">
	import CodePenLink from '$lib/components/CodePenLink.svelte'
	import Main from '$lib/components/Main.svelte'
	import DenoDeployLogo from '$lib/components/deno/icons/DenoDeployLogo.svelte'
	import DenoLogo from '$lib/components/deno/icons/DenoLogo.svelte'
	import LoFiDino from '$lib/components/deno/runtime/LoFiDino.svelte'
	import Dressup from '$lib/components/deno/runtime/dressup/Dressup.svelte'
	import HondoLogo from '$lib/components/icons/HondoLogo.svelte'
	import QuinaLogo from '$lib/components/icons/QuinaLogo.svelte'
</script>

<svelte:head>
	<title>Josh Collinsworth | Projects</title>
	<meta
		data-key="description"
		name="description"
		content="A sampling of apps and code projects."
	/>
	<meta
		property="og:image"
		content="https://joshcollinsworth.com/images/site-image.png"
	/>
</svelte:head>

<Main>
	<div class="projects compressed-content double-wide">
		<article>
			<div class="sticky">
				<h2>Featured project: Quina</h2>

				<p>
					Quina is a strategic, logical word game, built from scratch with Nuxt.
					The gameplay is based on classic pen-and-paper word games (think:
					Mastermind, but with words), but the app and design are 100% original.
				</p>
				<p>
					Quina was released December 2020 as a progressive web app and on the
					Google Play store. Version 2.0 was released in spring 2022 (with an
					overhauled game board, a daily puzzle mode, and new achievements).
					Version 2.0 was also released on the iOS App Store.
				</p>

				<p>
					I wrote about the original making of Quina <a
						href="/blog/announcing-quina-my-first-app">on this blog</a
					>, and
					<a
						rel="external"
						href="https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/"
					>
						on CSS Tricks</a
					>. <a href="https://quina.app">Check out Quina on the web</a>, or
					download it for iOS or Android:
				</p>
				<ul class="app-badges">
					<li>
						<a href="https://apps.apple.com/us/app/quina/id1636895462"
							><img
								src="/images/projects/app-store-badge.svg"
								alt="Download Quina on the App Store"
							/></a
						>
					</li>
					<li>
						<a
							href="https://play.google.com/store/apps/details?id=app.quina.collinsworth&hl=en_US&gl=US"
							rel="external"
							><img
								src="/images/projects/google-play-badge.svg"
								alt="Get Quina on Google Play"
							/></a
						>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<img
					src="/images/projects/quina-mockup1.png"
					alt=""
					loading="lazy"
					width="1200"
					height="1697"
					style="aspect-ratio: 1200 / 1697"
				/>
				<img
					src="/images/projects/quina-screenshot-0.png"
					alt=""
					width="2360"
					height="1640"
				/>
				<img
					src="/images/projects/quina-screenshot-1.png"
					alt=""
					width="2360"
					height="1640"
				/>
				<img
					src="/images/projects/quina-screenshot-2.png"
					alt=""
					width="2360"
					height="1664"
				/>
				<img
					src="/images/projects/quina-screenshot-4.png"
					alt=""
					width="1640"
					height="1588"
				/>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>Hondo</h2>

				<p>
					Another word game, this one built with SvelteKit, and a bit more akin
					to Wordle (but with some twists and more complex mechanics).
				</p>
				<p>
					The goal is to guess as many words as possible in a row, earning bonus
					points for streaks, to get to 100 points as quickly as possible.
				</p>
				<p>
					<a href="/blog/announcing-hondo">Read about the making of Hondo</a>,
					check out the<a href="https://github.com/josh-collinsworth/hondo"
						>GitHub repo</a
					>,

					<a href="https://playhondo.com">play Hondo in your browser</a>, or
					download Hondo from the app stores:
				</p>
				<ul class="app-badges">
					<li>
						<a href="https://apps.apple.com/us/app/hondo/id1636016699"
							><img
								src="/images/projects/app-store-badge.svg"
								alt="Download Hondo on the App Store"
							/></a
						>
					</li>
					<li>
						<a
							href="https://play.google.com/store/apps/details?id=com.playhondo.www.twa"
							><img
								src="/images/projects/google-play-badge.svg"
								alt="Get Hondo on Google Play"
							/></a
						>
					</li>
				</ul>
			</div>

			<div class="image-gallery">
				<img
					src="/images/post_images/announcing_hondo/share-image.png"
					alt=""
					style="border: 1px solid;"
				/>
				<div class="screenshots">
					<img
						src="/images/projects/hondo-screenshot-1.webp"
						alt=""
						style="margin: 0; width: 100%; max-width: unset;"
						width="460"
						height="996"
					/>
					<img
						src="/images/projects/hondo-screenshot-2.webp"
						alt=""
						style="margin: 0; width: 100%; max-width: unset;"
						width="460"
						height="996"
					/>
					<img
						src="/images/projects/hondo-screenshot-3.webp"
						alt=""
						style="margin: 0; width: 100%; max-width: unset;"
						width="460"
						height="996"
					/>
				</div>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>Recent design work</h2>

				<p>
					A selection of logos, illustrations, animations, interfaces, and other
					design work from recent work history.
				</p>
			</div>

			<div class="design-gallery">
				<figure>
					<div class="logo-box">
						<img
							class="dark-only"
							src="/images/projects/deno/deno-full_dark_transparent.svg"
							alt="Deno logo"
						/>
						<img
							class="light-only"
							src="/images/projects/deno/deno-full_light_transparent.svg"
							alt="Deno logo"
						/>
					</div>
					<figcaption>
						<a href="https://deno.com">Deno</a> logo since 2024
					</figcaption>
				</figure>

				<div class="interactive-showcase">
					<figure>
						<LoFiDino backgroundTheme="rain" />
						<figcaption>
							Animated illustration for <a href="https://deno.com">Deno.com</a>
						</figcaption>
					</figure>
				</div>

				<div class="interactive-showcase">
					<figure>
						<Dressup alwaysOpen />
						<figcaption>
							Interactive dino customizer for the Deno 2.0 launch
						</figcaption>
					</figure>
				</div>

				<hr />

				<figure>
					<div class="logo-box">
						<img
							class="dark-only"
							src="/images/projects/deno/deploy-full-dark.svg"
							alt="Deno logo"
						/>
						<img
							class="light-only"
							src="/images/projects/deno/deploy-full-light.svg"
							alt="Deno logo"
						/>
					</div>
					<figcaption>
						<a href="https://deno.com/deploy">Deno Deploy</a> logo (2025)
					</figcaption>
				</figure>

				<figure>
					<img
						src="/images/projects/deploy-dashboard.webp"
						alt="A screenshot of the Deno Deploy dashboard, showing a list of projects under my personal organization account. The URL is console.deno.com."
						width="2560"
						height="2377"
						style="filter: drop-shadow(2px 3px 6px #5f616433);"
					/>
					<figcaption>The Deno Deploy app dashboard</figcaption>
				</figure>

				<hr />

				<figure>
					<div class="logo-box">
						<img src="/images/projects/jsr.svg" alt="JSR logo" class="jsr-logo" />
					</div>
					<figcaption>
						<a href="https://jsr.io">JSR</a> logo
					</figcaption>
				</figure>

				<figure>
					<img
						src="/images/projects/jsr-io.webp"
						alt="A screenshot of JSR.io, the JavaScript package registry."
						style="border: 1px solid;"
						width="2544"
						height="2038"
					/>
					<figcaption>
						<a href="https://jsr.io">JSR.io</a> - the JavaScript package registry
					</figcaption>
				</figure>

				<hr />

				<figure>
					<img
						src="/images/projects/javascript-tm.webp"
						alt="A screenshot of JavaScript.tm, the site to free JavaScript from Oracle's trademark."
						style="border: 1px solid;"
						width="2544"
						height="2958"
					/>
					<figcaption>
						<a href="https://javascript.tm">JavaScript.tm</a> - campaign to free JavaScript
						from Oracle's trademark
					</figcaption>
				</figure>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>CSS Easing playground</h2>

				<p>
					Created for <a href="/blog/easing-curves">this blog post</a>, this
					interactive playground lets you examine how a variety of easing curves
					look and feel, and allows you to draw up your own and copy the CSS.
				</p>

				<p>
					Every curve on the page is an SVG, including the interactive demo,
					which is accessible across device types. The curve redraws in real
					time as the handles are moved, and an animated node follows the curve
					to demonstrate the movement.
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
					></iframe>
					<figcaption>
						<a href="/demos/easing">joshcollinsworth.com/demos/easing</a>
					</figcaption>
				</figure>
			</div>
		</article>

		<article>
			<div class="sticky">
				<h2>SvelteKit static blog starter</h2>

				<p>
					A fully open-source, pre-configured starter for a SvelteKit blog.
					Includes Markdown and CSS preprocessing; has mdsvex with rehype
					plugins pre-installed; and includes automatic prefetching of top-level
					routes, an RSS feed, and a JSON API.
				</p>

				<p>
					<i
						>(Admittedly, this project is a little less relevant now that
						SvelteKit offers most of this stuff when you set up a new project,
						but the boilerplate remains useful for those who want a quick
						start.)</i
					>
				</p>
				<ul>
					<li>
						<a href="https://sveltekit-static-starter.netlify.app">Live demo</a>
					</li>
					<li>
						<a
							href="https://github.com/josh-collinsworth/sveltekit-blog-starter"
							>GitHub repo</a
						>
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
						style="border: 1px solid;"
					></iframe>
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
				<h2>CodePen Collections</h2>
				<p>
					A couple of CodePen collections showcasing some of my favorite pens
					and experiments, along with some pens that are more about a laugh than
					the code.
				</p>
			</div>
			<div>
				<figure style="margin-top: 0;">
					<a href="https://codepen.io/collection/GpRgyK">
						<img src="/images/projects/collection-1.webp" alt="" style="margin: 0;" />
					</a>
					<figcaption>
						<a href="https://codepen.io/collection/GpRgyK"
							>My favorite CodePens</a
						>
					</figcaption>
				</figure>
				<figure>
					<a href="https://codepen.io/collection/QbLwag">
						<img src="/images/projects/collection-2.webp" alt="" style="margin: 0;" />
					</a>
					<figcaption>
						<a href="https://codepen.io/collection/QbLwag">Humorous pens</a>
					</figcaption>
				</figure>
			</div>
		</article>
	</div>
</Main>

<style>
	.projects {
		p {
			max-width: var(--max-width);
		}

		article {
			display: grid;
			grid-template-columns: 1fr;
			gap: var(--half-note);
			align-items: start;

			@media (min-width: 56rem) {
				grid-template-columns: 2fr 3fr;

				.sticky {
					position: sticky;
					top: var(--half-note);
				}
			}

			@media (min-width: 82rem) {
				grid-template-columns: 2fr 3fr;
			}

			+ article {
				margin-top: var(--dotted-whole-note);

				@media (min-width: 82rem) {
					margin-top: calc(var(--whole-note) * 2);
				}
			}
		}

		.app-badges {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
			padding: 0;
			margin: 0;
			margin-block-start: var(--dotted-quarter-note);
			list-style-type: none;

			li {
				padding: 0;
				margin: 0;
			}

			img {
				margin: 0;
				height: 2.5rem;
				width: auto;
				display: block;
			}
		}

		.screenshots {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 1rem;

			img {
				margin: 0;
				width: 100%;
				max-width: unset;
				border: 1px solid;
				box-shadow: 4px 4px 0 var(--neutral-100);
				border-radius: 6px;

				:global(.dark) & {
					box-shadow: 4px 4px 0 var(--neutral-900);
					border: 0;
				}
			}
		}

		.design-gallery {
			display: flex;
			flex-direction: column;
			gap: var(--half-note);

			hr {
				margin-inline: auto;
				max-width: var(--half-note);
			}

			figure {
				margin: 0;
				display: block;
			}

			figcaption {
				text-align: center;
				font-style: italic;
				margin-top: 0.5rem;
			}

			.logo-box {
				padding: var(--whole-note) var(--quarter-note);
				display: flex;
				justify-content: center;
				align-items: center;
				border: 1px solid var(--neutral-darker);

				@media (min-width: 32rem) {
					padding: var(--dotted-whole-note) var(--half-note);
				}

				@media (min-width: 64rem) {
					padding-inline: var(--whole-note);
				}

				img {
					margin: 0;
					width: auto;
					max-width: unset;
					height: 100%;
					max-height: 4rem;
					margin-inline: auto;
				}
			}

			.jsr-logo {
				transition: transform 0.2s cubic-bezier(0.5, 0, 0.5, 1);
			}

			.logo-box:has(.jsr-logo):hover .jsr-logo {
				transform: rotate(180deg);
			}
		}

		.interactive-showcase {
			border-radius: 0.5rem;
			overflow: hidden;
		}

		article > div > h3:first-of-type {
			margin-top: 0;
		}

		.image-gallery {
			width: 100%;

			figure {
				margin-top: 0;
			}

			img {
				margin: 0 auto var(--half-note);
				display: block;
				max-width: unset;
				width: calc(100% + (var(--margin) * 2));
				margin-left: calc(var(--margin) * -1);

				@media (min-width: 56rem) {
					max-width: calc(100% + var(--margin));
					width: auto;
					margin-left: 0;
				}
			}
		}
	}
</style>
