<script lang="ts">
	let formData: object = {}
	let isSubmitted: boolean = false

	const encode = (data: object): string => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&')
	}

	const handleSubmit = (e: Event): void => {
		const target = e.target as HTMLFormElement
		fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({
					'form-name': target.getAttribute('name'),
					...formData,
				}),
			})
			.then(() => { isSubmitted = true })
			.catch(error => alert(error))
	}
</script>


<svelte:head>
	<title>Josh Collinsworth | Contact</title>
	<meta data-key="description" name="description" content="If you fill out this form, I'll probably send you an email. What a bargain!">
</svelte:head>

<template>
	{#if !isSubmitted}

		<noscript>
			<h2>Sorry, this contact form won't work without JavaScript enabled.</h2>
			<p>You can try me at <code>joshuajcollinsworth</code> on the good ol' Google mail instead if you like.</p>
		</noscript>

		<form
			id="contact-form"
			name="contact"
			method="post"
			on:submit|preventDefault={handleSubmit}
			action="/success/"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<input type="hidden" name="form-name" value="contact" />
			<p hidden>
				<label>
					Don’t fill this out: <input name="bot-field" />
				</label>
			</p>
			<div class="sender-info">
				<div>
					<label for="name" class="label" >Your name</label>
					<input type="text" name="name" bind:value={formData.name} />
				</div>
				<div>
					<label for="email">
						Your email address
						<small><i>(used only for responses; no spam)</i></small>
					</label>
					<input type="email" name="email" bind:value={formData.email} />
				</div>
			</div>

			<div class="message-wrapper">
				<label for="message">What's on your mind?</label>
				<textarea name="message" bind:value={formData.message}></textarea>
			</div>

			<button type="submit">Send</button>
		</form>
	{:else}
		<h1>Thanks for your message!</h1>

		<p>I'll follow up by email if this wasn't spam. :)</p>
	{/if}
</template>


<style lang="scss">
	#contact-form {
		width: 100%;
		margin-top: 4rem;
	}
</style>
