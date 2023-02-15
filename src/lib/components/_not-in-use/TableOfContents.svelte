<script lang="ts">
	/**
	 * This whole approach is kind of a hack, but it's one that works better than any other
	 * approach I could find. I even used the remark/rehype plugins, but they caused a reload
	 * when a link was clicked. So although I would much prefer to have this HTML pre-generated,
	 * this works as a progressive enhancement, so I'm sticking with it for now at least.
	 * 
	 * EDIT: ended up removing this component entirely. Left here just in case I decide to reuse it one day.
	 */

	import { onMount } from 'svelte'

	const scrollToHeading = (e: Event) => {
		const anchor = e.target as HTMLAnchorElement
		if (anchor.href) {
			const target = anchor.href.split('#').pop()
			document.getElementById(target).scrollIntoView({ behavior: 'smooth' })
		}
	}

	let showTableOfContents: boolean = false
	let output: string = ``

	/**
	 * This whole approach feels hacky, but I tried several others and kept running into walls
	 * with how list HTML tags need to be nested. 
	 * 
	 * Every other solution I could think of either required a usage of `{each}` that Svelte 
	 * doesn't allow (it requires you to close tags within the block; you can't leave one open), 
	 * or way, way more looping (or both). So I'll just stick with this hacky approach since 
	 * it works and as a bonus, is a progressive enhancement.
	*/
	onMount(() => {
		const allHeadings = document.querySelectorAll('article h1 ~ :is(h2, h3, h4, h5, h6)')

		if (allHeadings.length < 5) return

		showTableOfContents = true
		let previousHeadingLevel: number
		
		Array.from(allHeadings).forEach((heading, i) => {
			const { innerText, tagName } = heading as HTMLHeadingElement
			const level = parseInt(tagName[1])
			heading.id = `heading-${i}`

			if (i === 0) {
				output += `<li>`
			} else if (previousHeadingLevel === level) {
				output += `</li><li>`
			} else if (previousHeadingLevel < level) {
				output += `<ul><li>`
			} else if (previousHeadingLevel > level) {
				const subtraction =
					i + 1 === allHeadings.length
						? level + 1
						: previousHeadingLevel - level 
				for (let n = 0; n < subtraction; n++) {
					output += '</li></ul>'
				}
				output += `</li><li>`
			}
			output += `<a href="#heading-${i}">${innerText}</a>`
			previousHeadingLevel = level
		}) 
	})
</script>

{#if showTableOfContents}
	<div class="toc-wrap">
		<aside class="toc">
			<h2>
				<span class="opening-bracket" aria-hidden="true">[</span>
				Table of contents
				<span class="closing-bracket" aria-hidden="true">]</span>
			</h2>
			
			<ul class="toc-list" on:click|preventDefault={scrollToHeading}>
				{@html output}
			</ul>
		</aside>
	</div>
{/if}



<style lang="scss" global>
	.toc-wrap {
		background: linear-gradient(to bottom right, var(--lightGray), var(--yellow));
		background: linear-gradient(to bottom right, #a7a8aa, #92abb2, #5eca78, #b6ec1f, #ffd100);
		padding: 2px;
		margin: 3rem 0;
	}

	.toc {
		background: var(--paper);
		padding: 1rem 1.5rem 1.5rem;
		line-height: 1.6;
		width: 100%;
		position: relative;
		z-index: 2;
		font-family: var(--headingFont);

		h2 {
			font-weight: bold;
			font-family: var(--headingFont);
			font-size: 0.8rem;	
			margin: 0;
			background: var(--paper);
			position: relative;
			padding: 0;
			top: calc(-1rem - 0.5em);
			left: 0;
			text-transform: uppercase;
			color: var(--lightGray);
			display: flex;
			width: 12em;
			justify-content: space-between;
			align-items: center;
			line-height: 1;

			.opening-bracket,
			.closing-bracket {
				display: block;
				position: relative;
				z-index: 2;
				left: -1px;
				bottom: .05em;
			}

			.closing-bracket {
				left: unset;
				right: -1px;
			}
		}
		
		.toc-list {
			list-style-type: decimal;
			font-size: 0.85rem;
			margin: 0;
	
			li::marker {
				color: var(--ink);
				content: unset;
				font-weight: normal;
			}

			> li {
				font-weight: bold;

				&::marker {
					font-weight: bold;
				}

				ul {
					font-weight: normal;
				}
			}
			
			ul {
				list-style-type: lower-alpha;
				margin: 0.25em 0 0;

				ul {
					list-style-type: decimal;
				}
			}
			
			li {
				list-style-type: inherit;
				margin: 0 0 0.25em;

				::marker {
					content: '- ';
				}

				a {
					text-decoration: none;
				}
			}
		}
	}
</style>