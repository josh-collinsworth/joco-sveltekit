<script lang="ts">
	import type { PageData } from './$types'

	import Main from '$lib/components/Main.svelte'
	interface Props {
		data: PageData
	}

	let { data }: Props = $props()
	let { Resume } = $derived(data)
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
		<Resume />
	</div>
</Main>
