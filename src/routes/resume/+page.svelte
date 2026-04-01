<script lang="ts">
	import type { PageData } from './$types'

	import Main from '$lib/components/Main.svelte'
	interface Props {
		data: PageData
	}

	let { data }: Props = $props()
	let { Resume } = $derived(data)

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
	<link rel="stylesheet" href="/css/resume.css" />
</svelte:head>

<Main>
	<div class="resume compressed-content">
		{#if MY_EMAIL && MY_PHONE}
			<div class="hidden-contact">
				<ul>
					<li>
						<a href="mailto:{MY_EMAIL}">{MY_EMAIL}</a>
					</li>
					<li><a href="tel:{MY_PHONE}">{MY_PHONE}</a></li>
					<li>
						<a
							href="https://joshcollinsworth.com"
							target="_blank"
							rel="noopener noreferrer">joshcollinsworth.com</a
						>
					</li>
				</ul>
			</div>
		{/if}
		<Resume />
	</div>
</Main>

<style>
	:global(main),
	:global(.compressed-content) {
		position: relative;
	}

	.hidden-contact {
		font-size: 7pt;
		position: absolute;
		top: 0.5in;
		right: 0;
		display: none;

		@media print {
			display: block;
		}

		ul,
		li {
			padding: 0;
			margin: 0;
			list-style-type: none;
			text-align: right;
		}

		li {
			line-height: 1.5;
			margin: 0;
		}
	}
</style>
