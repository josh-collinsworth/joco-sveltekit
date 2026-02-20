<script>
	import Main from '$lib/components/Main.svelte'

	let { data } = $props()
</script>

<Main>
	<div style="max-width: var(--max-width);">
		<h2>AI usage</h2>

		<p>
			I do not use AI for any of the writing on this site. Every word, letter,
			and em dash is written by me, by hand, mistakes and all.
		</p>

		<p>
			I also write all the code for this site as well, because this is my
			personal site and writing code is fun for me, and I like to understand the
			systems I'm using.
		</p>

		<p>
			I also never use AI generated images, with the caveat that I do on rare
			occasions use AI to get started with a reference image or a rough starting
			point. The overwhelming majority of the time, I make my images from
			scratch, but I can't quite say I <em>never</em> use AI for images. When I do
			us it, however, it's always only as a starting point; I always manually make
			the image into something of my own, and never use an AI image as-is or unedited.
		</p>

		<hr />

		<h3>My writing on AI</h3>
		<ul>
			{#each data.aiPosts as post}
				<li>
					<a href="/blog/{post.slug}">
						{post.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</Main>
