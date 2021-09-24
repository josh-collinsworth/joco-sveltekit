<script lang="ts">
  import { onMount } from 'svelte'
import { end_hydrating } from 'svelte/internal';

  let headings = [];

  const scrollToHeading = (level) => {
    document.getElementById(`heading-${level}`).scrollIntoView({
      behavior: 'smooth'
    })
  }

  const generatePrefix = (level: number): string => {
    if (level === 0) {
      return '• '
    }

    const iterator = new Array(level).fill('')
    let prefix = '    '

    console.log(iterator)

    iterator.forEach((_, i) => {
      if (i + 1 == iterator.length) {
        prefix += '•'
      } else {
        prefix += '    '
      }
    })

    console.log(prefix)

    return prefix
  }

  onMount(() => {
    let allHeadings = document.querySelectorAll('article .toc ~ :is(h2, h3, h4, h5, h6)');
    allHeadings.forEach((heading, i) => heading.id = `heading-${i}`);
    headings = [...allHeadings].map((h, i) => {
      const level = parseInt(h.tagName.slice(1)) - 2
      
      return {
        name: h.innerText,
        level,
        prefix: generatePrefix(level),
        number: i
      }
    })
  })
</script>

<aside class="toc">
  <h2>Table of contents:</h2>

  {#each headings as heading}
  <div>
    <a href="#heading-{heading.number}" on:click|preventDefault={scrollToHeading(heading.number)}>
      <span class="h-{heading.level}">
        {heading.prefix}
        {heading.name}
      </span>
    </a>
  </div>
  {/each}
</aside>


<style lang="scss">
  .toc {
    background: rgba(var(--lightBlueRGB), 0.2);
    padding: 1.5rem;
    line-height: 1.6;
    margin: 1rem 0;
    border: 1px solid;
    white-space: pre;

    h2 {
      font-weight: bold;
      font-family: var(--body-font);
      font-size: 1.3rem;  
    }
  
    .h-0 {
      font-weight: bold;
      display: inline-block;
      margin-top: 0.5rem;
    }
  }
</style>