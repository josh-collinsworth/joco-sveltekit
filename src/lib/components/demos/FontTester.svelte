<script lang="ts">
	import ExternalLink from '$lib/components/icons/ExternalLink.svelte'
	import { onMount } from 'svelte'

	interface Props {
		font: string
		label: string
		fontStyle: string
		fontWeight: string
		placeholder: string
		link: string
		bold: boolean
		italic: boolean
	}

	let {
		font,
		label = '',
		fontStyle = 'normal',
		fontWeight = 'normal',
		placeholder = '',
		link = '',
		bold = false,
		italic = false
	}: Props = $props()

	let size = $state(22)
	let text = $state('')
	let displayBold = $state(false)
	let displayItalic = $state(false)

	let sizeInPx = $derived(size + 'px')
	let fontName = $derived(label || font)

	let computedFontWeight = $derived(
		(displayBold && 'bold') || fontWeight || 'normal'
	)

	let computedFontStyle = $derived(
		(displayItalic && 'italic') || fontStyle || 'normal'
	)

	onMount(() => {
		text = label || font
	})

	const select = (e: Event): void => {
		const target = e.target as HTMLInputElement
		target && target.select()
	}
</script>

<template>
	<form class="tester-form">
		<div class="flex-container">
			<label for={fontName} class="sr">{fontName}</label>
			<input
				id={fontName}
				type="text"
				{placeholder}
				onclick={select}
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
			<input
				id="{fontName}-italic"
				type="checkbox"
				bind:checked={displayItalic}
			/>
			<label for="{fontName}-italic">Italic</label>
		{/if}

		{#if link}
			<p class="details">
				<a rel="external" href={link}>{fontName} family<ExternalLink /></a>
			</p>
		{/if}
	</form>
</template>

<style>
	.tester-form {
		overflow: visible;
		margin: 4rem 0 0;
		position: relative;
		font-family: var(--heading-font);

		label {
			font-size: 0.8rem;
			flex: 1 1 14em;
			margin-top: 0.5rem;
		}

		input[type='range'] {
			flex: 1 1 70%;
			padding: 0;
			margin: 0.5rem 0 0;
			max-width: 12rem;
			outline: none;
			border: none;
		}

		input[type='text'] {
			border: none;
			margin: 0;
			padding: 0.6em 0;
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
			padding-top: var(--half-note);
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
