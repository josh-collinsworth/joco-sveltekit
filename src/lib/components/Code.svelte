<script lang="ts">
	export let lang: string;
</script>

<pre class="language-{lang}">
	<code class="language-{lang}">
		<slot />
	</code>
</pre>

<style lang="scss">
$background: #2c292d;

pre {
	font-family: 'MonoLisa', 'Courier', monospace;
	font-style: normal;
	font-weight: normal;
	background: var(--darkerGray);
	background: $background; /*the Monokai background color */
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

code,
pre {
 
	&[class*="language-"] {
	  color: #f8f8f2;
	  background: none;
	  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	  font-family: MonoLisa, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	  font-display: swap;
	  font-size: .75rem;
	  text-align: left;
	  white-space: pre;
	  word-spacing: normal;
	  word-break: normal;
	  word-wrap: normal;
	  line-height: 1.5;
 
	  -moz-tab-size: 4;
	  -o-tab-size: 4;
	  tab-size: 4;
 
	  -webkit-hyphens: none;
	  -moz-hyphens: none;
	  -ms-hyphens: none;
	  hyphens: none;
	}
}
 
 /* Code blocks */
pre[class*="language-"] {
	padding: 3.5rem 1rem 1.5rem;
	margin: 2rem 0;
	overflow: auto;
	border-radius: 0.3em;
	position: relative;
 
	&:before {
	  content: 'Code';
	  top: 0;
	  left: 0;
	  font-size: 1rem;
	  font-family: var(--body-font), sans-serif;
	  padding: .5rem 1rem;
	  width: 100%;
	  position: absolute;
	  background: var(--darkBlue);
	  background: linear-gradient(to right, var(--darkBlue), rgba(var(--darkBlueRGB), 0));
	  font-style: italic;
	}
}
 
pre.language-css:before {
	content: 'CSS:';
}
 
pre.language-php:before {
	content: 'PHP:';
}
 
pre.language-markdown:before {
	content: 'Markdown:';
}
 
 pre.language-html:before {
	content: 'HTML:';
}
 
pre.language-js:before,
pre.language-javascript:before {
	content: 'JavaScript:';
}
 
:not(pre) > code,
pre {
	&[class*="language-"] {
	  background: $background;
	}
}
 
/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}
 
.token {
 
	&.comment,
	&.prolog,
	&.doctype,
	&.cdata {
	  color: slategray;
	}
 
	&.punctuation {
	  color: #f8f8f2;
	}
 
	&.namespace {
	  opacity: .7;
	}
 
	&.property,
	&.tag,
	&.constant,
	&.symbol,
	&.deleted {
	  color: #78dce8;
	}
 
	&.boolean,
	&.number {
	  color: #ab9df2;
	}
 
	&.selector,
	&.attr-name,
	&.string,
	&.char,
	&.builtin,
	&.inserted {
	  color: #ffd866;
	}
 
	&.operator,
	&.entity,
	&.url,
	&.variable {
	  color: #f8f8f2;
	}
 
	&.atrule,
	&.attr-value,
	&.function,
	&.class-name {
	  color: #ffd866;
	}
 
	&.keyword {
	  color: #78dce8;
	}
 
	&.regex,
	&.important {
	  color: #fc9867;
	}
 
	&.important,
	&.bold {
	  font-weight: bold;
	}
	&.italic {
	  font-style: italic;
	}
 
	&.entity {
	  cursor: help;
	}
}
 
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

</style>
