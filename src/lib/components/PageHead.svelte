<script lang="ts">
  import { prefersReducedMotion } from '$lib/assets/js/store'

  export let title: string
  export let subtitle: string = ''

  let computedTitle: string = ''
  let isWorking: boolean = false

  $: if (title) {
    if (title === '/') {
      title = `Hi, I'm Josh`
    } else if (title[0] === '/') {
      title = title.slice(1)
    }

    isWorking = false

    setTimeout(() => {
      isWorking = true
      computedTitle = title
    }, 420)

  }
</script>


<div class="page-head">
  <div class="heading-wrapper" class:in={isWorking}>
    <span class="brace" aria-hidden="true">[</span>
    <h1>
      <div class="title-wrap" class:no-motion={$prefersReducedMotion}>
        {computedTitle}
      </div>
    </h1>
    <span class="brace closing-brace" aria-hidden="true">]</span>
  </div>
  <p class="subtitle">
    {subtitle}
  </p>
</div>


<style lang="scss">
  .page-head {
    --transition: transform .42s cubic-bezier(0.165, 0.84, 0.44, 1);

    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    contain: layout;
    position: relative;

    .heading-wrapper {
      display: flex;
      position: relative;
      width: auto;

      .brace {
        font-family: var(--body-font);
        font-weight: bold;
        font-size: 1.25em;
        color: var(--lightGray);
        margin: 0 0.1em 0 0;
        z-index: 2;
        position: relative;
        left: -2px;

        &.closing-brace {
          color: var(--yellow);
          margin: 0;
          transition: var(--transition);
          transform: translateX(calc(-100% + .3em));
          position: absolute;
          left: 100%;
          width: 100%;
          background: var(--paper);;
        }
      }

      &.in .closing-brace {
        transform: translateX(0);
      }
    }

    h1 {
      font-size: 1.1rem;
      margin: 0 0.25rem 0 0;
      padding: 0;
      width: max-content;
      display: flex;
      align-items: center;
      overflow: hidden;

      .title-wrap {
        position: relative;
        z-index: 1;
        overflow: hidden;
        background: linear-gradient(90deg, var(--lightGray) 60%, var(--yellow));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        font-family: var(--body-font);
        text-transform: lowercase;
        flex: 0 1 auto;
        white-space: nowrap;
        line-height: 1.2;
        animation: fade_in .2s forwards;
        
        &.no-motion {
          transform: none !important;
        }
      }
    }

    p.subtitle {
      font-size: 0.8em;
      font-style: italic;
      line-height: 1.2;
      flex: 1 1 auto;
    }
  }
</style>