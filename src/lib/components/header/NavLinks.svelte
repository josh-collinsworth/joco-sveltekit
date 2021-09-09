<script lang="ts">
  import NavLink from './NavLink.svelte'

  export let mobile: boolean = false
  export let menuOpen: boolean = false
  export let key: string
  export let toggleMenu = null

  const closeMobileMenu = () => {
    if (menuOpen) toggleMenu()
  }
</script>


<ul class:mobile={mobile}>
  <!-- TODO: this is a lot of prop drilling and style encapsulation. Is there a better way? -->
  <NavLink to="/projects" text="Projects" {closeMobileMenu} {key} {mobile} {menuOpen}  />
  <NavLink to="/blog" text="Writing" {closeMobileMenu} {key} {mobile} {menuOpen}  />
  <NavLink to="/contact" text="Contact" {closeMobileMenu} {key} {mobile} {menuOpen}  />
  <NavLink to="/uses" text="Uses" {closeMobileMenu} {key} {mobile} {menuOpen}  />
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