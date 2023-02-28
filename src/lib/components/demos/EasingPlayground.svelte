<script>
import throttle from 'just-throttle'
import { clamp, formatDecimal } from '$lib/assets/js/utils'
import { onMount } from 'svelte'

// The SVG exists from 0 to 140 on the X axis, and 0 to 300 on the Y axis. The inner square is from 20/100 to 120/200.
let startHandleX = 30
let startHandleY = 140
let endHandleX = 90
let endHandleY = 100
let dragging = null
let currentEasingType = null
let copyButtonIcon = `📋`

let startHandle
let endHandle
let outerFrame

$: startHandleXToBinary = formatDecimal((startHandleX - 20) / 100)
$: startHandleYToBinary = formatDecimal(((300 - startHandleY) / 100) - 1)
$: endHandleXToBinary = formatDecimal((endHandleX - 20) / 100)
$: endHandleYToBinary = formatDecimal(((300 - endHandleY) / 100) - 1)
$: bezierCoordinates = `${startHandleXToBinary}, ${startHandleYToBinary}, ${endHandleXToBinary}, ${endHandleYToBinary}`
$: curveCSS = `cubic-bezier(${bezierCoordinates})`

const trackMovement = (e) => {
	if (!dragging) return

	const rect = outerFrame.getBoundingClientRect();
	// Need different props depending on whether this is a mouse event or a touch event
	const left = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX
	const top = e.type.includes('mouse') ? e.clientY : e.changedTouches[0].clientY

	let xPosition = Math.round(140 / rect.width * (left - rect.left))
	let yPosition = Math.round(300 / rect.height * (top - rect.top))

	xPosition = clamp(20, xPosition, 120)
	yPosition = clamp(0, yPosition, 300)

	console.log(xPosition)

	if (dragging === 'start') {
		startHandleX = xPosition
		startHandleY = yPosition
	} else if (dragging === 'end') {
		endHandleX = xPosition
		endHandleY = yPosition
	}
	currentEasingType = null
}

const handleDragStart = (e) => {
	if (startHandle === e.target) {
		dragging = 'start'
	} else if (endHandle === e.target) {
		dragging = 'end'
	}
	trackMovement(e)
}

const handleDragEnd = () => dragging = null

const copyToClipboard = () => {
	navigator.clipboard.writeText(curveCSS)
	copyButtonIcon = '✅'
	setTimeout(() => { copyButtonIcon = '📋'}, 1200)
}

const premadeEasings = {
	browser: {
		linear: [0.0, 0.0, 1.0, 1.0],
		ease: [0.25, 0.1, 0.25, 1.0],
		'ease-in': [0.42, 0, 1.0, 1.0],
		'ease-out': [0, 0, 0.58, 1.0],
		'ease-in-out': [0.42, 0, 0.58, 1.0],
	},
	code: {
		sineIn: [0.47, 0, 0.745, 0.715],
		sineOut: [0.39, 0.575, 0.565, 1],
		sineInOut: [0.445, 0.05, 0.55, 0.95],
		circIn: [0.6, 0.04, 0.98, 0.335],
		circOut: [0.075, 0.82, 0.165, 1],
		circInOut: [0.785, 0.135, 0.15, 0.86],
		quadIn: [0.55, 0.085, 0.68, 0.53],
		quadOut: [0.25, 0.46, 0.45, 0.94],
		quadInOut: [0.455, 0.03, 0.515, 0.955],
		cubicIn: [0.55, 0.055, 0.675, 0.19],
		cubicOut: [0.215, 0.610, 0.355, 1],
		cubicInOut: [0.645, 0.045, 0.355, 1],
		quartIn: [0.895, 0.03, 0.685, 0.22],
		quartOut: [0.165, 0.84, 0.44, 1],
		quartInOut: [0.77, 0, 0.175, 1],
		quintIn: [0.755, 0.05, 0.855, 0.06],
		quintOut: [0.23, 1, 0.320, 1],
		quintInOut: [0.86, 0, 0.07, 1],
		expoIn: [0.95, 0.05, 0.795, 0.035],
		expoOut: [0.19, 1, 0.22, 1],
		expoInOut: [1, 0, 0, 1],
		backIn: [0.6, -0.28, 0.735, 0.045],
		backOut: [0.175, 0.885, 0.32, 1.275],
		backInOut: [0.68, -0.55, 0.265, 1.55],
	},
}

$: if (currentEasingType) {
	const thisEasing = premadeEasings[currentEasingType.group][currentEasingType.title]
	startHandleX = (thisEasing[0] * 100) + 20
	startHandleY = 300 - ((thisEasing[1] * 100) + 100)
	endHandleX = (thisEasing[2] * 100) + 20
	endHandleY = 300 - ((thisEasing[3] * 100) + 100)
}

let isFrame = false 

onMount(() => {
	if (window.self !== window.top) isFrame = true
})
</script>


<form class="easing-demo" class:is-frame={isFrame} on:submit|preventDefault>
	<div class="intro intro-mobile">
		<h2>CSS easing playground</h2>
		<p>A place to try out various easing types/cubic bézier curves, and to create your own. (Made to accompany <a href="/blog/easing-curves">this post</a>.)</p>
	</div>

	<div
		class="current-curve"
		id="demo-curve"
		on:mousemove={throttle((e) => trackMovement(e), 10, { leading: true })}
		on:mousedown={handleDragStart}
		on:mouseup={handleDragEnd}
		on:mouseleave={handleDragEnd}
		on:touchstart={handleDragStart}
		on:touchend={handleDragEnd}
		on:touchmove={throttle((e) => trackMovement(e), 10, { leading: true })}
		on:touchcancel={handleDragEnd}
	>
		<svg bind:this={outerFrame} class="current-curve__svg" width="100%" height="300%" viewBox="0 0 140 300" version="1.1">
			<text x="70" y="287.5" width="100" text-anchor="middle" class="current-curve__title">
				{ currentEasingType?.title || 'custom' }
			</text>

			<rect class="current-curve__frame" x="20" y="100" width="100" height="100" />
			<path class="current-curve__curve" d="M20,200 C{startHandleX},{startHandleY} {endHandleX},{endHandleY} 120,100" />
			
			<g class:transparent={dragging}>
				<line class="current-curve__handle-tether" x1="20" y1="200" x2={startHandleX} y2={startHandleY} stroke="#34657f" />
				<line class="current-curve__handle-tether" x1="120" y1="100" x2={endHandleX} y2={endHandleY} stroke="#34657f" />
				<g class="current-curve__moving-circle-wrapper" style="--bezierCoordinates: {bezierCoordinates}">
					<circle class="current-curve__moving-circle" cx="20" cy="200" r="8" />
				</g>
				<circle class="current-curve__handle" bind:this={startHandle} cx={startHandleX} cy={startHandleY} r="9" />
				<circle class="current-curve__handle" bind:this={endHandle} cx={endHandleX} cy={endHandleY} r="9" />
			</g>
		</svg>

		<code class="current-curve__coordinates">
			{curveCSS};
		</code>

		<button class="current-curve__copy-btn" on:click={copyToClipboard} type="button">
			<div class="sr">Copy CSS to clipboard</div>
			<span aria-hidden="true">{copyButtonIcon}</span>
		</button>
	</div>

	<div>
		<div class="intro intro-desktop">
			<h2>CSS easing playground</h2>
			<p>A place to try out various easing types/cubic bézier curves, and to create your own. (Made to accompany <a href="/blog/easing-curves">this post</a>.)</p>
		</div>
		<div class="curve-selection">
			{#each Object.entries(premadeEasings) as [group, _]}
				<h3 class="h4">
					{group === 'browser' ? 'Browser defaults' : 'VS Code presets'}
				</h3>
				{#each Object.entries(premadeEasings[group]) as [title, curve]}
					<div class="curve-selection__option-group">
						<input
							bind:group={currentEasingType}
							id={title}
							class="sr"
							value={{group, title}}
							type="radio"
							name="currentEasingType"
						/>
						<label for={title} class={title.slice(0, 4)}>
							<svg class="curve-selection__illustration" width="100%" viewBox="0 0 1.4 1.4" version="1.1">
								<rect class="curve-selection__frame" x="0.2" y="0.2" width="1" height="1" />
								<path
									class="curve-selection__curve"
									d="M0.2,1.2 C{curve[0] + 0.2},{1.4 - (curve[1] + 0.2)} {curve[2] + 0.2},{1.4 - (curve[3] + 0.2)} 1.2,0.2"
								/>
							</svg>
							<code class="curve-selection__title">{title}</code>
						</label>
					</div>
				{/each}
			{/each}
		</div>
	</div>
</form>


<style lang="scss">
.easing-demo {
	display: grid;
	align-items: start;
	align-content: start;
	justify-content: center;
	justify-items: center;
	gap: 0 var(--quarterNote);
	grid-template-columns: 3fr 1fr;
	margin-top: var(--dottedQuarterNote);

	@media (min-width: vars.$xs) {
		grid-template-columns: repeat(2, 1fr);
	}
}

.current-curve {
	width: 100%;
	margin: 0 auto var(--quarterNote) auto;
	position: sticky;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: auto auto;
	gap: var(--quarterNote);
	top: var(--quarterNote);
	justify-content: center;
	align-content: start;
	z-index: 3;

	svg,
	path,
	circle,
	rect,
	line {
		touch-action: none;
		user-select: none;
	}

	.current-curve__svg {
		border: 3px solid var(--lightestGray);
		margin: 0 auto;
		max-width: 40vh;
		max-height: 100%;
		display: block;
		background:
			repeating-linear-gradient(to bottom, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 3.33%),
			repeating-linear-gradient(to right, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 7.14%);

		@media (min-width: vars.$sm) {
			max-width: 18rem;
		}
	}

	.current-curve__moving-circle {
		fill: var(--yellow);
	}

	.current-curve__moving-circle,
	.current-curve__moving-circle-wrapper {
		animation-name: move;
		animation-duration: 1.5s;
		animation-fill-mode: forwards;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: alternate-reverse;
		pointer-events: none;
	}
	
	.current-curve__moving-circle-wrapper {
		animation-name: move_up;
		animation-timing-function: cubic-bezier(var(--bezierCoordinates));
	}

	.current-curve__handle {
		fill: #7ba7bc;
		stroke: #34657f;
		stroke-width: 1px;
	}

	.current-curve__handle-tether {
		pointer-events:none;
		stroke-width:1px
	}

	.current-curve__frame {
		fill: none;
		stroke: var(--lightGray);
		stroke-width: 1px;
		pointer-events: none;
	}

	.current-curve__curve {
		fill: none;
		stroke: var(--yellow);
		stroke-width: 2px;
		pointer-events: none;
	}

	.current-curve__title {
		text-align: center;
		width: 100%;
		font-size: 0.4rem;
		font-family: var(--codeFont);
		fill: var(--ink);
	}
	
	.current-curve__coordinates {
		white-space: normal;
		font-size: 0.5rem;
		display: inline-block;
		margin: 0 auto;
		
		@media (min-width: vars.$xxs) {
			font-size: 0.7rem;
		}
		
		@media (min-width: vars.$md) {
			font-size: 0.8rem;
		}
	}

	.current-curve__copy-btn {
		width: 2.5rem;
		height: 2.5rem;
		margin: 0 auto;
		border: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
	}
}

code {
	padding: 0.5em;
	display: block;
	margin-top: 1rem;

	@media (max-width: vars.$xxs) {
		font-size: 0.625rem;
	}
}

.intro {
	justify-self: start;
	margin-bottom: var(--dottedHalfNote);

	p {
		max-width: 28em;
	}

	&.intro-desktop {
		display: none;

		@media(min-width: vars.$md) {
			display: block;
		}
	}

	&.intro-mobile {
		grid-column: span 2;

		@media(min-width: vars.$md) {
			display: none;
		}
	}

	.is-frame & {
		display: none !important;
	}
}

svg {
	fill-rule: evenodd;
	clip-rule: evenodd;
	stroke-linecap: round;
	stroke-miterlimit: 1.5;
}

.curve-selection {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	justify-content: center;
	justify-items: center;
	
	@media (min-width: vars.$xs) {
		grid-template-columns: repeat(3, 1fr);
		justify-items: start;
	}
	
	@media (min-width: vars.$lg) {
		grid-template-columns: repeat(6, 1fr);
	}

	h3 {
		font-size: 0.8rem;
		grid-column: 1 / -1;
		text-align: center;
		margin-bottom: 0;
		margin-top: var(--quarterNote);
		display: block;

		&:first-child {
			margin-top: 0;
		}

		@media (min-width: vars.$sm) {
			font-size: 1rem;
		}
	}

	input:checked + label,
	input:focus + label {
		box-shadow: 0 0 0 3px var(--accentColor);
	}

	label {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 1fr auto;
		transition: box-shadow 0.2s;
		border-radius: 4px;
			border-top-right-radius: 0;
			border-top-left-radius: 0;

		.curve-selection__title {
			width: 100%;
			text-align: center;
			line-height: 1;
			margin-top: 0;
			font-size: 0.615rem;
			border-radius: 4px;
			border-top-right-radius: 0;
			border-top-left-radius: 0;
			display: block;
		}
	}

	.circ code {
		background: var(--lighterBlue);
		border-color: var(--lighterBlue);
		color: var(--black);
	}
	.sine code {
		background: var(--yellow);
		border-color: var(--yellow);
		color: var(--black);
	}
	.quad code {
		background: var(--darkBlue);
		border-color: var(--darkBlue);
		color: var(--white);
	}
	.cubi code {
		background: var(--lightBlue);
		border-color: var(--lightBlue);
		color: var(--black);
	}
	.quin code {
		background: var(--orange);
		border-color: var(--orange);
		color: var(--white);
	}
	.back code {
		background: var(--red);
		border-color: var(--red);
		color: var(--white);
	}
	.expo code {
		background: var(--darkGray);
		border-color: var(--darkGray);
		color: var(--white);
	}
}

.curve-selection__option-group {
	position: relative;
	max-width: 6.5rem;
	width: 100%;
	min-width: 5.5rem;

	@media (min-width: vars.$md) {
		max-width: unset;
	}
}

.curve-selection__illustration {
	border: 1px solid var(--lighterGray);
	border-bottom:0;
	background: 
		repeating-linear-gradient(to bottom, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 7.142%),
		repeating-linear-gradient(to right, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 7.142%);
	 background-position:-1px -1px;
}

.curve-selection__frame {
	fill: none;
	stroke: var(--lightGray);
	stroke-width: 0.025px;
	pointer-events: none;
}

.curve-selection__curve {
	fill: none;
	stroke: #ffd100;
	stroke-width: 0.05px;
	pointer-events: none;
}

.transparent {
	opacity: 0.4;
}

@keyframes move {
	0%, 20% {
		transform: translateX(0)
	}
	80%, 100% {
		transform: translateX(71.45%)
	}
}

@keyframes move_up {
	0%, 20% {
		transform: translateY(0)
	}
	80%, 100% {
		transform: translateY(-33.33%)
	}
}
</style>