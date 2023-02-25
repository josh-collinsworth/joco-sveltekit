<script lang="ts">
export let path: string
export let alt: string = ''
</script>


<img src={path} alt={alt} />


<style lang="scss">
img {
	margin-top: 0;

	@media (min-width: vars.$xs) {
		float: right;
		margin: 0 calc(var(--quarterNote) * -2) var(--quarterNote) var(--quarterNote);
	}
}
</style>