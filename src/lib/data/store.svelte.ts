import { Themes } from './constants'

export const appState = $state({
	isLoading: false,
	isMenuOpen: false,
	isScrollingDown: false,
	theme: Themes.Light,
})
