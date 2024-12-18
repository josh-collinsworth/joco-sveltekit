<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="note">
	<div class="note__callout">
		<div class="note__callout-text">
			Note <span class="note__callout-arrow"></span>
		</div>
	</div>
	<div class="note__content">
		{@render children?.()}
	</div>
</div>
