<script>
	import Main from '$lib/components/Main.svelte'
	import EasingPlayground from '$lib/components/demos/EasingPlayground.svelte'
</script>


<svelte:head>
	<title>CSS easing playground - Josh Collinsworth</title>
	<meta data-key="description" name="description" content="An interactive demo showcasing common easing curve presets and a playground where you can create and copy your own cubic-bezier CSS transitions.">
	<meta property="og:title" content="CSS easing playground - Josh Collinsworth" />
	<meta name="twitter:title" content="CSS easing playground - Josh Collinsworth" />
	<meta property="og:description" content="An interactive demo showcasing common easing curve presets and a playground where you can create and copy your own cubic-bezier CSS transitions." />
	<meta name="twitter:description" content="An interactive demo showcasing common easing curve presets and a playground where you can create and copy your own cubic-bezier CSS transitions." />
	<meta property="og:url" content="https://joshcollinsworth.com/demos/easing" />
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta property="og:image:width" content="240" />
	<meta property="og:image:height" content="135" />
</svelte:head>


<Main>
	<EasingPlayground />
</Main>