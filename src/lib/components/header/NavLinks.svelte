<script lang="ts">
  import NavLink from './NavLink.svelte'
  import { isMenuOpen } from '$lib/assets/js/store'

  export let mobile: boolean = false
  export let key: string
</script>


<ul class:mobile={mobile}>
  <!-- TODO: this is a lot of prop drilling and style encapsulation. Is there a better way? -->
  {#if mobile}
    <NavLink to="/" text="About me" {key} {mobile} />
  {/if}
  <NavLink to="/projects" text="Projects" {key} {mobile} />
  <NavLink to="/blog" text="Writing" {key} {mobile} />
  <NavLink to="/contact" text="Contact" {key} {mobile} />
  <NavLink to="/uses" text="Uses" {key} {mobile} />
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