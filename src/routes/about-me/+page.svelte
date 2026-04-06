<script lang="ts">
	import Main from '$lib/components/Main.svelte'
	import { EXTERNAL_POSTS } from '$lib/data/external_posts'
	import { talks } from '$lib/data/talks'
</script>

<svelte:head>
	<title>Josh Collinsworth | About me</title>
	<meta
		data-key="description"
		name="description"
		content="A bit about my personal life and work history."
	/>
</svelte:head>

<Main>
	<div class="compressed-content writing">
		<img
			class="profile-pic"
			src="/images/profile-pic.webp"
			alt="Me, Josh Collinsworth, a bald white guy with a beard and glasses, smiling against a blurry autumn background in a button-up shirt."
		/>
		<h2>Who I am and what I do</h2>

		<p>
			I’m currently a Design Engineer at <a href="https://deno.land">Deno</a>,
			where my work touches design, development, marketing, and communications.
			I’ve led and designed full rebrands for Deno itself,
			<a href="https://deno.com/deploy">Deno Deploy</a>, and
			<a href="https://jsr.io">JSR</a>, though my main focus has been frontend
			development and design, bringing unified design systems and components to
			Deno’s products, documentation, and web presence.
		</p>

		<p>
			In general, I’m more of a coder who designs than a designer who codes, but
			my degree is in graphic design, and I’m proficient in both roles. I also
			bring a background in marketing, teaching, and technical customer support
			to my work. Ultimately, the common thread in what I do is effective
			communication.
		</p>

		<h3>Prior professional experience</h3>
		<p>
			Prior to Deno, I spent a couple of years as a senior frontend developer
			(L6) at
			<a href="https://shopify.com">Shopify</a>, focused on marketing for
			<a href="https://shopify.com/pos">Point of Sale</a>
			products and services. Before that, I was a Senior JavaScript developer at
			<a href="https://aware3.com">Aware3</a>
			(<i>now FACTS</i>), and a front-end engineer at
			<a href="https://wpengine.com">WP Engine</a>, working on core product
			features in both roles.
		</p>
		<p>
			Before becoming a full-time developer, I spent several years as both a
			senior support lead at
			<a href="https://getflywheel.com">Flywheel</a>, and a course instructor
			for
			<a
				href="https://aiminstitute.org/programs/technology-training/aim-code-school/"
				>AIM Code School</a
			>
			(<i>though it was Interface Code School at the time</i>), where I taught
			WordPress development, and was solely responsible for both curriculum
			development and teaching.
		</p>

		<p>
			Before entering tech, I spent a few years as a graphic designer; worked in
			foodservice; and was a regularly gigging musician (though not an otherwise
			successful one).
		</p>

		<h3>Other work</h3>
		<p>
			As a writer, I authored the CSS Tricks series <a
				href="https://css-tricks.com/a-complete-beginners-guide-to-npm/"
				>A Complete Beginner's Guide to NPM</a
			>, and I enjoy blogging about dev, design and tech (both
			<a href="#writing">freelance</a>
			and
			<a href="blog">here on this site</a>). Occasionally, I get asked to talk
			about what I write
			<a href="#appearances">on podcasts</a>.
		</p>
		<p>
			In my spare time, I often enjoy hobby coding; I’m the maker and designer
			of the word games <i>Quina</i>
			(<a href="https://apps.apple.com/us/app/quina/id1636895462">iOS</a>/<a
				href="https://play.google.com/store/apps/details?id=app.quina.collinsworth"
				>Android</a
			>/<a href="https://quina.app">web</a>) and <i>Hondo</i>
			(<a
				href="https://apps.apple.com/us/app/hondo/id1636016699?platform=iphone"
				>iOS</a
			>/<a
				href="https://play.google.com/store/apps/details?id=com.playhondo.www.twa"
				>Android</a
			>/<a href="https://playhondo.com">web</a>). Although those are my only
			“finished” and launched apps (so far), I also tend to have a bunch of
			demos and prototypes going at once.
		</p>
		<p>
			I wrote and maintain an open-source SvelteKit static blog starter (when I
			have the time, at least—<a
				href="https://github.com/josh-collinsworth/sveltekit-blog-starter"
				>repo</a
			>/<a href="https://sveltekit-static-starter.netlify.app">demo</a>), and I
			still do occasional freelance development and design.
		</p>

		<h3>Hobbies & personal life</h3>

		<p>
			I lived in Omaha for most of my career, but I’ve been in Kansas City since
			2022. I've been married since 2012, a dad since 2019, and a dad of two
			since 2025 (though I was notorious for dad jokes since long before
			either). My life increasingly revolves around children’s school and
			sporting events, which I do enjoy, but my wife and I still try to carve
			out time for our own projects and hobbies when we can.
		</p>

		<p>
			Personally, I enjoy cooking, daily puzzle games (particularly <a
				href="https://inkwellgames.com">Inkwell</a
			>
			and <a href="https://www.cluesbysam.com">Clues by Sam</a>), and games in
			general, being a lifelong Nintendo fan and avid board game enjoyer. I care
			deeply about accessibility, equity, social justice, and leaving this place
			in a little better shape for our kids. I enjoy learning new things,
			playing music, and dogs.
		</p>

		<p>
			I’m also a font hoarder, a certified
			<a href="https://www.instagram.com/reel/CsguER6r9lL/">beverage goblin</a>
			(in particular, I enjoy cold brew coffee during the week, and an IPA or a well-crafted
			cocktail on the weekend), a maybe-weirdly big fan of Costco, and—online, at
			least—a semi-notorious React critic. (Online, I'm also a regular in the
			<a href="https://shoptalkshow.com">ShopTalk Show</a>
			<a href="https://patreon.com/shoptalkshow">Discord</a>, so if you listen
			to that podcast, you also might have heard me referred to as “Josh ‘Triple
			Threat’ Collinsworth,” which is an honor I'm not sure I completely
			deserve, but I'll take it.)
		</p>

		<h3>More</h3>

		<ul>
			<li>
				<a href="/resume">Resume/CV</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/joshcollinsworth" rel="nofollow"
					>LinkedIn</a
				>
			</li>
			<li>
				<a href="https://github.com/josh-collinsworth" rel="nofollow">GitHub</a>
			</li>
			<li>
				<a href="/contact?from_page=about">Contact</a>
			</li>
		</ul>

		<h2 id="appearances">Talks and appearances</h2>
		<p class="subhead">Conference presentations, trainings, and podcasts</p>

		<ul>
			{#each talks as talk}
				<li>
					<b>
						{#if talk.link}
							<a href={talk.link} rel="external">
								{talk.title}
							</a>
						{:else}
							{talk.title}
						{/if}
					</b>
					<br />
					<i>{talk.event}</i>
				</li>
			{/each}
		</ul>

		<h2 id="writing">Writing</h2>
		<p class="subhead">Articles written for other publications</p>

		<ul>
			{#each EXTERNAL_POSTS as post}
				<li>
					<b>
						{#if post.slug}
							<a href={post.slug} rel="external">
								{post.title}
							</a>
						{:else}
							{post.title}
						{/if}
					</b>
					<br />
					<i>{post.subtitle}</i>
				</li>
			{/each}
		</ul>
	</div>
</Main>

<style>
	.writing {
		h2 {
			margin-bottom: 0;

			& + .subhead {
				margin-top: var(--sixteenth-note);
			}
		}

		ul {
			padding-top: var(--quarter-note);
			margin-top: var(--quarter-note);
			border-top: 1px solid var(--neutral-lighter);
		}

		.subhead {
			font-size: 1.1rem;
			font-style: italic;
			margin: 0;
		}

		.profile-pic {
			margin: 0;
			width: 100%;
			max-width: 250px;
			box-shadow: 8px 9px 0 0 var(--blue-light);
			border: 2px solid var(--paper);

			:global(.dark) & {
				box-shadow: 5px 8px 0 0 var(--blue-dark);
			}

			& + h2 {
				margin-top: var(--half-note);
				margin-bottom: var(--quarter-note);
			}
		}
	}
</style>
