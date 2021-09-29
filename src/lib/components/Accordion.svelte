<script lang="ts">
  import { onMount } from "svelte";

  export let title: string = ''

  let contentsEl: HTMLDivElement
  let openHeight: number
  let isOpen: boolean = true

  const toggleOpen = () => {
    isOpen = !isOpen
  }

  onMount(() => {
    openHeight = contentsEl.getBoundingClientRect().height
    contentsEl.style.setProperty('--openHeight', `${openHeight}px`)
    isOpen = false
  })
</script>


<div class="accordion" class:open={isOpen}>
  <button
    class="accordion__button"
    on:click={toggleOpen}
    aria-pressed={isOpen}
  >
    {title}
  </button>
  <div class="accordion__contents" bind:this={contentsEl}>
    <slot />
  </div>
</div>


<style lang="scss">
  .accordion {
    
    &__button {
      padding: 0;
      border: 0;
      background: transparent;
      font-weight: bold;

      &::before {
        content: '\25B6';
        display: inline-block;
        transition: .1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        margin-right: .5em;

        .open & {
          transform: rotate(90deg);
        }
      }
    }

    &__contents {
      height: 0;
      overflow: hidden;
      transition: height .2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    &.open .accordion__contents {
      height: var(--openHeight);
    }
  }
</style>
