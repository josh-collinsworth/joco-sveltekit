<script lang="ts">
	import { onMount } from 'svelte'
	import Rain from './hero/Rain.svelte'
	import Snow from './hero/Snow.svelte'
	import Steam from './hero/Steam.svelte'

	let {
		backgroundTheme = 'rain'
	}: { backgroundTheme?: 'rain' | 'snow' | 'none' } = $props()

	let showPlaceholder = $state(true)
	let mainImageEl: HTMLImageElement
	let bgImageEl: HTMLImageElement

	onMount(() => {
		const IMAGES_TO_LOAD = 2
		let loaded = 0

		const check = () => {
			loaded++
			if (loaded >= IMAGES_TO_LOAD) {
				showPlaceholder = false
			}
		}

		;[mainImageEl, bgImageEl].forEach((img) => {
			if (img?.complete) {
				check()
			} else {
				img?.addEventListener('load', check)
			}
		})
	})
</script>

<div class="hero-container">
	<img
		class="layer bg-image"
		class:hidden-layer={showPlaceholder}
		src="/images/lofi-hero-bg.webp"
		alt=""
		bind:this={bgImageEl}
		width="500"
		height="500"
	/>

	<div class="layer cloud-layer" class:cloud-hidden={showPlaceholder}>
		<img class="cloud-img" src="/images/lofi-hero-clouds.webp" alt="" />
		<img class="cloud-img" src="/images/lofi-hero-clouds.webp" alt="" />
	</div>

	{#if backgroundTheme === 'rain' && !showPlaceholder}
		<div class="layer weather-layer">
			<Rain />
		</div>
	{/if}

	{#if backgroundTheme === 'snow' && !showPlaceholder}
		<div class="layer weather-layer">
			<Snow />
		</div>
	{/if}

	<img
		class="layer fg-image z-20"
		class:hidden-layer={showPlaceholder}
		src="/images/lofi-hero-fg.webp"
		alt=""
		bind:this={mainImageEl}
	/>

	<div class="layer z-20" class:hidden-layer={showPlaceholder}>
		<Steam />
	</div>

	<div class="blink-dot z-20" class:hidden-layer={showPlaceholder}></div>

	<img
		class="layer placeholder"
		class:placeholder-visible={showPlaceholder}
		width="1000"
		height="1000"
		src="/images/lofi-placeholder-{backgroundTheme}.webp"
		loading="eager"
		alt="An illustration in the style of lo-fi anime showing a cute dinosaur coding on a laptop in a cozy room. The laptop has a Deno sticker on the lid, and there's a steamy mug of coffee beside it. In the background is a plant, on the sill of a window overlooking hills and trees. It's dusk outside, with some stars visible in the upper skies, and it is raining gently as clouds slowly float past. The interior is warmly lit by a single desk lamp. On the desk is a takeout box, with chopsticks and a lemon beside it. Peeking over the edge of the box, barely visible, is DeeDee, the Deno Deploy mascot. Ferris, the Rust mascot, can also just barely be seen peeking out from inside the plant pot."
	/>
</div>

<style>
	.hero-container {
		display: grid;
		position: relative;
		align-items: center;
		justify-content: center;
		aspect-ratio: 1;
		overflow: clip;
		height: 100%;
		width: auto;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);

		img {
			margin: 0;
		}
	}

	.layer {
		grid-column: 1;
		grid-row: 1;
		height: 100%;
		width: auto;
	}

	.weather-layer {
		position: relative;
		z-index: 10;
	}

	.z-20 {
		position: relative;
		z-index: 20;
	}

	.hidden-layer {
		opacity: 0;
	}

	.cloud-layer {
		width: 200%;
		height: 100%;
		display: flex;
		grid-column: 1;
		grid-row: 1;
		animation: cloud_drift 120s linear infinite;
	}

	.cloud-hidden {
		display: none;
	}

	.cloud-img {
		width: 50%;
	}

	.blink-dot {
		position: absolute;
		border-radius: 9999px;
		left: 54%;
		top: 40.5%;
		height: 4%;
		width: 10%;
		background-color: #f2f0df;
		animation: blink 7s linear infinite;
	}

	.placeholder {
		aspect-ratio: 1;
		transition: opacity 100ms;
		opacity: 0;
	}

	.placeholder-visible {
		opacity: 1;
	}

	@keyframes cloud_drift {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@keyframes blink {
		0%,
		98.9% {
			opacity: 0;
		}
		99%,
		100% {
			opacity: 1;
		}
	}
</style>
