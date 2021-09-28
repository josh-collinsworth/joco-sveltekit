<script lang="ts">
  import { onMount } from 'svelte'
  let React, Vue2, Vue3, Svelte, currentLanguage

  let languages: object = {}

  const changeLanguage = (language) => {
    currentLanguage = languages[language].component
  }

  onMount(async () => {
    React = (await import('./markdown/code-comparison/react.md')).default
    Vue2 = (await import('./markdown/code-comparison/vue2.md')).default
    Vue3 = (await import('./markdown/code-comparison/vue3.md')).default
    Svelte = (await import('./markdown/code-comparison/svelte.md')).default

    languages = {
      svelte: {
        title: 'Svelte',
        component: Svelte,
      },
      react: {
        title: 'React',
        component: React,
      },
      vue2: {
        title: 'Vue 2',
        component: Vue2,
      },
      vue3: {
        title: 'Vue 3.2',
        component: Vue3,
      }
    }

    currentLanguage = Svelte
  })
</script>

<div class="svelte-code-comparison">
  <div class="svelte-code-comparison__button-bar">
    {#each Object.keys(languages) as language}
      <button 
      role="button"
      on:click={() => changeLanguage(language)}
      aria-selected={currentLanguage == languages[language].component}
      class:current={currentLanguage == languages[language].component}
      >
        {languages[language].title}
      </button>
    {/each}
  </div>

  <svelte:component this={currentLanguage} />
</div>


<style lang="scss" global>
  .svelte-code-comparison {
    margin: 2rem 0;

    &__button-bar {
      display: flex;
      justify-content: flex-start;
    }

    button {
      padding-left: 2vw;
      padding-right: 2vw;
      border-bottom: 0 !important; // Overrides .current block below

      @media (min-width: $wider) {
        padding-left: 1em;
        padding-right: 1em;
      }

      + button {
        border-left: 0;
      }
    }

    .current {
      background: #1d1e26;
      border: 1px solid var(--black);
      color: #9580ff;
      font-weight: bold;
    }

    pre {
      margin-top: 0;
      padding-top: 1rem;

      &:before {
        display: none;
      }
    }
  }
</style>