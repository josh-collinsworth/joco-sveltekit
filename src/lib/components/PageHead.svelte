<script lang="ts">
  import { isLoading, prefersReducedMotion } from '$lib/assets/js/store'

  export let title: string
  export let subtitle: string = ''

  let computedTitle: string = ''
  let isWorking: boolean = false

  const typeOutPageTitle = () => {
    if (title === '/') {
      title = "Hi, I'm Josh"
    } else if (title[0] === '/') {
      title = title.slice(1)
    }

    if ($prefersReducedMotion) {
      computedTitle = title
      return
    }

    let timer = 200

    computedTitle = ''

    for (let letter of title) {
      timer += 40
      setTimeout (() => {
        computedTitle += letter
      }, timer)
    }
  }


  $: if ($isLoading && !$prefersReducedMotion) {
    isWorking = true

    let timer = 0
    
    for (let _ of title) {
      timer += 30
      
      setTimeout (() => {
        computedTitle = computedTitle.slice(0, computedTitle.length - 1)

        if (!computedTitle.length) {
          isWorking = false
        }
      }, timer)
    }
  }

  $: if (!$isLoading && !isWorking) {
    typeOutPageTitle()
  }

  const inOrOut = () => {

  }
</script>


<div class="page-head">
  <h1 class={inOrOut}>
    <!-- <span>
      {computedTitle}
    </span> -->
    {#each computedTitle as letter}
      <span class="letter">{letter}</span>
    {/each}
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

    h1 {
      font-size: 1.1rem;
      margin: 0 1rem 0.25rem 0;
      padding: 0;
      width: max-content;

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
      &::after {
        content: '[';
        font-family: var(--body-font);
        font-weight: bold;
        background: initial;
        color: var(--lightGray);
      }

      &::after {
        content: ']';
        color: var(--yellow);
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