<script lang="ts">
  import { isLoading } from '$lib/assets/js/store'
  
  import { onMount } from 'svelte'

  export let title: string
  export let subtitle: string = ''

  onMount(() => {
    typeOutPageTitle()
  })

  const typeOutPageTitle = () => {
    if (title === '/') {
      title = "Hi, I'm Josh"
    } else {
      title = title.slice(1, title.length)
    }

    const eventualTitle = [...title]
    let timer = 350

    title = ''

    eventualTitle.forEach(letter => {
      timer += 40
      setTimeout (() => {
        title += letter
      }, timer)
    })
  }

  $: if ($isLoading) {
    let eventualTitle = [...title]
    let timer = 0
    
    eventualTitle.forEach(letter => {
      timer += 20
      
      setTimeout (() => {
        title = title.slice(0, title.length - 1)
      }, timer)
    })
  }

  $: if (!$isLoading) {
    typeOutPageTitle()
  }
</script>


<div class="page-head">
  <h1>
    <span>
      {title}
    </span>
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
      font-size: 1.2rem;
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
</style>