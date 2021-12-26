<script lang="ts">
  import { isMenuOpen } from '$lib/data/store'

  export let text: string
  export let to: string
  export let path: string
  export let mobileOnly: string|boolean = false
  
  const closeMenu = (): void => {
    isMenuOpen.set(false)
  }

  let isCurrentPage: boolean
  $: isCurrentPage = path === to
</script>


<li
  class="nav__item"
  class:open={$isMenuOpen}
  class:mobile-only={mobileOnly}
>
  <a
    sveltekit:prefetch
    href={to}
    class="nav__link"
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
    on:click={closeMenu}
  >  
    <span>{text}</span>
  </a>  
</li>  


<style lang="scss" global>
  .nav__item {
    margin: 0 0 0 1.5em;

    @media (max-width: $xs) {
      --item-transition: .4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  
      opacity: 0;
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
      line-height: 1.5em;
      color: var(--white);
      width: 100%;

      @keyframes move_in_left {
        from {
          opacity: 0;
          transform: translateX(-3em);
        }

        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }

    &.open {
      animation: move_in_left var(--item-transition);

      .reduce-motion & {
        animation: none;
        opacity: 1;
      }
  
      @for $i from 1 through 9 {
        &:nth-of-type(#{$i}) {
          animation-delay: $i * 0.1 + s;
        }
      }
  
      a {
        color: var(--white);
      }
    }

    a {
      color: var(--ink);
      display: block;
      display: inline-block;
			font-weight: normal;
			text-decoration: none;
			margin: 0;
			position: relative;
			color: var(--ink);
      width: max-content;

			&.active {
				font-weight: bold;

				span:after {
					transform: scaleX(1);
				}
			}

			span {
				display: inline-block;
				// border-bottom: .1em solid transparent;

				&:after {
					position: absolute;
					bottom: 0;
					left: 0;
					content: '';
					transform: scaleX(0);
					display: block;
					width: 100%;
					height: 0.1em;
					background: var(--yellow);
					transition: transform 0.1s cubic-bezier(0.5, 0, 0.5, 1);
					transform-origin: right;

					.reduce-motion & {
						transition: opacity 0.2s !important;
					}
				}
			}

			&:hover,
			&:focus {
				span:after {
					transform: scaleX(1);
					transform-origin: left;
				}
			}
    }

    &.mobile-only {
      @media (min-width: $xs) {
        display: none;
      }
    }
  }
</style>