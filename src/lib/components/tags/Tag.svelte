<script lang="ts">
  export let to: string
</script>


<template>
	<li>
		<a href={to} class="tag">
			<slot />
		</a>
	</li>
</template>


<style lang="scss">
	li {
		margin: 0;

		&::marker {
			content: none;
		}
	}

	.tag {
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

		&:hover,
		&:focus {
			background: var(--yellow);
			color: var(--black);
		}
	}
</style>
