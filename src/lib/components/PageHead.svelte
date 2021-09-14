<script lang="ts">
  import { prefersReducedMotion } from '$lib/assets/js/store'

  export let title: string
  export let subtitle: string = ''

  let computedTitle: string = ''
  let isWorking: boolean = false

  $: if (title) {
    if (title === '/') {
      title = `Hi, I'm Josh.`
    } else if (title[0] === '/') {
      title = title.slice(1)
    }

    isWorking = false

    setTimeout(() => {
      isWorking = true
      computedTitle = title
    }, 360)

  }
</script>


<div class="page-head">
  <h1>
    <div class="title-wrap" class:in={isWorking} class:no-motion={$prefersReducedMotion}>
      <span class="letter">{computedTitle}</span>
    </div>
  </h1>
  <p class="subtitle">
    {subtitle}
  </p>
</div>


<style lang="scss">
  .page-head {
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    contain: layout;

    h1 {
      font-size: 1.1rem;
      margin: 0 1rem 0.25rem 0;
      padding: 0;
      width: max-content;
      display: flex;
      align-items: center;
      overflow: hidden;

      .title-wrap {
        position: relative;
        z-index: 1;
        transform: translateX(calc(-100% + .2em));
        transition: transform .36s cubic-bezier(0.215, 0.610, 0.355, 1);

        &.in {
          transform: translateX(0);
        }

        &.no-motion {
          transform: none !important;
        }
      }

      span {
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
      }

      &::before,
      .title-wrap::after {
        content: '[';
        font-family: var(--body-font);
        font-weight: bold;
        background: initial;
        color: var(--lightGray);
        margin: 0 0.1em 0 0;
        z-index: 2;
        position: relative;
        left: -2px;
      }

      .title-wrap::after {
        content: ']';
        color: var(--yellow);
        margin: 0 0 0 0.25em;
      }
    }

    p.subtitle {
      font-size: 0.8em;
      font-style: italic;
      line-height: 1.2;
      flex: 1 1 auto;
    }
  }

  @keyframes fade_in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>