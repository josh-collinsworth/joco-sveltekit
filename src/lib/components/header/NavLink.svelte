<script lang="ts">
  export let text: string
  export let to: string
  export let key: string
  export let mobile: boolean = false

  export let menuOpen: boolean = false
  export let closeMobileMenu: () => void

  $: isCurrentPage = key === to
</script>


<li class:mobile={mobile} class:open={menuOpen} >
  <a
    sveltekit:prefetch
    href={to}
    class="nav__link"
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
    tabindex={mobile && !menuOpen ? '-1' : '0'}
    on:click={closeMobileMenu}
  >  
    <span>{text}</span>
  </a>  
</li>  


<style lang="scss">
li.mobile {
  transform: translateX(-3em);
  opacity: 0;
  transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
  margin-bottom: .75rem;
  font-size: 1.25rem;
  line-height: 1.5em;
  color: var(--white);
  width: 100%;
}

li.open {
  transform: translateX(0vw);
  opacity: 1;

  @for $i from 1 through 9 {
    &:nth-of-type(#{$i}) {
      transition-delay: $i * 0.10 + s;
    }
  }

  a {
    color: var(--white);
    width: max-content;
  }
}

a {
  padding: .5rem 0 .25rem;
  display: block;

  span {
    display: inline-block;
  }
}
</style>