<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<aside class="pull-quote" aria-hidden="true" hidden>
	{@render children?.()}
</aside>
