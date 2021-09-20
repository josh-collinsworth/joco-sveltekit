<script lang="ts">
  import { isLoading, isMenuOpen } from '$lib/assets/js/store'

  export let text: string
  export let to: string
  export let key: string
  export let mobile: boolean = false

  const handleClick = (): void => {
    isMenuOpen.set(false)

    if (!isCurrentPage) {
      isLoading.set(true)
    }
  }

  let isCurrentPage: boolean
  $: isCurrentPage = key === to
</script>


<li class:mobile={mobile} class:open={$isMenuOpen} >
  <a
    sveltekit:prefetch
    href={to}
    class="nav__link"
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
    tabindex={mobile && !$isMenuOpen ? -1 : 0}
    on:click={handleClick}
  >  
    <span>{text}</span>
  </a>  
</li>  


<style lang="scss">
  li {
    margin: 0 0 0 1.5em;

    &.mobile {
      --item-transition: .4s cubic-bezier(0.165, 0.84, 0.44, 1);
  
      transform: translateX(-3em);
      opacity: 0;
      transition: transform var(--item-transition), opacity var(--item-transition);
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
      line-height: 1.5em;
      color: var(--white);
      width: 100%;
    }

    &.open {
      transform: translateX(0vw);
      opacity: 1;
  
      @for $i from 1 through 9 {
        &:nth-of-type(#{$i}) {
          transition-delay: $i * 0.10 + s;
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
  }
</style>