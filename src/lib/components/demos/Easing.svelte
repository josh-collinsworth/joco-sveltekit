<script>
	// TODO: TypeScript
	import * as svelteEasings from 'svelte/easing'
	import { fly } from 'svelte/transition'

	
	let currentEasingIn = 'linear'
	let currentEasingOut = 'linear'
	let rando = Date.now()
	let bindEasings = true
	let transitionDuration = 500
	const allEasings = { 'none': () => {}, ...svelteEasings }

	const updateRando = () => {
		rando = Date.now()
	}

	const handleBind = () => {
		bindEasings = !bindEasings
	}

	const handleSync = (e) => {
		if (!bindEasings) return

		if (e.target.id === 'easing-in') {
			currentEasingOut = e.target.value
		} else {
			currentEasingIn = e.target.value
		}
	}
	
	$: iterableEasings = Object.entries(allEasings)
	$: renderProps = currentEasingIn + currentEasingOut + rando
	$: inDuration = currentEasingIn === "none" ? 0 : transitionDuration
	$: outDuration = currentEasingOut === "none" ? 0 : transitionDuration
</script>

<div class="demo">
	<div class="demo__wrapper" on:click={updateRando} on:keyup={updateRando}>
		{#key renderProps}
			<div
				class="box"
				in:fly={{
					duration: inDuration,
					delay: (transitionDuration * 1.1),
					y: -225,
					opacity: 1,
					easing: allEasings[currentEasingIn]
				}}
				out:fly={{
					duration: outDuration,
					y: 225,
					opacity: 1,
					easing: allEasings[currentEasingOut]
				}}
			>
				Click to play transition
			</div>
		{/key}
	</div>
	<form on:submit|preventDefault>
		<div class="select-wrap">
			<label for="easing-in">Ease in:</label>
			<select bind:value={currentEasingIn} id="easing-in" on:change={handleSync}>
				{#each iterableEasings as [title, _]}
				<option value={title}>{title}</option>
				{/each}
			</select>
			<div class="bind-wrap">
				<button aria-pressed={bindEasings} on:click={handleBind} class="bind-btn">
					<span class="sr">Keep both types in sync</span>
					{bindEasings ? '🔒' : '🔓'}
				</button>
			</div>
			<label for="easing-out">Ease out:</label>
			<select bind:value={currentEasingOut} id="easing-out" on:change={handleSync}>
				{#each iterableEasings as [title, _]}
				<option value={title}>{title}</option>
				{/each}
			</select>
		</div>
		<label for="duration">Duration: <span>{transitionDuration / 1000}s</span></label>
		<input type="range" id="duration" min="0" max="1000" step="10" bind:value={transitionDuration} />
	</form>

</div>


<style lang="scss">
.demo {
	display: flex;
	margin: var(--halfNote) 0;
	gap: var(--quarterNote);
	flex-wrap: wrap;

	.select-wrap {
		display: grid;
		margin-bottom: var(--dottedQuarterNote);
		grid-template-columns: auto auto 1fr;
		gap: var(--eighthNote);
		align-items: center;
	}

	.bind-wrap {
		width: 1em;
		height: calc(100% - 2em);
		border: 1px solid;
		border-left: 0;
		grid-row: span 2;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: visible;

		.bind-btn {
			border: var(--paper);
			background: var(--paper);
			padding: 0;
			height: 1.5em;
			width: 2em;
			margin-left: 1em;
			line-height: 1;
			text-align: center;
		}
	}

	label {
		font-weight: bold;
		font-family: var(--headingFont);
		display: inline-block;
	}

	form {
		flex: 1 1 14rem;
	}

	.demo__wrapper {
		min-width: 180px;
		flex: 1 1 300px;
		overflow: hidden;
		border: 2px solid;
		display: grid;
		justify-content: center;
		justify-items: center;
		align-items: center;
		grid-template-columns: 100%;
		grid-template-rows: 300px;
		position: relative;
		height: 300px;
	}

	.box {
		width: 150px;
		aspect-ratio: 1 / 1;
		padding: var(--eighthNote);
		border-radius: var(--sixteenthNote);
		color: var(--white);
		background: var(--darkBlue);
		font-family: var(--headingFont);
		font-weight: bold;
		position: relative;
		margin: 0;
		grid-area: 1 / 1 / 2 / 2;
		display: flex;
		align-items: center;
		line-height: 1.2;
	}
}
</style>