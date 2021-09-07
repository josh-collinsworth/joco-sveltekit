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
.tag {
	display: block;
	padding: 0.5em 1em;
	background: var(--lightBlue);
	margin: 0;
	color: var(--white);
	text-decoration: none;
	font-weight: bold;
	font-size: 0.75em;
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
