<script lang="ts">
	import { preventDefault } from 'svelte/legacy'

	/**
	 * This whole approach is kind of a hack, but it's one that works better than any other
	 * approach I could find. I even used the remark/rehype plugins, but they caused a reload
	 * when a link was clicked. So although I would much prefer to have this HTML pre-generated,
	 * this works as a progressive enhancement, so I'm sticking with it for now at least.
	 *
	 * EDIT: ended up removing this component entirely. Left here just in case I decide to reuse it one day.
	 */

	import { onMount } from 'svelte'

	// const scrollToHeading = (e: Event) => {
	// 	const anchor = e.target as HTMLAnchorElement
	// 	if (anchor.href) {
	// 		const target = anchor.href.split('#').pop()
	// 		document.getElementById(target).scrollIntoView({ behavior: 'smooth' })
	// 	}
	// }

	let showTableOfContents: boolean = $state(false)
	let output: string = $state(``)

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
		const allHeadings = document.querySelectorAll(
			'article h1 ~ :is(h2, h3, h4, h5, h6)'
		)

		if (allHeadings.length < 5) return

		showTableOfContents = true
		let previousHeadingLevel: number

		Array.from(allHeadings).forEach((heading, i) => {
			const { innerText, tagName } = heading as HTMLHeadingElement
			const level = parseInt(tagName[1])
			// heading.id = `heading-${i}`

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
			output += `<a href="#${heading.id}">${innerText}</a>`
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

			<ul class="toc-list">
				{@html output}
			</ul>
		</aside>
	</div>
{/if}
