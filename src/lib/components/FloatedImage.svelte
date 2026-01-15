<script lang="ts">
	interface Props {
		path: string
		alt?: string
	}

	let { path, alt = '' }: Props = $props()
</script>

<img src={path} {alt} />

<style>
	img {
		margin-top: 0;

		@media (min-width: 42rem) {
			float: right;
			margin: 0 calc(var(--quarter-note) * -2) var(--quarter-note)
				var(--quarter-note);
		}
	}
</style>
