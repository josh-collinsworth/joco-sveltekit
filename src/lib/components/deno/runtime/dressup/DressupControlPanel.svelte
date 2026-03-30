<script lang="ts">
	import {
		ACCESSORIES,
		clearAll,
		COLORS,
		dressupState,
		HEADWEAR,
		NECKWEAR,
		randomize,
		toReadable
	} from './dressup-state.svelte'

	interface Props {
		download: () => void
		closable?: boolean
	}

	let { download, closable = true }: Props = $props()
</script>

<aside
	class="control-panel"
	class:standalone={!closable}
	aria-hidden={!dressupState.isMenuOpen}
	inert={!dressupState.isMenuOpen}
	id="dressup-control-panel"
>
	{#if closable}
		<button
			class="close-button"
			type="button"
			onclick={() => (dressupState.isMenuOpen = false)}
		>
			<span aria-hidden="true">×</span>
			<span class="sr-only">Close</span>
		</button>
	{/if}

	<form action="" onsubmit={(e) => e.preventDefault()} class="form">
		<!-- Headwear -->
		<div class="field-group">
			<label for="headwear-select" class="sr-only" id="headwear-label"
				>Headwear</label
			>
			<select
				name="headwear"
				id="headwear-select"
				class="custom-select"
				bind:value={dressupState.headwear}
			>
				<option value="">(No headwear)</option>
				{#each HEADWEAR as piece}
					<option value={piece}>{toReadable(piece)}</option>
				{/each}
			</select>
			<fieldset class="swatch-fieldset">
				<div class="swatch-row">
					{#each COLORS as color}
						<label class="swatch-label">
							<input
								type="radio"
								name="headwear-colors"
								value={color}
								checked={dressupState.headwearColor === color}
								onchange={() => {
									dressupState.headwearColor = color
								}}
								class="sr-only"
							/>
							<span
								class="swatch"
								class:selected={dressupState.headwearColor === color}
								style="background-color: {color}"
							>
								<span class="sr-only">{color}</span>
							</span>
						</label>
					{/each}
				</div>
			</fieldset>
		</div>

		<!-- Neckwear -->
		<div class="field-group">
			<label for="neckwear-select" class="sr-only" id="neckwear-label"
				>Neckwear</label
			>
			<select
				name="neckwear"
				id="neckwear-select"
				class="custom-select"
				bind:value={dressupState.neckwear}
			>
				<option value="">(No neckwear)</option>
				{#each NECKWEAR as piece}
					<option value={piece}>{toReadable(piece)}</option>
				{/each}
			</select>
			<fieldset class="swatch-fieldset">
				<div class="swatch-row">
					{#each COLORS as color}
						<label class="swatch-label">
							<input
								type="radio"
								name="neckwear-colors"
								value={color}
								checked={dressupState.neckwearColor === color}
								onchange={() => {
									dressupState.neckwearColor = color
								}}
								class="sr-only"
							/>
							<span
								class="swatch"
								class:selected={dressupState.neckwearColor === color}
								style="background-color: {color}"
							>
								<span class="sr-only">{color}</span>
							</span>
						</label>
					{/each}
				</div>
			</fieldset>
		</div>

		<!-- Accessories -->
		<div class="field-group accessories-group">
			<fieldset style="border: 0; padding: 0;">
				<legend class="sr-only">Accessories</legend>
				<div class="checkbox-grid">
					{#each ACCESSORIES as piece}
						<div class="checkbox-wrapper">
							<input
								type="checkbox"
								name="accessory"
								value={piece}
								checked={dressupState.accessories.includes(piece)}
								onchange={(e) => {
									if (e.currentTarget.checked) {
										dressupState.accessories = [
											...dressupState.accessories,
											piece
										]
									} else {
										dressupState.accessories = dressupState.accessories.filter(
											(a) => a !== piece
										)
									}
								}}
								id={`checkbox-${piece}`}
							/>
							<label class="checkbox-label" for={`checkbox-${piece}`}>
								{toReadable(piece)}
							</label>
						</div>
					{/each}
				</div>
			</fieldset>
			<fieldset class="swatch-fieldset">
				<div class="swatch-row">
					{#each COLORS as color}
						<label class="swatch-label">
							<input
								type="radio"
								name="accessory-colors"
								value={color}
								checked={dressupState.accessoryColor === color}
								onchange={() => {
									dressupState.accessoryColor = color
								}}
								class="sr-only"
							/>
							<span
								class="swatch"
								class:selected={dressupState.accessoryColor === color}
								style="background-color: {color}"
							>
								<span class="sr-only">{color}</span>
							</span>
						</label>
					{/each}
				</div>
			</fieldset>
		</div>

		<!-- Buttons -->
		<div class="button-row">
			<button type="button" class="btn btn-secondary" onclick={randomize}>
				Randomize all
			</button>
			<button type="button" class="btn btn-secondary" onclick={clearAll}>
				Clear all
			</button>
			<button type="button" class="btn btn-download" onclick={download}>
				Save my dino <span aria-hidden="true">⤓</span>
			</button>
		</div>
	</form>
</aside>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	.control-panel {
		position: relative;
		min-height: 100%;
		grid-column-start: 1;
		grid-row-start: 1;
		width: 100%;
		padding: 1.5rem;
		border-bottom: 2px solid #121417;
		top: 0;
		left: 0;
		transition: transform 0.3s;
		background-color: #ecf3fd;
		transform: rotateY(180deg);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		container-type: inline-size;

		@container (min-width: 640px) {
			border-bottom: 0;
			border-right: 2px solid #121417;
		}
	}

	.standalone {
		transform: none;
		backface-visibility: visible;
		-webkit-backface-visibility: visible;
		grid-column-start: auto;
		grid-row-start: auto;
	}

	.close-button {
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		text-align: center;
		font-size: 1.25rem;
		line-height: 1;
		position: absolute;
		right: 0;
		top: 0;
		background: none;
		border: none;
		cursor: pointer;
	}

	@container (min-width: 480px) {
		.close-button {
			top: 0.25rem;
			right: 0.25rem;
		}
	}

	@container (min-width: 1024px) {
		.close-button {
			top: 0.5rem;
			right: 0.5rem;
		}
	}

	.form {
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
		flex-direction: column;
		height: 100%;
		width: 100%;
		max-width: 48rem;
		margin-left: auto;
		margin-right: auto;
	}

	.field-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.accessories-group {
		gap: 1rem;
	}

	.custom-select {
		flex-grow: 1;
		appearance: none;
		padding: 0.5rem 0.75rem;
		border: 2px solid #121417;
		border-radius: 0.25rem;
		background-color: white;
		font: inherit;
		cursor: pointer;
		padding-right: 2rem;
		background-image: url('data:image/svg+xml,%3Csvg%20width%3D%22137px%22%20height%3D%22224px%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20style%3D%22fill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A2%3B%22%3E%3Cg%20transform%3D%22matrix(0.741625%2C0%2C0%2C1%2C0%2C0)%22%3E%3Cpath%20d%3D%22M91.868%2C0L0%2C91.868L183.736%2C91.868L91.868%2C0Z%22%20style%3D%22fill%3Argb(35%2C31%2C32)%3B%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22matrix(-0.741625%2C-1.22465e-16%2C9.08229e-17%2C-1%2C136.264%2C223.736)%22%3E%3Cpath%20d%3D%22M91.868%2C0L0%2C91.868L183.736%2C91.868L91.868%2C0Z%22%20style%3D%22fill%3Argb(35%2C31%2C32)%3B%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E');
		background-size: 0.5em;
		background-position: right 0.5em top 50%;
		background-repeat: no-repeat;
	}

	.swatch-fieldset {
		border: 0;
		padding: 0;
		margin: 0;
	}

	.swatch-row {
		min-height: 1.75rem;
		display: flex;
		gap: 1px;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		max-width: 17rem;
	}

	@container (min-width: 480px) {
		.swatch-row {
			gap: 2px;
			width: auto;
		}
	}

	.swatch-label {
		line-height: 1;
		aspect-ratio: 1;
		flex-grow: 1;
		flex-shrink: 1;
		cursor: pointer;
	}

	.swatch {
		width: 100%;
		height: 100%;
		border-radius: 9999px;
		display: inline-block;
		border: 2px solid #121417;
	}

	.swatch.selected {
		outline: 2px solid black;
		outline-offset: 1px;
	}

	.checkbox-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(7em, 1fr));
		gap: 0.5rem;
	}

	.checkbox-wrapper {
		position: relative;
	}

	.checkbox-wrapper input[type='checkbox'] {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
		pointer-events: none;
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		flex-wrap: wrap;
		line-height: 1;
		cursor: pointer;
		padding-left: 1.5rem;
		position: relative;
	}

	.checkbox-label::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 1.125rem;
		height: 1.125rem;
		border: 2px solid #121417;
		border-radius: 0.2rem;
		background-color: white;
	}

	.checkbox-wrapper input[type='checkbox']:checked + .checkbox-label::before {
		background-color: #70ffaf;
	}

	.checkbox-wrapper input[type='checkbox']:checked + .checkbox-label::after {
		content: '';
		position: absolute;
		left: 0.375rem;
		top: 50%;
		transform: translateY(-65%) rotate(45deg);
		width: 0.35rem;
		height: 0.625rem;
		border: solid #121417;
		border-width: 0 2px 2px 0;
	}

	.checkbox-wrapper
		input[type='checkbox']:focus-visible
		+ .checkbox-label::before {
		outline: 2px solid #1d4ed8;
		outline-offset: 2px;
	}

	/* Buttons */
	.button-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.25rem;
		flex-wrap: wrap;
	}

	.btn {
		border: 2px solid #121417;
		border-radius: 9999px;
		font-weight: 600;
		line-height: 1;
		cursor: pointer;
		font-size: inherit;
		font-family: inherit;
		color: var(--neutral-darker);
	}

	.btn:hover {
		text-decoration: underline;
	}

	.btn-secondary {
		flex: 1 1 auto;
		padding: 0.5rem 0.75rem;
		background-color: white !important;
	}

	.btn-download {
		width: 100%;
		padding: 1rem 1.5rem;
		background-color: #70ffaf !important;
	}
</style>
