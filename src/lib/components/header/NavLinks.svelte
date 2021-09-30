<script lang="ts">
  import NavLink from './NavLink.svelte'
  import { isMenuOpen } from '$lib/data/store'

  export let key: string
</script>


<ul class:open={$isMenuOpen}>
  <!-- TODO: this is a lot of prop drilling and style encapsulation. Is there a better way? -->
  <NavLink to="/" text="About me"{key} mobileOnly={true} />
  <NavLink to="/blog" text="Writing" {key} />
  <NavLink to="/projects" text="Projects"{key} />
  <NavLink to="/contact"text="Contact" {key} />
  <NavLink to="/uses" text="Uses"{key} />
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