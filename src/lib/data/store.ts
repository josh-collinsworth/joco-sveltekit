import { writable } from 'svelte/store'
import { Themes } from './constants'

export const isLoading = writable(false)
export const prefersReducedMotion = writable(false)
export const isMenuOpen = writable(false)
export const isScrollingDown = writable(false)
export const theme = writable(Themes.Light)