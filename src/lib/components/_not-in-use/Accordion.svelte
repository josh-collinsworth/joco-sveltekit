<script lang="ts">
	import { onMount } from 'svelte'
	import { sluggify } from '$lib/assets/js/utils'

	export let title: string = ''

	let accordion: HTMLDivElement
	let openHeight: number
	let isOpen: boolean = true

	const toggleOpen = () => {
		isOpen = !isOpen
	}

	$: ID = sluggify(title)
	$: headingID = `${ID}-heading`

	onMount(() => {
		openHeight = accordion.getBoundingClientRect().height
		const margin = parseInt(getComputedStyle(document.querySelector('body')).getPropertyValue('font-size'))
		accordion.style.setProperty('--openHeight', `${openHeight + 30}px`)
		isOpen = false
	})
</script>


<div class="accordion" class:open={isOpen} bind:this={accordion}>
	<h3 id={headingID} class="accordion__heading">
		<button
			class="accordion__button"
			on:click={toggleOpen}
			aria-pressed={isOpen}
			aria-controls={ID}
		>
			{title}
		</button>
	</h3>
	<div
		class="accordion__content"
		role="region"
		aria-labelledby={headingID}
		id={ID}
	>
		<slot />
	</div>
</div>


<style lang="scss" global>
	.accordion {
		height: 2.5em;
		transition: height .15s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		overflow: hidden;

		.accordion__heading {
			font-size: 1rem;
			margin: 0 0 .5em;
			font-weight: bold;
			font-family: var(--headingFont);
			width: 100%;
			max-width: unset;
		}
		
		.accordion__button {
			padding: 0;
			border: 0;
			background: transparent;
			font-weight: bold;
			width: 100%;
			text-align: left;
			padding: 0 0 0.5em;

			&::before {
				content: '\25B6';
				display: inline-block;
				transition: .1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
				margin-right: .5em;
				color: var(--midGray);
			}
		}

		.accordion__content {
			overflow: hidden;
			padding: calc(var(--quarterNote) / 2) 1rem var(--halfNote);
			display: grid;
			grid-gap: 1rem;

			* {
				margin: 0;
			}
		}

		&.open {
			height: var(--openHeight);

			.accordion__button::before {
				transform: rotate(90deg);
					color: var(--yellow);
			}
		}
	}
</style>
