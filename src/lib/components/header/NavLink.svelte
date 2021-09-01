<li class:open={menuOpen}>
  <a
    sveltekit:prefetch
    href={to}
    class="nav__link"
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
    on:click={closeMobileMenu}
  >
    <span>{text}</span>
  </a>
</li>

<script lang="ts">
  export let text: string
  export let to: string
  export let key: string

  export let menuOpen: boolean = false
  export let closeMobileMenu //TODO: type?

  $: isCurrentPage = key === to
</script>