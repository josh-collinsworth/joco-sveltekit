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
			alt="Me, Josh Collinsworth, an average white guy in a patterned button-up, with a beard, glasses, and a CodePen trucker hat."
		/>
		<h2>Who I am and what I do</h2>

		<p>
			I’m currently a Design Engineer at <a href="https://deno.land">Deno</a>,
			where my work has touched design, development, marketing, and
			communications. I've also led full rebrands for Deno itself, Deno Deploy,
			and JSR, including logo design—though my main focus has been frontend
			development and design, bringing unified design systems and components to
			Deno's products, documentation, and web presence.
		</p>

		<p>
			These days I’m more of a coder who designs than a designer who codes, but
			my original degree is in graphic design, and I'm proficient and passionate
			in both roles. I also bring a background in marketing roles, teaching, and
			technical customer support to my work. Ultimately, I'm a communicator.
		</p>

		<h3>Prior professional experience</h3>
		<p>
			Prior to Deno, I spent a couple of years as a senior frontend developer
			(L6) at
			<a href="https://shopify.com">Shopify</a>; I was a Senior JavaScript
			developer at <a href="https://aware3.com">Aware3</a> (<i>now FACTS</i>);
			and as a front-end engineer at
			<a href="https://wpengine.com">WP Engine</a>. And before becoming a
			full-time developer, I was a senior support lead at
			<a href="https://getflywheel.com">Flywheel</a>, and also a course
			instructor for
			<a href="https://interfaceschool.com">AIM Code School</a>, where I taught
			WordPress development, and was solely responsible for both curriculum
			development and teaching.
		</p>

		<p>
			Before entering tech, I spent a few years as a graphic designer (that's
			what my degree is in), worked in foodservice, and was a regularly gigging
			musician (though not an otherwise successful one).
		</p>

		<h3>Hobbies and interests</h3>
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
			In my spare time, I enjoy hobby coding; I’m the maker and designer of the
			word games <i>Quina</i>
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
			>/<a href="https://playhondo.com">web</a>). I wrote and maintain an
			open-source SvelteKit static blog starter (when I have the time, at least—<a
				href="https://github.com/josh-collinsworth/sveltekit-blog-starter"
				>repo</a
			>/<a href="https://sveltekit-static-starter.netlify.app">demo</a>), and I
			still do occasional freelance development and design.
		</p>

		<h3>Personal life</h3>

		<p>
			I lived in Omaha for most of my career, but I’ve been in Kansas City since
			2022.
		</p>

		<p>
			Otherwise, I am a hobby coder; font hoarder; husband since 2012; dad since
			2019, dad of two since 2025 (though notorious for dad jokes since long
			before either); aspiring advocate for accessibility, equity, and social
			justice; cold brew aficionado; semi-notorious React critic; occasional
			public speaker and podcast guest; pun enthusiast; curious learner; dog
			person; lifelong Nintendo fan; musician/guitarist/hack pianist; liberal
			abuser of semicolons.
		</p>

		<h3>More:</h3>

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

<style>
	.writing {
		h2 {
			margin-bottom: 0;

			& + .subhead {
				margin-top: var(--sixteenth-note);
			}
		}
		hr {
			margin: var(--quarter-note) 0 var(--dotted-half-note);
		}

		.subhead {
			font-size: 1.1rem;
			font-style: italic;
			margin: 0;
		}

		.profile-pic {
			margin: 0;
			width: 100%;
			max-width: 16rem;

			& + h2 {
				margin-top: var(--half-note);
				margin-bottom: var(--quarter-note);
			}
		}
	}
</style>
