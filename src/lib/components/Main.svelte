<script lang="ts">
	export let className: string = ''
</script>

<main id="main" tabindex="-1" class={className}>
	<slot />
</main>