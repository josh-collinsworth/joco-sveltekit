<script lang="ts">
	import Main from '$lib/components/Main.svelte'

	// I don't want these values public on the internet, so I'm just populating them locally when printing only. This way keeps linter errors from popping up.
	const MY_EMAIL = null
	const MY_PHONE = null
</script>

<svelte:head>
	<title>Josh Collinsworth | Résumé</title>
	<meta
		data-key="description"
		name="description"
		content="My professional resume"
	/>
	<meta
		property="og:image"
		content="https://joshcollinsworth.com/images/site-image.png"
	/>
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<Main>
	<div class="resume compressed-content">
		<h1>
			<img src="/images/2026.svg" alt="Josh Collinsworth" class="resume-logo" />
		</h1>
		{#if MY_EMAIL && MY_PHONE}
			<ul class="hidden-contact">
				<li>
					<a href="mailto:{MY_EMAIL}">{MY_EMAIL}</a>
				</li>
				<li>
					<a href="tel:{`+1${MY_PHONE.replace(/[^0-9]/g, '')}`}">{MY_PHONE}</a>
				</li>
				<li>
					<a
						href="https://joshcollinsworth.com"
						target="_blank"
						rel="noopener noreferrer">joshcollinsworth.com</a
					>
				</li>
			</ul>
		{/if}

		<h2 id="summary">Summary</h2>

		<p>
			Design engineer and frontend developer with 7+ years building production
			web applications, design systems, and brands. Specialized in React,
			Svelte/SvelteKit, TypeScript, and CSS/Tailwind, with a strong focus on
			design, accessibility, web animation, and performance.
		</p>

		<hr />

		<h2 id="experience">Experience</h2>

		<div class="subsection-header">
			<h3 id="deno"><a href="https://deno.com/">Deno</a></h3>

			<p>Frontend Engineer/Design engineer</p>

			<p>August 2023 – present</p>
		</div>

		<ul>
			<li>
				Lead frontend development and design across Deno sites, products, and
				documentation
			</li>
			<li>
				Designed and implemented a full-scale redesign of <a
					href="https://deno.com">Deno.com</a
				>, including a full rebrand, illustration, and animation work. This
				redesign correlated with the Deno 2.0, launch and helped to achieve a
				permanent 200% increase in web traffic and Deno monthly active users
			</li>
			<li>
				Complete redesign of <a href="https://deno.com/deploy">Deno Deploy</a>,
				including full rebrand with app and marketing rebuild
			</li>
			<li>
				Designed, branded, and built Deno projects and microsites, including <a
					href="https://jsr.io">JSR</a
				>
				and <a href="https://javascript.tm">javascript.tm</a>
			</li>
			<li>
				Built new product features and refined existing features in <a
					href="https://deno.com/deploy">Deno Deploy</a
				>
			</li>
			<li>Updated and maintained Deno documentation</li>
		</ul>

		<div class="subsection-header">
			<h3 id="shopify"><a href="https://shopify.com/">Shopify</a></h3>

			<p>Senior Front End Developer</p>

			<p>August 2021 – August 2023</p>
		</div>

		<ul>
			<li>
				Led the comprehensive redesign and rebuild of all marketing pages for
				Shopify’s <a href="https://shopify.com/pos">point of sale</a> and retail products
				in Remix for over 30 locales, resulting in an 18% increase in customer conversion
				rate
			</li>
			<li>
				Developed marketing landing pages for major initiatives including
				Shopify’s enterprise offering, <a
					href="https://shopify.com/commerce-components">Commerce Components</a
				>, collaborating with designers and stakeholders on animation, technical
				tradeoffs, and tight deadlines
			</li>
			<li>
				Assisted in conversion of marketing pages from Rails ERB templates to
				server-rendered React, increasing conversions by up to 5%
			</li>
			<li>
				Built universal components using React, TypeScript, and Tailwind;
				collaborated with designers on customization options enabling bespoke
				implementations per landing page
			</li>
			<li>Led multiple marketing internationalization projects</li>
			<li>
				Administered code exercise interviews and feedback for prospective
				applicants
			</li>
		</ul>

		<div class="subsection-header">
			<h3 id="aware3"><a href="https://aware3.com">Aware3 (FACTS)</a></h3>

			<p>Senior JavaScript Developer</p>

			<p>February 2021 – August 2021</p>
		</div>

		<ul>
			<li>
				Mentored junior engineers on front-end best practices; created and
				delivered training on web accessibility covering assistive technologies,
				semantic HTML, ARIA, and WCAG
			</li>
			<li>
				Built new financial reporting features giving <a
					href="https://aware3.com/admin-portal/">admin portal</a
				> users customizable insights into org. finances and transactions
			</li>
			<li>
				Built out design system in Storybook and implemented new components in
				Vue/Knockout, ensuring consistent UI and tight coupling with the backend
				Laravel application
			</li>
		</ul>

		<div class="subsection-header">
			<h3 id="wp-engine"><a href="https://wpengine.com">WP Engine</a></h3>

			<p>Associate Front-End Engineer</p>

			<p>August 2019 – January 2021</p>
		</div>

		<ul>
			<li>
				Built products used by Flywheel customers and support, including an
				in-app communications center and a batch edit feature saving an
				estimated 45–90 seconds per site
			</li>
			<li>
				Rebuilt Flywheel’s site migration form and engineered the UI for a
				migration WordPress plugin, reducing the CS burden of migrations by
				35–40%
			</li>
			<li>
				Spearheaded an accessibility audit and overhaul of legacy Rails and Vue
				components, bringing iconography, links, buttons, and focus styles up to
				compliance standards
			</li>
			<li>
				Volunteered to build four company microsites, including for the <a
					href="https://rise.getflywheel.com/">Rise ERG</a
				>
				and two all-company retreat sites (<a
					href="https://fest.getflywheel.com/">2020</a
				>, <a href="https://fest2019.getflywheel.com/">2019</a>)
			</li>
		</ul>

		<div class="subsection-header">
			<h3 id="flywheel"><a href="https://getflywheel.com">Flywheel</a></h3>

			<p>Support Technical Lead (Tier 2)</p>

			<p>September 2015 – WP Engine acquisition 2019</p>
		</div>

		<ul>
			<li>
				Led the US Tier 2 support team; developed tools and training resources
				including in-depth sessions on SSL, DNS, NGINX, and platform
				architecture
			</li>
			<li>
				Built a Chrome extension adding productivity features to Flywheel’s
				admin panel, saving agents an estimated 15–20 minutes per day; still in
				use by all support agents
			</li>
			<li>Developed and taught a "WordPress 101" course to all new hires</li>
		</ul>

		<div class="subsection-header">
			<h3 id="aim-code-school">
				<a
					href="https://aiminstitute.org/programs/technical-training/aim-code-school-2/"
					>AIM Code School</a
				>
			</h3>

			<p>WordPress course instructor</p>

			<p>September 2015 – July 2018</p>
		</div>

		<ul>
			<li>
				Solely responsible for curriculum development and teaching WordPress
				theme development to classes of 4–12 students, covering PHP, MySQL, web
				performance, and accessibility fundamentals
			</li>
		</ul>

		<div class="subsection-header">
			<h3 id="david-day">
				<a href="https://dday.com">David Day &amp; Associates</a>
			</h3>

			<p>Graphic designer/WordPress developer</p>

			<p>2014–2015</p>
		</div>

		<ul>
			<li>
				Brand design and implementation across print and web, for clients
				including
				<a href="https://nebraskaspineandpain.com/"
					>Nebraska Spine + Pain Center</a
				>
				and <a href="https://www.altergroup.com/">The Alter Group</a>
			</li>
		</ul>

		<hr />

		<h2 id="side-projects">Side Projects</h2>

		<ul>
			<li>
				Independently designed and shipped two original word puzzle games — <a
					href="https://quina.app">Quina</a
				>
				(Nuxt/Vue) and <a href="https://playhondo.com">Hondo</a> (SvelteKit) — to
				iOS, Android, and the web as PWAs
			</li>
			<li>
				Implemented game logic, daily puzzle modes, achievement systems, and
				streak-based scoring; handled full product lifecycle from concept
				through App Store submission
			</li>
			<li>
				Published a technical writeup on <a
					href="https://css-tricks.com/what-i-learned-building-a-word-game-app-with-nuxt-on-google-play/"
					>CSS Tricks</a
				> covering the build process and lessons learned shipping to Google Play
			</li>
		</ul>

		<hr />

		<h2 id="selected-design-work">Selected Design Work</h2>

		<ul>
			<li>
				Redesigned the <a href="https://deno.com/brand">Deno logo and brand</a>
				for the Deno 2.0 launch (2024); led and implemented the comprehensive rebrand
				of
				<a href="https://deno.com/deploy">Deno Deploy</a>; complete brand and
				appearance for <a href="https://jsr.io">JSR</a>
			</li>
			<li>
				Illustration work across <a href="https://deno.com">Deno.com</a> pages and
				properties, including animated/interactive hero graphics
			</li>
			<li>
				Original brand, UI/UX, and game design for <a href="https://quina.app"
					>Quina</a
				>
				and <a href="https://playhondo.com">Hondo</a>
			</li>
			<li>
				Led design for various microsites and efforts such as <a
					href="https://javascript.tm">javascript.tm</a
				> and miscellaneous internal microsites
			</li>
		</ul>

		<hr />

		<h2 id="writing-speaking">Writing &amp; Speaking</h2>

		<ul>
			<li>
				Articles published for <a
					href="https://css-tricks.com/author/joshcollinsworth/">CSS Tricks</a
				>,
				<a href="https://blog.logrocket.com/author/joshcollinsworth/"
					>LogRocket Blog</a
				>, and
				<a
					href="https://getflywheel.com/layout/leveling-up-flywheels-retreat-website/"
					>The Layout</a
				>.
			</li>
			<li>
				Podcast guest on <a href="https://shoptalkshow.com/603/"
					>ShopTalk Show</a
				>, <a href="https://changelog.com/jsparty/244">JS Party</a>,
				<a
					href="https://www.whiskeywebandwhatnot.fm/debating-react-fonts-and-fatherhood-with-josh-collinsworth/"
					>Whiskey Web and Whatnot</a
				>, and others. Speaker at multiple WordCamps and BarCamp Omaha.
			</li>
		</ul>

		<hr />

		<h2 id="relevant-skills">Relevant Skills</h2>

		<ul>
			<li>
				Specialized in Svelte/SvelteKit, React, TypeScript, CSS/Sass, design
				systems, accessibility, web animation, SVG, and performance
				optimization.
			</li>
			<li>
				Also experienced with Vue, Tailwind, Deno, Fresh, Preact, Knockout,
				jQuery, JS testing (Vitest, Karma, Mocha, Chai, framework utility
				libraries), PHP, MySQL, Ruby on Rails, Laravel, Docker, AWS, RegEx,
				NGINX, (Varnish) caching, Redux, Storybook, WordPress, SVG, git/GitHub,
				NPM, Jira, CLIs, DNS, SemVer.
			</li>
		</ul>

		<hr />

		<h2 id="education">Education</h2>

		<div class="subsection-header">
			<h3 id="metropolitan-community-college">
				Metropolitan Community College
			</h3>

			<p>Omaha, Nebraska</p>

			<p>August 2012 – November 2014</p>
		</div>
		<ul>
			<li>Associate’s of Graphic Communication Art and Design (3.95 GPA)</li>
		</ul>

		<hr />

		<h2 id="links">Links</h2>

		<ul>
			<li><a href="/contact?from_page=resume">Contact</a></li>
			<li><a href="https://linkedin.com/in/joshcollinsworth">LinkedIn</a></li>
			<li><a href="https://github.com/josh-collinsworth">GitHub</a></li>
		</ul>
	</div>
</Main>

<style>
	:global(.page-head) {
		display: none !important;
	}

	:global(main) {
		position: relative;
	}

	.hidden-contact {
		font-size: 7pt;
		position: absolute;
		top: 0;
		right: 0;
		text-align: right;
		list-style-type: none !important;

		li + li {
			margin-top: 1pt !important;
		}
	}

	.compressed-content {
		width: 100%;
		max-width: 69ch; /* Nice */ /* I genuinely didn't do this just for the joke; it's just the width that matched print width the best */
		padding: 0;
		margin: 0;
		position: relative;
	}

	.resume-logo {
		display: inline-block;
		margin: 0;
		width: 100%;
		max-width: 14rem;
		height: auto;
	}

	h1 {
		margin: 0;
	}

	.resume {
		display: block;
		width: 100%;
		margin: 0 auto;
		margin-block-start: var(--whole-note);

		h2 {
			font-size: 1rem;
			text-transform: uppercase;
			margin: var(--whole-note) 0 var(--quarter-note);
			border-bottom: 1px solid;
			padding-bottom: 0.2rem;

			&:first-of-type {
				margin-block-start: var(--half-note);
			}
		}

		h2 + .subsection-header {
			margin-block-start: var(--quarter-note);
		}

		.subsection-header {
			display: grid;
			column-gap: 0ch;
			align-items: baseline;
			page-break-inside: avoid;
			margin: var(--dotted-half-note) 0 var(--quarter-note);

			@media (min-width: 56rem) {
				grid-template-columns: auto auto 1fr;

				h3 + p:before {
					content: '–';
					padding: 0 0.5ch;
				}

				p:last-of-type {
					text-align: right;
				}
			}

			h3 {
				font-size: 1rem;
				line-height: inherit;

				a {
					text-decoration-thickness: 1px;
					text-decoration-color: var(--yellow);
				}
			}
			* {
				margin: 0;
			}

			p:last-of-type {
				font-style: italic;
			}
		}

		ul {
			break-before: avoid;
			break-inside: auto;
			margin: 0;
			padding-left: 1rem;

			li {
				margin: 0;
				padding: 0;
				position: relative;
				break-inside: avoid;

				+ li {
					margin-top: var(--eighth-note);
				}
			}
		}

		hr {
			display: none;
		}

		h2:before {
			display: none;
		}
	}

	@media print {
		:global(.layout) {
			max-width: 7.5in;
			padding: 0 1in;
			margin-inline: auto;
			break-inside: auto !important;
		}

		:global(.compressed-content) {
			max-width: unset !important;
			padding-top: 0.5in;
		}

		.compressed-content {
			padding-top: 0;
		}

		h1 {
			margin: 0;
		}

		.resume {
			--quarter-note: 9pt;
			font-size: 9pt;
			margin: 0;

			.resume-logo {
				display: inline-block;
				margin: 0;
				max-width: 1.75in;
				width: 100%;
				height: auto;
			}

			.resume-logo {
				max-width: 1.75in;
			}

			h2 {
				font-size: 9pt;
				position: static;
				margin: 0.375in 0 0.125in;
				border-bottom: 1pt solid;
				padding-bottom: 2pt;
			}

			.subsection-header {
				margin: 0.25in 0 0.075in;
				grid-template-columns: auto auto 1fr;

				h3 + p:before {
					content: '–';
					padding: 0 0.5ch;
				}

				p:last-of-type {
					text-align: right;
				}

				&:first-of-type {
					margin-block-start: 0.15in;
				}

				h3,
				p {
					font-size: 9pt;

					a {
						text-decoration-thickness: 1pt;
						text-decoration-color: currentColor;
					}
				}
			}

			ul {
				padding-left: 12pt;
			}

			ul li {
				+ li {
					margin-top: 0.05in;
				}
			}
		}
	}
</style>
