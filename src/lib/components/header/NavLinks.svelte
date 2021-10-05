<script lang="ts">
  import NavLink from './NavLink.svelte'
  import Hoover from '$lib/components/header/Hoover.svelte'
  import { isMenuOpen } from '$lib/data/store'

  export let path: string
  let coords

  const handleHoover = (e) => {
    coords = e.detail.getBoundingClientRect()
  }

  const stopHoover = (e) => {
    const activeLink = document.querySelector('.nav__link.active')

    if (activeLink) {
      coords = activeLink.getBoundingClientRect()
    } else {
      coords = { x: 0, width: 0 }
    }
  }
</script>


<ul class:open={$isMenuOpen}>
  <!-- TODO: this is a lot of prop drilling and style encapsulation. Is there a better way? -->
  <NavLink to="/" text="About me"{path} mobileOnly={true} on:hoover={handleHoover} on:stop-hoover={stopHoover} />
  <NavLink to="/blog" text="Blog" {path} on:hoover={handleHoover} on:stop-hoover={stopHoover} />
  <NavLink to="/writing-and-speaking" text="Writing & Speaking" {path} on:hoover={handleHoover} on:stop-hoover={stopHoover} />
  <NavLink to="/projects" text="Projects"{path} on:hoover={handleHoover} on:stop-hoover={stopHoover} />
  <NavLink to="/contact"text="Contact" {path} on:hoover={handleHoover} on:stop-hoover={stopHoover} />
  <NavLink to="/uses" text="Uses"{path} on:hoover={handleHoover} on:stop-hoover={stopHoover} />
  <Hoover {coords} />
</ul>  


<style lang="scss">
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    width: auto;
    font-size: .875rem;
    list-style-type: none;
    padding: 0;

    @media (max-width: $xs) {
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