<script lang="ts">
  import { onMount } from 'svelte'
import { end_hydrating } from 'svelte/internal';

  let headings = [];

  const scrollToHeading = (e) => {
    if (e.target.href) {
      const target = e.target.href.split('#').pop()
      console.log(target)
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' })
    }
  }

  const generatePrefix = (level: number): string => {
    if (level === 0) {
      return '• '
    }

    const iterator = new Array(level).fill('')
    let prefix = '    '

    iterator.forEach((_, i) => {
      if (i + 1 == iterator.length) {
        prefix += '•'
      } else {
        prefix += '    '
      }
    })

    return prefix
  }

  let output = ''

  onMount(() => {
    let allHeadings = document.querySelectorAll('article .toc ~ :is(h2, h3, h4, h5, h6)');
    allHeadings.forEach((heading, i) => heading.id = `heading-${i}`);
    headings = [...allHeadings].map((h, i) => {
      const level = parseInt(h.tagName.slice(1)) - 2
      
      return {
        title: h.innerText,
        level,
        prefix: generatePrefix(level),
        number: i
      }
    })

    headings.forEach((h, i) => {
      const link = `<a href="#heading-${i}">${h.title}</a>`
      if (i === 0) {
        output += `<li>${link}`
      } else if (headings[i - 1].level === h.level) {
        output += `</li><li>${link}`
      } else if (headings[i - 1].level < h.level) {
        output += `<ul><li>${link}`
      } else if (headings[i - 1].level > h.level) {
        console.log(h.title)
        const subtraction =
          i + 1 === headings.length
            ? h.level + 1
            : headings[i - 1].level - h.level 
        console.log(`going up ${subtraction} levels`)
        for (let n = 0; n <= subtraction; n++) {
          output += '</li></ul>'
        }
        output += `</li><li>${link}`
      }
    }) 
  })
</script>

<aside class="toc">
  <h2>Table of contents:</h2>

  <ul class="toc-list" on:click|preventDefault={scrollToHeading}>
    {@html output}
  </ul>
  <!-- {#each headings as heading}
  <div>
    <a href="#heading-{heading.number}" on:click|preventDefault={scrollToHeading(heading.number)}>
      <span class="h-{heading.level}">
        {heading.prefix}
        {heading.title}
      </span>
    </a>
  </div>
  {/each} -->
</aside>


<style lang="scss" global>
  .toc {
    background: rgba(var(--lightBlueRGB), 0.2);
    padding: 1.5rem;
    line-height: 1.6;
    border: 1px solid;
    margin: 0 0 2rem;
    width: max-content;
    
    .toc-list {
      list-style-type: decimal;
      font-size: 0.9rem;
      margin: 0;
      
      ul {
        list-style-type: lower-alpha;
        margin: 0.5em 0 0;

        ul {
          list-style-type: decimal;
        }
      }
      
      li {
        list-style-type: inherit;
        margin: 0 0 0.5em;

        &::before {
          content: unset;
        }
      }
    }


    h2 {
      font-weight: bold;
      font-family: var(--body-font);
      font-size: 1.3rem;  
      margin-bottom: 2rem;
    }
  }
</style>