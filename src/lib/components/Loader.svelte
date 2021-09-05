<script>
  import { SITE_COLORS } from '$lib/assets/js/constants'

  const randomColor = () => {
    return SITE_COLORS[Math.floor(Math.random() * SITE_COLORS.length)]
  }
</script>


<div>
  <h2>Loading…</h2>
  
  <div class="loading-wrapper">
    <div class="dot outer first"></div>
    <div class="dot outer second"></div>
    <div class="dot outer third"></div>

    <div class="dot inner first"></div>
    <div class="dot inner second"></div>
    <div class="dot inner third"></div>
  </div>
</div>


<style lang="scss">
h2 {
  text-align: center;
  font-style: italic;
  font-weight: normal;
  border: none;
  width: 100%;
  font-family: var(--body-font);
  font-size: 1.2rem;
}

.loading-wrapper {
  --unit: 2rem;
  --easing: cubic-bezier(0.08, 0.82, 0.17, 1);

  display: grid;
  grid-template-columns: 1fr repeat(3, var(--unit)) 1fr;
  grid-gap: 1rem;

  .dot {
    width: var(--unit);
    height: var(--unit);
    border-radius: var(--unit);
    grid-row: 1 / 2;
    transform: scale(0);

    &.outer {
      animation: outer_pop 1000ms infinite var(--easing);
      background: var(--yellow);
      
      &:nth-of-type(2) {
        animation-delay: 100ms;
        background: var(--lightBlue);
      }
      
      &:nth-of-type(3) {
        animation-delay: 200ms;
        background: var(--lightGray);
      }
    }
    
    &.inner {
      // display: none;
      background: rgba(255, 255, 0, 0.7);
      background: var(--paper);
      animation: inner_pop 1000ms infinite var(--easing);
      
      + .inner {
        animation-delay: 100ms;

        + .inner {
          animation-delay: 200ms;
        }
      }
    }
  }
  
  .first {
    grid-column: 2 / 3;
  }

  .second {
    grid-column: 3 / 4;
  }

  .third {
    grid-column: 4 / 5;
  }
}

@keyframes outer_pop {
  0% {
    transform: scale(0)
  }
  50% {
    transform: scale(1)
  }
  75% {
    transform: scale(1)
  }
  100% {
    transform: scale(0)
  }
}

@keyframes inner_pop {
  0% {
    transform: scale(0);
  }
  35% {
    transform: scale(0);
  }
  60% {
    transform: scale(1);
  }
  95% {
    transform: scale(1);
  }
  96% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}
</style>