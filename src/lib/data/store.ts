import { writable } from 'svelte/store'

export const isLoading = writable(false)
export const prefersDarkMode = writable(false)
export const prefersLightMode = writable(false)
export const prefersReducedMotion = writable(false)
export const isMenuOpen = writable(false)
export const isScrollingDown = writable(false)