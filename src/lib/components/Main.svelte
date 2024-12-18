<script lang="ts">
	interface Props {
		className?: string;
		children?: import('svelte').Snippet;
	}

	let { className = '', children }: Props = $props();
</script>

<main id="main" tabindex="-1" class={className}>
	{@render children?.()}
</main>
