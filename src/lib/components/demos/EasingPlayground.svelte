<script>
import throttle from 'just-throttle'

// The SVG exists from 0 to 140 on the X axis, and 0 to 300 on the Y axis. The inner square is from 20/100 to 120/200
let startX = 30
let startY = 140
let endX = 90
let endY = 100
let dragging = null
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
	if (!dragging) return

	const rect = outerFrame.getBoundingClientRect();
	// Need different props depending on whether this is a mouse event or a touch event
	const left = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX
	const top = e.type.includes('mouse') ? e.clientY : e.changedTouches[0].clientY

	// An inline clamp function that keeps the x value in bounds: Math.min(Math.max(val, min), max)
	let percentLeft = Math.min(Math.max(Math.round(140 / rect.width * (left - rect.left)), 20), 120)
	const percentTop = Math.round(300 / rect.height * (top - rect.top))

	if (dragging === 'start') {
		startX = percentLeft
		startY = percentTop
	} else if (dragging === 'end') {
		endX = percentLeft
		endY = percentTop
	}
	currentPremadeEasing = null
}

const handleKeyDown = (e) => {
	if (startHandle === e.target) {
		dragging = 'start'
	} else if (endHandle === e.target) {
		dragging = 'end'
	}
	trackMouseMove(e)
}

const handleKeyUp = () => dragging = null

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

$: if (currentPremadeEasing) {
	const thisEasing = premadeEasings[currentPremadeEasing.group][currentPremadeEasing.title]
	startX = (thisEasing[0] * 100) + 20
	startY = 300 - ((thisEasing[1] * 100) + 100)
	endX = (thisEasing[2] * 100) + 20
	endY = 300 - ((thisEasing[3] * 100) + 100)
}	
</script>


<form>
	<div
		class="demo"
		on:mousemove={throttle((e) => trackMouseMove(e), 10, { leading: true })}
		on:mousedown={handleKeyDown}
		on:mouseup={handleKeyUp}
		on:mouseleave={handleKeyUp}
		on:touchstart={handleKeyDown}
		on:touchend={handleKeyUp}
		on:touchmove={throttle((e) => trackMouseMove(e), 10, { leading: true })}
	>
		<svg
			bind:this={outerFrame}
			width="100%"
			height="300%"
			viewBox="0 0 140 300"
			version="1.1"
			style="border:3px solid var(--lightestGray);margin-bottom: 0;background:repeating-linear-gradient(to bottom, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 3.33%), repeating-linear-gradient(to right, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 7.14%);"
		>
			<text x="70" y="287.5" width="100" text-anchor="middle" class="curve-title">
				{ currentPremadeEasing?.title || 'custom' }
			</text>

			<rect class="curve-frame" x="20" y="100" width="100" height="100" />
			<path class="curve" d="M20,200 C{startX},{startY} {endX},{endY} 120,100" />
			
			<line class="track" x1="20" y1="270" x2="120" y2="270" />
			<line class="track" x1="20" y1="266" x2="20" y2="274" />
			<line class="track" x1="120" y1="266" x2="120" y2="274" />
			<circle class="moving-circle" cx="20" cy="270" r="6" fill="#ffd100" style="--bezierCoordinates: {bezierCoordinates}"/>
			
			<line class="handle-tether" x1="20" y1="200" x2={startX} y2={startY} stroke="#34657f" />
			<line class="handle-tether" x1="120" y1="100" x2={endX} y2={endY} stroke="#34657f" />
			<circle class="handle" bind:this={startHandle} cx={startX} cy={startY} r="5" />
			<circle class="handle" bind:this={endHandle} cx={endX} cy={endY} r="5" />
		</svg>
		<code>cubic-bezier({bezierCoordinates});</code>
	</div>

	<div class="curve-options">
		{#each Object.entries(premadeEasings) as [group, _]}
			<h2 class="h4">{group === 'browser' ? 'Browser defaults' : 'VS Code presets'}</h2>
			{#each Object.entries(premadeEasings[group]) as [title, curve]}
				<input type="radio" class="sr" id={title} bind:group={currentPremadeEasing} value={{group, title}} name="currentPremadeEasing" />
				<label for={title} class={title.slice(0, 4)}>
					<svg
						width="100%"
						viewBox="0 0 1.4 1.4"
						version="1.1"
						style="border: 1px solid var(--lighterGray);border-bottom:0;background:repeating-linear-gradient(to bottom, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 7.142%), repeating-linear-gradient(to right, var(--lightestGray), var(--lightestGray) 1px, transparent 1px, transparent 7.142%); background-position:-1px -1px"
					>
						<rect x="0.2" y="0.2" width="1" height="1" style="fill:none;stroke:var(--lightGray);stroke-width:0.025px;pointer-events:none;"/>
						<path d="M0.2,1.2 C{curve[0] + 0.2},{1.4 - (curve[1] + 0.2)} {curve[2] + 0.2},{1.4 - (curve[3] + 0.2)} 1.2,0.2" style="fill:none;stroke:#ffd100;stroke-width:0.05px;pointer-events:none;"/>
					</svg>
					<code>{title}</code>
				</label>
			{/each}
		{/each}
	</div>
</form>


<style lang="scss">
.curve-options {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;

	h2 {
		grid-column: 1 / -1;
		margin-bottom: 0;
		margin-top: var(--quarterNote);
		
		&:first-child {
			margin-top: 0;
		}
	}
	
	@media (min-width: vars.$sm) {
		grid-template-columns: repeat(6, 1fr);
	}
	
	@media (min-width: vars.$md) {
		grid-template-columns: repeat(3, 1fr);
	}
	
	@media (min-width: vars.$xl) {
		grid-template-columns: repeat(6, 1fr);
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

		code {
			width: 100%;
			text-align: center;
			line-height: 1;
			margin-top: 0;
			font-size: 0.615rem;
			border-radius: 4px;
			border-top-right-radius: 0;
			border-top-left-radius: 0;
			display: block;
			min-width: 8em;
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

.demo {
	width: 100%;
	max-width: 16rem;
	margin: var(--quarterNote) auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: start;

	svg,
	path,
	circle,
	rect,
	line {
		touch-action: none;
		user-select: none;
	}
}

form {
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

svg {
	fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:1.5;
}

.handle {
	fill: #7ba7bc;
	stroke: #34657f;
	stroke-width: 1px;

}

.handle-tether {
	pointer-events:none;
	stroke-width:1px
}

.track {
	pointer-events: none;
	stroke: var(--lightGray);
	stroke-width: 0.5px;
}

.curve-frame {
	fill: none;
	stroke: var(--lightGray);
	stroke-width: 1px;
	pointer-events: none;
}

.curve {
	fill: none;
	stroke: #ffd100;
	stroke-width: 3px;
	pointer-events: none;
}

.curve-title {
	text-align: center;
	width: 100%;
	font-size: 0.4rem;
	font-family: var(--codeFont);
	fill: var(--ink);
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