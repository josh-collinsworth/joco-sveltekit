<script type="typescript">
	import ExternalLink from '$lib/components/icons/ExternalLink.svelte'
	import { onMount } from 'svelte'

	export let font: string
	export let label: string = ''
	export let fontStyle: string = 'normal'
	export let fontWeight: string = 'normal'
	export let placeholder: string = ''
	export let link: string = ''
	export let bold: boolean = false
	export let italic: boolean = false

	let size: number = 42
	let text: string = ''
	let displayBold: boolean = false
	let displayItalic: boolean = false

	let sizeInPx: string
	$: sizeInPx = size + 'px'

	let fontName: string
	$: fontName = (label || font)

	let computedFontWeight: string
	$: computedFontWeight = (displayBold && 'bold') || fontWeight || 'normal'
	
	let computedFontStyle: string
	$: computedFontStyle = (displayItalic && 'italic') || fontStyle || 'normal'

	onMount(() => { text = label || font })

	const select = (e: Event): void => {
		const target = e.target as HTMLInputElement
		target && target.select()
	}
</script>


<template>
	<form class="tester-form" on:submit|preventDefault>
		<div class="flex-container">
			<label for={fontName} class="sr">{fontName}</label>
			<input
				id={fontName}
				type="text"
				placeholder={placeholder}
				on:click={select}
				bind:value={text}
				style="
					font-family: {font};
					font-size: {sizeInPx};
					font-style: {computedFontStyle};
					font-weight: {computedFontWeight};
				"
			/>
		</div>

		<div>
			<label for="{fontName}-size" class="sr">Font size:</label>
			<input
				id="{fontName}-size"
				type="range"
				bind:value={size}
				min="8"
				max="127"
			/>
		</div>

		{#if bold}
			<input id="{fontName}-bold" type="checkbox" bind:checked={displayBold} />
			<label for="{fontName}-bold">Bold</label>
		{/if}

		{#if italic}
			<input id="{fontName}-italic" type="checkbox" bind:checked={displayItalic} />
			<label for="{fontName}-italic">Italic</label>
		{/if}

		{#if link}
			<p class="details">
				<a rel="external" href={link}>{ fontName } family<ExternalLink /></a>
			</p>
		{/if}
	</form>
</template>


<style lang="scss">
	.tester-form {
		overflow: visible;
		margin: 4rem 0 0;
		position: relative;
		font-family: var(--headingFont);

		label {
			font-size: .8rem;
			flex: 1 1 14em;
			margin-top: .5rem;
		}

		input[type="range"] {
			flex: 1 1 70%;
			padding: 0;
			margin: .5rem 0 0;
			max-width: 12rem;
			outline: none;
			border: none;
		}

		input[type=text] {
			border: none;
			margin: 0;
			padding: .6em 0;
			width: 100vw;
			max-width: calc(100vw - (var(--margin) + 1rem));
			line-height: 1em;
			height: 1em;
			overflow: visible;
			position: absolute;

			&:hover {
				cursor: text;
			}
		}

		.flex-container {
			padding-top: var(--halfNote);
			display: flex;
			align-items: flex-end;
			align-content: flex-end;
			position: relative;
		}

		.details {
			margin-top: 1rem;
			font-style: normal;
		}
	}
</style>
