<script lang="ts">
	import { EXTERNAL_POSTS } from '$lib/data/external_posts'
	import { talks } from '$lib/data/talks'
	import Main from '$lib/components/Main.svelte'
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
			src="/images/bio-photo.jpg"
			alt="Me, Josh Collinsworth, an average white guy in a patterned button-up, with a beard, glasses, and a CodePen trucker hat."
		/>
		<h2>Who I am</h2>

		<p>
			I'm currently a Frontend Engineer at <a href="https://deno.land">Deno</a>. Before that, I was
			a senior frontend developer at <a href="https://shopify.com">Shopify</a>. In my spare time, I
			love hobby coding; I'm the maker and designer of the word games <i>Quina</i>
			(<a href="https://apps.apple.com/us/app/quina/id1636895462">iOS</a>/<a
				href="https://play.google.com/store/apps/details?id=app.quina.collinsworth">Android</a
			>/<a href="https://quina.app">web</a>) and <i>Hondo</i>
			(<a href="https://apps.apple.com/us/app/hondo/id1636016699?platform=iphone">iOS</a>/<a
				href="https://play.google.com/store/apps/details?id=com.playhondo.www.twa">Android</a
			>/<a href="https://playhondo.com">web</a>).
		</p>

		<p>
			I wrote and maintain an open-source SvelteKit static blog starter (when I have the time, at
			least—<a href="https://github.com/josh-collinsworth/sveltekit-blog-starter">repo</a>/<a
				href="https://sveltekit-static-starter.netlify.app">demo</a
			>), and I still do occasional freelance development and design.
		</p>

		<p>
			Previously, I worked as a Senior JavaScript developer at <a href="https://aware3.com"
				>Aware3</a
			>, and as a front-end engineer at <a href="https://wpengine.com">WP Engine</a>. Before
			becoming a full-time dev, I was a senior support lead at
			<a href="https://getflywheel.com">Flywheel</a>, and also a course instructor for
			<a href="https://interfaceschool.com">AIM Code School</a>, where I taught WordPress
			development, and was solely responsible for both curriculum development and teaching.
		</p>

		<p>
			As a writer, I authored the CSS Tricks series <a
				href="https://css-tricks.com/a-complete-beginners-guide-to-npm/"
				>A Complete Beginner's Guide to NPM</a
			>, and I enjoy blogging about dev, design and tech (both <a href="#writing">freelance</a> and
			<a href="blog">here on this site</a>). Occasionally, I get asked to talk about what I write
			<a href="#appearances">on podcasts</a>.
		</p>

		<p>
			Before entering tech, I spent a few years as a graphic designer (that's what my degree is in).
			Prior to that, I was a bartender and server, and regularly gigged as a musician, though that's
			all been many years ago now.
		</p>

		<p>
			I moved to the Kansas City area fairly recently, but was in Omaha for several years before
			that.
		</p>

		<p>
			Personally, I am a: hobby coder; font hoarder; husband since 2012; dad since 2019 (though
			notorious for dad jokes since long before); accessibility advocate; DEI accomplice; cold brew
			aficionado; Facebook, Instagram, and Twitter abandoner; Mastodon appreciator; semi-notorious
			React critic; occasional public speaker and podcast guest; pun enthusiast; curious learner;
			dog person; lifelong Nintendo fan; musician/guitarist/hack pianist; he/him/his; liberal abuser
			of semicolons.
		</p>

		<h3>More:</h3>

		<ul>
			<li>
				<a href="/contact?from_page=about">Contact</a>
			</li>
			<li>
				<a href="https://linkedin.com/in/joshcollinsworth" rel="nofollow">LinkedIn</a>
			</li>
			<li>
				<a href="https://github.com/josh-collinsworth" rel="nofollow">GitHub</a>
			</li>
			<li>
				<a href="/resume">Resume/CV</a>
			</li>
		</ul>

		<h2 id="appearances">Talks and appearances</h2>
		<p class="subhead">Conference presentations, trainings, and podcasts</p>
		<hr />
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
		<hr />

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

<style lang="scss">
	.writing {
		h2 {
			margin-bottom: var(--quarterNote);
		}

		hr {
			margin: var(--quarterNote) 0 var(--dottedHalfNote);
		}

		.subhead {
			font-size: 1.1rem;
			font-style: italic;
			margin: 0;
		}

		.profile-pic {
			aspect-ratio: 1 / 1;
			object-fit: cover;
			border-radius: 10rem;
			margin: 4.5rem 0 var(--quarterNote) var(--quarterNote);
			shape-outside: circle(6rem);
			float: right;
			max-width: 30vw;

			@media (min-width: vars.$xxs) {
				max-width: 12rem;
				shape-outside: circle(8rem);
			}
		}
	}
</style>
