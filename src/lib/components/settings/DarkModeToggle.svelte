<script lang="ts">
	import LightDarkIcon from '../icons/LightDarkIcon.svelte'
	import { browser } from '$app/environment'
	import { Themes } from '$lib/data/constants'
	import { theme } from '$lib/data/store'
	import { onMount, tick } from 'svelte'

	let isDarkMode: boolean
	$: isDarkMode = $theme === Themes.Dark

	let enableOrDisable: string
	$: enableOrDisable = isDarkMode ? 'Disable' : 'Enable'

	// There's also some code in app.html to help avoid unwanted flashes of dark/light
	const toggleDarkMode = async (): Promise<void> => {
		theme.set(isDarkMode ? Themes.Light : Themes.Dark)
		
		if (browser) {
			window.localStorage.setItem('theme', JSON.stringify($theme))

			// Not exactly sure why this is needed but without it, the first click fails.
			await tick()

			if (isDarkMode) {
				document.documentElement.classList.add('dark')
				document.documentElement.classList.remove('light')
			} else {
				document.documentElement.classList.remove('dark')
				document.documentElement.classList.add('light')
			}
		}
	}

	onMount(() => {
		// This same logic is in app.html also, but I didn't want to import it there, so it's just duplicated in both places.
		if (
			('theme' in localStorage && JSON.parse(localStorage.theme) === Themes.Dark)
			||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			theme.set(Themes.Dark)
		}
	})
</script>


<button
	id="dark-mode-toggle"
	on:click={toggleDarkMode}
	class:dark={isDarkMode}
	class="settings-toggle"
	title="{enableOrDisable} dark mode"
	aria-pressed={isDarkMode}
>
	<span class="sr">Toggle dark mode</span>
	<LightDarkIcon />
</button>


<style lang="scss" global>
	#dark-mode-toggle {
		background: var(--buttonBackground);

		&:hover,
		&:focus {
			svg {
				path, circle {
					stroke: var(--yellow);
				}
			}
		}

		&.dark svg {
			transform: translateY(0);
		}

		svg {
			--itemTransition: .4s cubic-bezier(.7,-0.01,0,1.01);
			width: 2rem;
			height: 4rem;
			transform: translateY(-1.975rem);
			transition: transform var(--itemTransition), fill var(--itemTransition), stroke var(--itemTransition), background var(--itemTransition);

			path,
			circle {
				transition: transform var(--itemTransition), fill var(--itemTransition), stroke var(--itemTransition), background var(--itemTransition);
				stroke: var(--ink);
			}
		}
	}
</style>
