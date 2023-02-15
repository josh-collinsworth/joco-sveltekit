<script lang="ts">
	import { page } from '$app/stores'
	import Main from '$lib/components/Main.svelte'
</script>


<Main>
	<h2>{$page.status}</h2>
	<p class="subhead">{$page.error.message}</p>
	
	<p><strong>Ope!</strong> Maybe try these links?</p>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/contact?from_page=error">Contact</a></li>
	</ul>
</Main>


<style lang="scss">
	.subhead {
		font-size: 1.4rem;
		margin: 0 0 4rem;
		max-width: 20em;
		line-height: 1.2;
		font-family: var(--headingFont);
	}
</style>