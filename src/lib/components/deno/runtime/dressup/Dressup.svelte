<script lang="ts">
	import { onMount } from 'svelte'
	import { dressupState } from './dressup-state.svelte.ts'
	import DressupDino from './DressupDino.svelte'
	import DressupControlPanel from './DressupControlPanel.svelte'

	let { alwaysOpen = false }: { alwaysOpen?: boolean } = $props()

	let imageCanvas = $state<HTMLCanvasElement>()
	let heroContainer = $state<HTMLDivElement>()

	onMount(() => {
		if (alwaysOpen) {
			dressupState.isMenuOpen = true
		}
	})

	function downloadDino() {
		const svgNode = document.getElementById(
			'my-dino'
		) as unknown as SVGSVGElement
		if (!svgNode) return

		const svgString = new XMLSerializer().serializeToString(svgNode)
		const svgBlob = new Blob([svgString], {
			type: 'image/svg+xml;charset=utf-8'
		})

		const DOMURL = globalThis.URL || globalThis.webkitURL || globalThis
		const url = DOMURL.createObjectURL(svgBlob)

		const image = new Image()
		image.width = svgNode?.width.baseVal.value || 0
		image.height = svgNode?.height.baseVal.value || 0
		image.src = url
		image.onload = function () {
			const canvas = imageCanvas
			if (canvas) {
				canvas.width = image.width
				canvas.height = image.height
				const ctx = canvas.getContext('2d')
				if (!ctx) return

				ctx.drawImage(image, 0, 0)
				DOMURL.revokeObjectURL(url)

				const imgURI = canvas
					.toDataURL('image/png')
					.replace('image/png', 'image/octet-stream')

				const a = document.createElement('a')
				a.download = 'my-dino.png'
				a.target = '_blank'
				a.href = imgURI
				a.click()
				a.remove()
			}
		}
		svgNode.style.backgroundColor = 'transparent'
	}

	function toggleMenu() {
		const isMenuOpening = !dressupState.isMenuOpen
		dressupState.isMenuOpen = !dressupState.isMenuOpen
		if (isMenuOpening && globalThis.scrollY > 200) {
			heroContainer?.scrollIntoView({ behavior: 'smooth' })
		}
		heroContainer?.focus()
	}
</script>

<div class="dressup-container" bind:this={heroContainer} tabindex="-1">
	<canvas class="export-canvas" bind:this={imageCanvas}></canvas>

	<div class="content-grid">
		{#if alwaysOpen}
			<!-- Standalone layout: control panel + dino side by side -->
			<DressupControlPanel download={downloadDino} closable={false} />
			<DressupDino />
		{:else}
			<!-- Left side: flip container -->
			<div
				class="flip-container"
				style="transform: rotateY({dressupState.isMenuOpen
					? '180deg'
					: '0deg'})"
			>
				<!-- Front: heading text -->
				<div class="flip-front">
					<h1>Uncomplicate JavaScript</h1>
					<p>Deno is the open-source JavaScript runtime for the modern web.</p>
					<div class="cta-row">
						<a
							href="https://docs.deno.com/"
							class="cta cta-primary"
							tabindex={dressupState.isMenuOpen ? -1 : 0}
						>
							Documentation
						</a>
						<a
							href="https://github.com/denoland/deno/"
							class="cta cta-secondary"
							tabindex={dressupState.isMenuOpen ? -1 : 0}
						>
							<svg
								viewBox="0 0 16 16"
								width="16"
								height="16"
								fill="currentColor"
							>
								<path
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
								></path>
							</svg>
							GitHub
						</a>
					</div>
				</div>

				<!-- Back: control panel -->
				<DressupControlPanel download={downloadDino} />
			</div>

			<!-- Right side: dino SVG -->
			<DressupDino />

			<!-- Toggle button -->
			<div
				class="toggle-btn-container"
				class:btn-hidden={dressupState.isMenuOpen}
			>
				<button
					type="button"
					onclick={toggleMenu}
					class="toggle-btn"
					tabindex={dressupState.isMenuOpen ? -1 : 0}
					style={dressupState.isMenuOpen
						? ''
						: 'animation: button_bounce 4s ease-in-out infinite;'}
				>
					Make your own dino!
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.dressup-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		z-index: 10;
		position: relative;
		outline: none;
		container-type: inline-size;
		font-size: 0.75rem;
		font-family: var(--heading-font);
		font-weight: bold;
		border: 2px solid #121417;
		border-radius: 0.5rem;
		overflow: clip;

		a,
		button {
			font: inherit;
		}
	}

	.export-canvas {
		position: absolute;
		left: -100vw;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		background-color: var(--neutral-50);
		color: var(--neutral-darker);
	}

	@container (min-width: 640px) {
		.content-grid {
			grid-template-columns: minmax(14rem, 1fr) 3fr;
		}
	}

	.flip-container {
		background-color: transparent;
		transition: transform 300ms cubic-bezier(0.77, 0, 0.175, 1);
		transform-origin: center;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-items: center;
		perspective: 1000px;
		transform-style: preserve-3d;
	}

	.flip-front {
		grid-column-start: 1;
		grid-row-start: 1;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	h1 {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 800;
		line-height: 1.1;
		color: #121417;
		margin: 0 0 1rem;
	}

	p {
		font-size: clamp(1rem, 2vw, 1.25rem);
		color: #6b7280;
		margin: 0 0 1.5rem;
		line-height: 1.5;
	}

	.cta-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: center;
	}

	.cta {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 9999px;
		padding: 0.75rem 1.5rem;
		font-weight: 600;
		font-size: 1rem;
		border: 1px solid #121417;
		text-decoration: none;
		color: #121417;
		transition: opacity 0.15s;
	}

	.cta:hover {
		opacity: 0.85;
	}

	.cta-primary {
		background-color: #70ffaf;
		border-color: #121417;
	}

	.cta-secondary {
		background-color: #fff;
		border-color: #121417;
	}

	.toggle-btn-container {
		position: absolute;
		bottom: -0.5rem;
		left: 1rem;
		z-index: 10;
		width: 100%;
	}

	@container (min-width: 640px) {
		.toggle-btn-container {
			left: calc(75% - 8rem);
			width: auto;
		}
	}

	@container (min-width: 1280px) {
		.toggle-btn-container {
			left: calc(50vw + 292px - 8rem);
		}
	}

	.toggle-btn {
		leading-trim: both;
		line-height: 1.25;
		width: calc(100% - 2rem);
		border: 1px solid #121417;
		border-bottom: 0;
		padding: 1.5rem;
		padding-bottom: 2rem;
		background-color: #70ffaf;
		border-radius: 1.5rem 1.5rem 0 0;
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 8px 10px -6px rgba(0, 0, 0, 0.1);
		font-weight: 600;
		font-size: 1.125rem;
		cursor: pointer;
		transition: transform 200ms cubic-bezier(0.77, 0, 0.175, 1);
	}

	@container (min-width: 640px) {
		.toggle-btn {
			width: 100%;
		}
	}

	@container (min-width: 768px) {
		.toggle-btn {
			width: 16rem;
		}
	}

	.btn-hidden .toggle-btn {
		transform: translateY(100%);
	}

	@keyframes button_bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-0.5rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.toggle-btn {
			animation: none !important;
		}
	}
</style>
