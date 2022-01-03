<script lang="ts">
	import type contactFormSubmission from '$lib/assets/js/interfaces/contact-form-submission';

	let formData: contactFormSubmission = {
		name: '',
		email: '',
		message: ''
	}
	let isSubmitted: boolean = false
	let showError = false

	const encode = (data: object): string => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&')
	}

	const handleSubmit = (e: Event): void => {
		const { name, email, message } = formData

		if (!name || !email || !message) {
			showError = true
			return
		}
		
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
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>


<div class="compressed-content">
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
						<small><i>(used only for responses)</i></small>
					</label>
					<input type="email" name="email" bind:value={formData.email} />
				</div>
			</div>

			<div class="message-wrapper">
				<label for="message">What's on your mind?</label>
				<textarea name="message" bind:value={formData.message} rows="6"></textarea>
			</div>

			{#if showError}
				<div class="error">
					Please be sure all above fields are filled out. Thanks!
				</div>
			{/if}

			<button type="submit">
				Send
			</button>
		</form>
	{:else}
		<h1>Thanks for your message!</h1>

		<p>I'll follow up by email if this wasn't spam. :)</p>
	{/if}
</div>


<style lang="scss">
	#contact-form {
		width: 100%;
		margin-top: 4rem;
		
		label {
			font-family: var(--heading-font);
			font-weight: bold;
	
			i {
				font-family: var(--body-font);
				font-weight: normal;
			}
		}

		.error {
			background-color: var(--red);
			color: var(--white);
			padding: calc(var(--quarterNote) * 0.5) var(--quarterNote);
			margin: var(--quarterNote) 0;
			font-style: italic;
		}
	}
</style>
