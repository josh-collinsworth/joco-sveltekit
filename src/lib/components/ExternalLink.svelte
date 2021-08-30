<script>
export let to, openInNewTab
  
$: sanitizedTo = to.split('//').pop()
$: target = openInNewTab == 'true' ? '_blank' : 'false'

</script>

<template>
	<a href="https://{sanitizedTo}" rel="noreferrer noopener" target={target}>
		<slot />
	</a>
</template>