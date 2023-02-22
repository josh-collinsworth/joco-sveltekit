<script>
let paused = false

const togglePause = () => {
	paused = !paused
}
</script>


<button class="container" on:click={togglePause} aria-pressed={paused}>
	<span class="sr">Pause animation	</span>
	<div class="box" class:paused></div>
</button>


<style>
.container {
	background: transparent;
	padding: 0;
	width: 100%;
	min-height: var(--wholeNote);
	margin: var(--halfNote) 0;
	border: 2px solid var(--accentColor);
}

.box {
	width: 20%;
	aspect-ratio: 1 / 1;
	background: var(--yellow);
	display: block;
	transform: translateX(0%);
	animation: move cubic-bezier(0.12, 0.57, 0.63, 0.21) 2s infinite;
}

.box.paused {
	animation-play-state: paused;
}

@keyframes move {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(400%);
	}
}
</style>