<script lang="ts">
export let to: string
export let openInNewTab: string = 'false'
  
$: sanitizedTo = to.split('//').pop()
$: target = openInNewTab == 'true' ? '_blank' : 'false'

</script>

<template>
	<a href="https://{sanitizedTo}" rel="noreferrer noopener" target={target}>
		<slot />
	</a>
</template>