<script lang="ts">
	import Grid from './Grid.svelte'

	const currentYear: number = new Date().getFullYear()
</script>

<div class="footer-wrapper">
	<Grid inverted={true} />
	<footer class="footer">
		<div class="footer__links">
			<h2 class="h4" id="footer-pages">Pages</h2>
			<nav>
				<ul aria-labelledby="footer-pages">
					<li><a href="/">Home</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/about-me">About me</a></li>
					<li><a href="/projects">Projects</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		</div>
		<div class="footer__links">
			<h2 class="h4" id="footer-links">Links</h2>
			<ul aria-labelledby="footer-links">
				<li><a href="/api/rss.xml" data-sveltekit-reload>RSS</a></li>
				<li><a href="https://ko-fi.com/collinsworth">Ko-Fi</a></li>
				<li>
					<a href="https://github.com/josh-collinsworth" rel="me">GitHub</a>
				</li>
				<li><a href="https://codepen.io/collinsworth">CodePen</a></li>
				<li>
					<a rel="me" href="https://hachyderm.io/@collinsworth">Mastodon</a>
				</li>
				<li>
					<a href="https://bsky.app/profile/collinsworth.dev">Bluesky</a>
				</li>
			</ul>
		</div>

		<div class="fine-print">
			<a href="https://notbyai.fyi/about">
				<img src="/images/ai-badge.svg" alt="Made by a human, not by AI." />
			</a>

			<p>©2015–{currentYear} Josh Collinsworth.</p>

			<p>
				This site uses no tracking or cookies, other than privacy-respecting,
				GDPR-compliant analytics via <a href="https://plausible.io">Plausible</a
				>.
			</p>

			<p>
				Made with
				<a rel="external" href="https://kit.svelte.dev/">SvelteKit</a>;
				hosted&nbsp;on&nbsp;<a rel="external" href="https://netlify.com"
					>Netlify</a
				>.
			</p>
		</div>
	</footer>
</div>

<style lang="scss">
	.footer {
		width: 100%;
		background: var(--blue-dark);
		color: var(--neutral-white);
		line-height: 1.6em;
		padding: 2.5rem var(--margin) 2rem;

		@media (min-width: vars.$sm) {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 0 var(--whole-note);
			align-items: stretch;
			font-size: 0.8rem;
		}

		@media (min-width: vars.$xxl) {
			grid-template-columns: repeat(5, minmax(0, 1fr));
		}

		h2 {
			color: inherit;
			font-size: 0.7rem;
			margin: 0 0 var(--quarter-note);
			width: max-content;
		}

		a {
			color: inherit;
		}

		img {
			display: block;
		}

		&-wrapper {
			overflow: hidden;
			max-width: 100vw;
		}

		&__links {
			padding: 0 var(--quarter-note) var(--quarter-note);
			margin: 2rem 2rem 2rem 1rem;
			border-bottom: 1px solid var(--blue-light);

			::marker {
				color: var(--blue-light);
			}

			@media (min-width: vars.$sm) {
				border-bottom: 0;
				padding: 0;
				margin-inline: 0;
			}

			ul {
				list-style-type: square;
				margin: var(--quarter-note) 0;
			}

			li {
				margin: 0.5rem 0 0;
				font-family: var(--headingFont);
			}
		}

		.fine-print {
			font-style: italic;
			margin-left: 1rem;
			align-self: center;

			@media (min-width: vars.$sm) {
				margin-left: 0;
			}

			@media (min-width: vars.$xxl) {
				grid-column: span 2;
			}

			p {
				margin: var(--quarter-note) 0;
				max-width: 30em;
			}

			img {
				width: auto;
			}
		}
	}
</style>
