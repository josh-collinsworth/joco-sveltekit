<script lang="ts">
  export let to: string
</script>


<template>
	<li class="tag">
		<a href={to} class="tag__link">
			<slot />
		</a>
	</li>
</template>


<style lang="scss" global>
	.tag {
		margin: 0;

		&::marker {
			content: none;
		}
	}

	.tag__link {
		display: block;
		padding: 0.6em 0.75em;
		background: var(--lighterBlue);
		margin: 0;
		color: var(--darkGray);
		text-decoration: none;
		font-weight: bold;
		font-family: var(--heading-font);
		font-size: 0.65em;
		line-height: 1;
		text-transform: uppercase;
		transition: background .15s, color .15s;

		.dark & {
			color: var(--ink);
			background: var(--darkBlue);
		}

		&:hover,
		&:focus {
			background: var(--yellow);
			color: var(--black);
		}
	}
</style>
