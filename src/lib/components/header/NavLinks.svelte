<script lang="ts">
  import NavLink from './NavLink.svelte'
  import { isMenuOpen } from '$lib/assets/js/store'

  export let mobile: boolean = false
  export let key: string


  const closeMobileMenu = () => {
    if ($isMenuOpen) {
      isMenuOpen.set(false)
    }
  }
</script>


<ul class:mobile={mobile}>
  <!-- TODO: this is a lot of prop drilling and style encapsulation. Is there a better way? -->
  <NavLink to="/projects" text="Projects" {closeMobileMenu} {key} {mobile} />
  <NavLink to="/blog" text="Writing" {closeMobileMenu} {key} {mobile} />
  <NavLink to="/contact" text="Contact" {closeMobileMenu} {key} {mobile} />
  <NavLink to="/uses" text="Uses" {closeMobileMenu} {key} {mobile} />
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
  }

  ul.mobile {
    list-style-type: none;
    text-align: left;
    width: 100%;
    display: block;
    margin: 0;
  }
</style>