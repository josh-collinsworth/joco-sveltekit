<script>
  import { onMount } from 'svelte'
  import { SITE_COLORS } from '$lib/assets/js/constants'

  const randomColor = () => {
    return SITE_COLORS[Math.floor(Math.random() * SITE_COLORS.length)]
  }

  onMount(() => {
    setInterval(() => {
      const boxes = document.querySelectorAll('.loading-wrapper__box')

      boxes.forEach((box, i) => {
        setTimeout(() => {
          box.style.backgroundColor = randomColor()
          
          const randomNumber = Math.random()

          box.style.gridColumn = 'span 1'
          box.style.gridRow = 'span 1'
          
          if (randomNumber > .80) {
            box.style.gridColumn = 'span 2'
            box.style.gridRow = 'span 2'
          }
          
          if (randomNumber > .95) {
            box.style.gridColumn = 'span 3'
            box.style.gridRow = 'span 3'
          }
        }, i * 200)
      })
    }, 400)
  })
</script>


<div>
  <h2 class="h3">Loading…</h2>
  
  <div class="loading-wrapper">
    <div class="loading-wrapper__box"></div>
    <div class="loading-wrapper__box"></div>
    <div class="loading-wrapper__box"></div>
    <div class="loading-wrapper__box"></div>
    <div class="loading-wrapper__box"></div>
    <div class="loading-wrapper__box"></div>
    <div class="loading-wrapper__box"></div>
  </div>
</div>


<style lang="scss">
  .loading-wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1rem);
    grid-template-rows: repeat(7, 1rem);

    &__box {
      width: 100%;
      height: 100%;
      background: var(--lightBlue);
    }
  }
</style>