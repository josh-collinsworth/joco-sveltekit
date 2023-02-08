<script>
import throttle from 'just-throttle'

let startX = 30
let startY = 160
let endX = 90
let endY = 100

$: bezierCoordinates = 
	`${formatPct((startX - 20) / 100)},
	 ${formatPct(((300 - startY) / 100) - 1)},
	 ${formatPct((endX - 20) / 100)},
	 ${formatPct(((300 - endY) / 100) - 1)}`
let isDragging = null 

let startHandle
let endHandle
let outerFrame

const formatPct = (num) => parseFloat(num.toFixed(2))

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
</script>


<div
	class="demo"
	on:mousemove={throttle((e) => trackMouseMove(e), 10, { leading: true })}
	on:mousedown={handleKeyDown}
	on:keyup={handleKeyUp}
	on:mouseup={handleKeyUp}
	on:mouseleave={handleKeyUp}
>
	<svg
		bind:this={outerFrame}
		width="100%"
		height="300%"
		viewBox="0 0 140 300"
		version="1.1"
		style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-miterlimit:1.5;border:3px solid #f2f2f2;margin-bottom: 0;background:repeating-linear-gradient(to bottom, #f2f2f2, #f2f2f2 1px, transparent 1px, transparent 3.33%), repeating-linear-gradient(to right, #f2f2f2, #f2f2f2 1px, transparent 1px, transparent 7.14%)"
	>
		<rect x="20" y="100" width="100" height="100" style="fill:none;stroke:#a7a8aa;stroke-width:1px;pointer-events:none;"/>
		<path d="M20,200 C{startX},{startY} {endX},{endY} 120,100" style="fill:none;stroke:#ffd100;stroke-width:3px;pointer-events:none;"/>
		<line x1="20" y1="200" x2={startX} y2={startY} stroke="#34657f" style="pointer-events:none;stroke-width:1px;"/>
		<line x1="120" y1="100" x2={endX} y2={endY} stroke="#34657f" style="pointer-events:none;stroke-width:1px;"/>
		<circle bind:this={startHandle} cx={startX} cy={startY} r="5" style="fill:#7ba7bc;stroke:#34657f;stroke-width:1px;"/>
		<circle bind:this={endHandle} cx={endX} cy={endY} r="5" style="fill:#7ba7bc;stroke:#34657f;stroke-width:1px;"/>
		<line x1="20" y1="280" x2="120" y2="280" style="pointer-events:none;stroke:#a7a8aa;stroke-width:0.5px;"/>
		<line x1="20" y1="276" x2="20" y2="284" style="pointer-events:none;stroke:#a7a8aa;stroke-width:0.5px;"/>
		<line x1="120" y1="276" x2="120" y2="284" style="pointer-events:none;stroke:#a7a8aa;stroke-width:0.5px;"/>
		<circle class="moving-circle" cx="20" cy="280" r="6" fill="#ffd100" style="--bezierCoordinates: {bezierCoordinates}"/>
	</svg>
	<code>cubic-bezier({bezierCoordinates});</code>
</div>


<style lang="scss">
.demo {
	width: 100%;
	max-width: 16rem;
	margin: var(--quarterNote) auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: start;
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