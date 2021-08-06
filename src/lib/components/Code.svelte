<script lang="typescript">
export let codeLang: string;
</script>

<pre class="language-{codeLang}">
	<code class="language-{codeLang}">
		<slot />
	</code>
</pre>

<style>
pre {
	font-family: 'MonoLisa', 'Courier', monospace;
	font-style: normal;
	font-weight: normal;
	background: var(--darkerGray);
	background: #2c292d; /*the Monokai background color */
	padding: 1.5em;
	margin: 2rem auto;
	color: var(--white);
	border-radius: 0.5em;
	font-size: .8rem;
	overflow: auto;
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

pre code {
	background: transparent;
	font-size: inherit;
	padding: 0;
}
</style>
