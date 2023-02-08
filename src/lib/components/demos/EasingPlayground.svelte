<script>
import throttle from 'just-throttle'

let startX = 30
let startY = 160
let endX = 90
let endY = 100
let isDragging = null
let currentPremadeEasing = null

let startHandle
let endHandle
let outerFrame

$: startXToBinary = formatPct((startX - 20) / 100)
$: startYToBinary = formatPct(((300 - startY) / 100) - 1)
$: endXToBinary = formatPct((endX - 20) / 100)
$: endYToBinary = formatPct(((300 - endY) / 100) - 1)
$: bezierCoordinates = `${startXToBinary}, ${startYToBinary}, ${endXToBinary}, ${endYToBinary}`

const formatPct = (num) => parseFloat(num.toFixed(3))

const trackMouseMove = (e) => {
	if (!isDragging) return
	var rect = outerFrame.getBoundingClientRect();

	// An inline clamp function that keeps the x value in bounds:
	// Math.min(Math.max(val, min), max)
	let percentLeft = Math.min(Math.max(Math.round(140 / rect.width * (e.clientX - rect.left)), 20), 120)
	const percentTop = Math.round(300 / rect.height * (e.clientY - rect.top))

	if (isDragging === 'start') {
		startX = percentLeft
		startY = percentTop
	} else if (isDragging === 'end') {
		endX = percentLeft
		endY = percentTop
	}
	currentPremadeEasing = null
}

const handleKeyDown = (e) => {
	if (startHandle === e.target) {
		isDragging = 'start'
	} else if (endHandle === e.target) {
		isDragging = 'end'
	}
	trackMouseMove(e)
}

const handleKeyUp = () => isDragging = null

const premadeEasings = {
  circIn: [0.6, 0.04, 0.98, 0.335],
  circOut: [0.075, 0.82, 0.165, 1],
  circInOut: [0.785, 0.135, 0.15, 0.86],
  sineIn: [0.47, 0, 0.745, 0.715],
  sineOut: [0.39, 0.575, 0.565, 1],
  sineInOut: [0.445, 0.05, 0.55, 0.95],
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
}

$: if (currentPremadeEasing) {
	const thisEasing = premadeEasings[currentPremadeEasing]
	startX = (thisEasing[0] * 100) + 20
	startY = 300 - ((thisEasing[1] * 100) + 100)
	endX = (thisEasing[2] * 100) + 20
	endY = 300 - ((thisEasing[3] * 100) + 100)
}	
</script>


<div class="demo-wrapper">
	<div
		class="demo"
		on:mousemove={throttle((e) => trackMouseMove(e), 10, { leading: true })}
		on:mousedown={handleKeyDown}
		on:keyup={handleKeyUp}
		on:mouseup={handleKeyUp}
		on:mouseleave={handleKeyUp}
		on:dragstart={handleKeyDown}
		on:dragend={handleKeyUp}
	>
		<svg
			bind:this={outerFrame}
			width="100%"
			height="300%"
			viewBox="0 0 140 300"
			version="1.1"
			style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:1.5;border:3px solid var(--lightestGray);margin-bottom: 0;background:repeating-linear-gradient(to bottom, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 3.33%), repeating-linear-gradient(to right, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 7.14%);"
		>
			<rect x="20" y="100" width="100" height="100" style="fill:none;stroke:var(--lightGray);stroke-width:1px;pointer-events:none;"/>
			<path d="M20,200 C{startX},{startY} {endX},{endY} 120,100" style="fill:none;stroke:#ffd100;stroke-width:3px;pointer-events:none;"/>
			<line x1="20" y1="200" x2={startX} y2={startY} stroke="#34657f" style="pointer-events:none;stroke-width:1px;"/>
			<line x1="120" y1="100" x2={endX} y2={endY} stroke="#34657f" style="pointer-events:none;stroke-width:1px;"/>
			<circle bind:this={startHandle} cx={startX} cy={startY} r="5" style="fill:#7ba7bc;stroke:#34657f;stroke-width:1px;"/>
			<circle bind:this={endHandle} cx={endX} cy={endY} r="5" style="fill:#7ba7bc;stroke:#34657f;stroke-width:1px;"/>
			<line x1="20" y1="280" x2="120" y2="280" style="pointer-events:none;stroke:var(--lightGray);stroke-width:0.5px;"/>
			<line x1="20" y1="276" x2="20" y2="284" style="pointer-events:none;stroke:var(--lightGray);stroke-width:0.5px;"/>
			<line x1="120" y1="276" x2="120" y2="284" style="pointer-events:none;stroke:var(--lightGray);stroke-width:0.5px;"/>
			<circle class="moving-circle" cx="20" cy="280" r="6" fill="#ffd100" style="--bezierCoordinates: {bezierCoordinates}"/>
		</svg>
		<code>cubic-bezier({bezierCoordinates});</code>
	</div>

	<form>
		{#each Object.entries(premadeEasings) as [title, curve]}
			<input type="radio" class="sr" id={title} bind:group={currentPremadeEasing} value={title} name="currentPremadeEasing">
			<label for={title} class={title.slice(0, 4)}>
				<svg
					width="100%"
					viewBox="0 0 1.4 1.4"
					version="1.1"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:1.5;border: 1px solid var(--lighterGray);border-bottom:0;background:repeating-linear-gradient(to bottom, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 7.142%), repeating-linear-gradient(to right, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 7.142%); background-position:-1px -1px"
				>
					<rect x="0.2" y="0.2" width="1" height="1" style="fill:none;stroke:var(--lightGray);stroke-width:0.025px;pointer-events:none;"/>
					<path d="M0.2,1.2 C{curve[0] + 0.2},{1.4 - (curve[1] + 0.2)} {curve[2] + 0.2},{1.4 - (curve[3] + 0.2)} 1.2,0.2" style="fill:none;stroke:#ffd100;stroke-width:0.05px;pointer-events:none;"/>
				</svg>
				<code>{title}</code>
			</label>
		{/each}
	</form>
</div>


<style lang="scss">
form {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(5.5rem, 1fr));
	gap: 1rem;

	input:checked + label {
		box-shadow: 0 0 0 3px var(--accentColor);
	}

	label {
		border-radius: 6px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		transition: box-shadow 0.2s;

		code {
			width: 100%;
			text-align: center;
			line-height: 1;
			margin-top: 0;
			font-size: 0.615rem;
			border-radius: 4px;
			border-top-right-radius: 0;
			border-top-left-radius: 0;
		}
	}

	.circ code {
		background: var(--lighterBlue);
		border-color: var(--lighterBlue);
	}
	.sine code {
		background: var(--yellow);
		border-color: var(--yellow);
	}
	.quad code {
		background: var(--darkBlue);
		border-color: var(--darkBlue);
		color: var(--white);
	}
	.cubi code {
		background: var(--lightBlue);
		border-color: var(--lightBlue);
	}
	.quin code {
		background: var(--orange);
		border-color: var(--orange);
	}
	.back code {
		background: var(--red);
		border-color: var(--red);
		color: var(--white);
	}
	.expo code {
		background: var(--darkerGray);
		border-color: var(--darkerGray);
		color: var(--white);
	}
}

.demo {
	width: 100%;
	max-width: 16rem;
	margin: var(--quarterNote) auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: start;
}

.demo-wrapper {
	display: grid;
	align-items: center;
	align-content: center;
	gap: var(--quarterNote);

	@media (min-width: vars.$md) {
		grid-template-columns: repeat(2, 1fr);
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

.moving-circle {
	animation-name: move;
	animation-duration: 1.5s;
	animation-fill-mode: forwards;
	animation-timing-function: cubic-bezier(var(--bezierCoordinates));
	animation-iteration-count: infinite;
	animation-direction: alternate-reverse;
}

@keyframes move {
	0%, 20% {
		transform: translateX(0)
	}
	80%, 100% {
		transform: translateX(71.45%)
	}
}
</style>