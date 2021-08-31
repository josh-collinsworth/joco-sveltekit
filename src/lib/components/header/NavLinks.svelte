<ul class:mobile={mobile}>
  <li class:open={menuOpen}>
    <a href="/">
      <span>Home</span>
    </a>
  </li>
  <li class:open={menuOpen}>
    <a href="/about">
      <span>About</span>
    </a>
  </li>
  <li class:open={menuOpen}>
    <a href="/blog">
      <span>Blog</span>
    </a>
  </li>
  <li class:open={menuOpen}>
    <a href="/uses">
      <span>Uses</span>
    </a>
  </li>
</ul>


<script lang="ts">
  export let mobile: boolean = false
  export let menuOpen: boolean = false
</script>


<style lang="scss">
ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 2em;
  width: auto;
  font-size: .875rem;
  list-style-type: none;
  padding: 0;

  li {
    margin: 0;
    margin-left: 1.5em;
  }

  a {
    color: var(--ink);
    margin: 0;

    &:hover {
      color: var(--link-color);
    }
  }
}

ul.mobile {
  list-style-type: none;
  text-align: left;
  width: 100%;

  li {
    transform: translateX(-3em);
    opacity: 0;
    transition: all .4s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin-bottom: .75rem;
    font-size: 1.25rem;
    line-height: 1.5em;
    color: var(--white);
    width: 100%;

    &.open {
      transform: translateX(0vw);
      opacity: 1;

      @for $i from 1 through 9 {
        &:nth-of-type(#{$i}) {
          transition-delay: $i * 0.10 + s;
        }
      }
    }

    a {
      padding: .5rem 0 .25rem;
      color: var(--white);
      display: block;

      span {
        display: inline-block;
      }
    }
  }
}
</style>