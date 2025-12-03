const backUpArrowSVG = `<svg
	width="1em"
	viewBox="0 0 20 20"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xml:space="preserve"
	style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.5;"
>
	<g transform="matrix(1.2349,0,0,1.21674,-2.15404,-6.34348)">
		<path
			d="M1.744,15.844L10.547,15.844C11.225,15.844 11.876,15.57 12.356,15.084C12.835,14.597 13.105,13.937 13.105,13.248C13.105,10.421 13.105,6.298 13.105,6.298"
			style="fill:none;stroke:currentColor;stroke-width:2px;"
		/>
	</g>
	<path
		d="M8.82,5.155L14.029,1.319L19.238,5.155"
		style="fill:none;stroke:currentColor;stroke-width:2px;stroke-linejoin:miter;"
	/>
</svg>`

export function myFootnoteRehypePlugin() {
	return (tree) => {
		let footnoteCounter = 0
		let annotations = `<ol class="footnote-annotations">`

		const searchChildrenForFootnotes = (node) => {
			if (node.type === 'element' && node?.children?.length) {
				node.children = node.children
					.map((child, idx) => {
						if (node?.children[idx - 1]?.value === '<footnote>') {
							footnoteCounter++
							annotations += `<li id="footnote-${footnoteCounter}">${child.value} <a href="#footnote-link-${footnoteCounter}" class="back-link" aria-label="Back to original location">${backUpArrowSVG}</a></li>`
							return {
								...child,
								type: 'element',
								tagName: 'a',
								properties: {
									href: `#footnote-${footnoteCounter}`,
									class: 'footnote-link',
									id: `footnote-link-${footnoteCounter}`
								},
								children: [{ type: 'text', value: `${footnoteCounter}` }],
								position: child.position
							}
						} else if (child.type === 'element' && child?.children?.length) {
							return searchChildrenForFootnotes(child)
						} else {
							return child
						}
					})
					.filter(
						(child) =>
							child.value !== '<footnote>' && child.value !== '</footnote>'
					)
			}
			return node
		}

		tree?.children?.forEach((node) => searchChildrenForFootnotes(node))
		if (footnoteCounter > 0) {
			tree.children = [
				...tree.children,
				{
					type: 'element',
					tagName: 'footer',
					properties: {},
					children: [
						{
							type: 'text',
							value: annotations + `</ol>`
						}
					]
				}
			]
		}
		return tree
	}
}
