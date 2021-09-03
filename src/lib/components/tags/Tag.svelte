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
a.tag {
	display: block;
	padding: .5em 1em;
	background: var(--darkBlue);
	margin: 0 .5em 0 0;
	color: var(--white);
	text-decoration: none;

	&:hover {
		background: var(--lightBlue);
		color: var(--ink);
	}
}
</style>
