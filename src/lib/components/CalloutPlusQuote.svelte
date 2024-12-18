<script lang="ts">
	import PullQuote from '$lib/components/PullQuote.svelte'
	import Callout from '$lib/components/Callout.svelte'
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>


<PullQuote>
	{@render children?.()}
</PullQuote>

<Callout>
	{@render children?.()}
</Callout>
