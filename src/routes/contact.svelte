<script lang="ts">
	import type contactFormSubmission from '$lib/assets/js/interfaces/contact-form-submission'
	import { onMount } from 'svelte'

	let isSubmitted = false
	let showError = false
	let fromPage: string = ''

	let formData: contactFormSubmission = {
		from_page: fromPage,
		name: '',
		email: '',
		message: ''
	}

	onMount((): void => {
		const params = new URLSearchParams(window.location.search)
		fromPage = params.get('from_page')
	})

	const encode = (data: object): string => {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&')
	}

	const handleSubmit = (e: Event): void => {
		const { name, email, message, from_page } = formData

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
	<h2>Contact form</h2>

	{#if !isSubmitted}
		<noscript>
			<h3>Sorry, this contact form won't work without JavaScript enabled.</h3>
			<p>I don't do any tracking or anything like that though (except some <a href="https://plausible.io">privacy-respecting analytics</a>), if that's your concern.</p>
		</noscript>

		<p>
			<i>
				Happy to chat! I try to respond to everything that isn't a solicitation.
			</i>
		</p>

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
			<input type="hidden" name="from_page" value={fromPage} />
			<div class="sender-info">
				<div>
					<label for="name" class="label" >Your name</label>
					<input type="text" name="name" bind:value={formData.name} placeholder="What should I call you?" />
				</div>
				<div>
					<label for="email">
						Your email address
					</label>
					<input type="email" name="email" bind:value={formData.email} placeholder="Where can I send my response?" />
				</div>
			</div>

			<div class="message-wrapper">
				<label for="message">What's on your mind?</label>
				<textarea name="message" bind:value={formData.message} rows="6" placeholder="What would you like to talk about?"></textarea>
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
		<h3>Thanks for your message!</h3>

		<p>I'll follow up by email if this wasn't spam. :)</p>
	{/if}
</div>


<style lang="scss">
	h2 {
		margin-bottom: var(--eighthNote);
	}

	#contact-form {
		width: 100%;
		margin-top: 4rem;
		
		label {
			font-family: var(--headingFont);
			font-weight: bold;
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
