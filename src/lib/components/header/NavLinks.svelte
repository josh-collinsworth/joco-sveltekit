<script lang="ts">
	import NavLink from './NavLink.svelte'
	import { isMenuOpen } from '$lib/data/store'

	interface Props {
		path: string
	}

	let { path }: Props = $props()
</script>

<ul class:open={$isMenuOpen}>
	<!-- TODO: this is a lot of prop drilling and style encapsulation. Is there a better way? -->
	<NavLink to="/" text="Home" {path} mobileOnly={true} />
	<NavLink to="/blog" text="Blog" {path} />
	<NavLink to="/projects" text="Projects" {path} />
	<NavLink to="/about-me" text="About Me" {path} />
	<NavLink to="/contact" text="Contact" {path} />
	<NavLink to="/uses" text="Uses" {path} />
</ul>

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		width: auto;
		font-size: 0.875rem;
		list-style-type: none;
		padding: 0;
		gap: 1.5rem;

		@media (max-width: vars.$sm) {
			list-style-type: none;
			text-align: left;
			width: 100%;
			display: none;
			margin: 0;

			&.open {
				display: block;
			}
		}
	}
</style>
