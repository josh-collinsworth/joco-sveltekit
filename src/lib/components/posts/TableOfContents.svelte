<script lang="ts">
  import { onMount } from 'svelte'

  let headings = [];

  const scrollToHeading = (e: Event) => {
    const anchor = e.target as HTMLAnchorElement
    if (anchor.href) {
      const target = anchor.href.split('#').pop()
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' })
    }
  }

  let output: string = ``

  onMount(() => {
    const allHeadings = document.querySelectorAll('article h1 ~ :is(h2, h3, h4, h5, h6)');
    
    Array.from(allHeadings).forEach((heading, i) => {
      const { innerText, tagName } = heading as HTMLHeadingElement
      const level = parseInt(tagName[1])
      heading.id = `heading-${i}`
      headings = [...headings, {
        title: innerText,
        number: i,
        level
      }]
    })

    headings.forEach((h, i) => {
      if (i === 0) {
        output += `<li>`
      } else if (headings[i - 1].level === h.level) {
        output += `</li><li>`
      } else if (headings[i - 1].level < h.level) {
        output += `<ul><li>`
      } else if (headings[i - 1].level > h.level) {
        const subtraction =
          i + 1 === headings.length
            ? h.level + 1
            : headings[i - 1].level - h.level 
        console.log(`going up ${subtraction} levels`)
        for (let n = 0; n <= subtraction; n++) {
          output += '</li></ul>'
        }
        output += `</li><li>`
      }
      output += `<a href="#heading-${i}">${h.title}</a>`
    }) 
  })
</script>

{#if headings.length > 3}
  <aside class="toc">
    <h2>Table of contents:</h2>

    <ul class="toc-list" on:click|preventDefault={scrollToHeading}>
      {@html output}
    </ul>
  </aside>
{/if}



<style lang="scss" global>
  .toc {
    background: linear-gradient(145deg, rgba(var(--lightBlueRGB), 0.2) 50%, rgba(var(--yellowRGB), 0.2));
    background: rgba(var(--lightBlueRGB), 0.2);
    padding: 1.5rem;
    line-height: 1.6;
    margin: 0 0 2rem;
    width: max-content;
    max-width: 100%;
    
    .toc-list {
      list-style-type: decimal;
      font-size: 0.85rem;
      margin: 0;

      > li {
        font-weight: bold;

        ul {
          font-weight: normal;
        }
      }
      
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