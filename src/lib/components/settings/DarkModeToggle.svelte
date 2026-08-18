<script lang="ts">
	import { browser } from '$app/environment'
	import { Themes } from '$lib/data/constants'
	import { appState } from '$lib/data/store.svelte'
	import { onMount } from 'svelte'
	import LightDarkIcon from '../icons/LightDarkIcon.svelte'

	let isDarkMode: boolean = $derived(appState.theme === Themes.Dark)

	let enableOrDisable: string = $derived(isDarkMode ? 'Disable' : 'Enable')

	// There's also some code in app.html to help avoid unwanted flashes of dark/light
	const toggleDarkMode = async (): Promise<void> => {
		appState.theme = isDarkMode ? Themes.Light : Themes.Dark
		const userPrefersDarkMode = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches
		if (!browser) return

		if (
			(appState.theme === Themes.Dark && userPrefersDarkMode) ||
			(appState.theme === Themes.Light && !userPrefersDarkMode)
		) {
			window.localStorage.removeItem('theme')
		} else {
			window.localStorage.setItem('theme', JSON.stringify(appState.theme))
		}
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
			document.documentElement.classList.remove('light')
		} else {
			document.documentElement.classList.remove('dark')
			document.documentElement.classList.add('light')
		}
	}

	onMount(() => {
		// This same logic is in app.html also, but I didn't want to import it there, so it's just duplicated in both places.
		if (
			('theme' in localStorage &&
				JSON.parse(localStorage.theme) === Themes.Dark) ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			appState.theme = Themes.Dark
		}
	})
</script>

<button
	id="dark-mode-toggle"
	onclick={toggleDarkMode}
	class:dark={isDarkMode}
	class="settings-toggle"
	title="{enableOrDisable} dark mode"
	aria-pressed={isDarkMode}
>
	<span class="sr">Toggle dark mode</span>
	<LightDarkIcon />
</button>
