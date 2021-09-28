<script lang="ts">
  import { onMount } from 'svelte'

  const scrollToHeading = (e: Event) => {
    const anchor = e.target as HTMLAnchorElement
    if (anchor.href) {
      const target = anchor.href.split('#').pop()
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' })
    }
  }

  let showTableOfContents: boolean = false
  let output: string = ``

  /**
   * This whole approach feels hacky, but I tried several others and kept running into walls
   * with how list HTML tags need to be nested. 
   * 
   * Every other solution I could think of either required a usage of `{each}` that Svelte 
   * doesn't allow (it requires you to close tags within the block; you can't leave one open), 
   * or way, way more looping (or both). So I'll just stick with this hacky approach since 
   * it works and as a bonus, is a progressive enhancement.
  */
  onMount(() => {
    const allHeadings = document.querySelectorAll('article h1 ~ :is(h2, h3, h4, h5, h6)');

    if (allHeadings.length < 5) return

    showTableOfContents = true
    let previousHeadingLevel: number
    
    Array.from(allHeadings).forEach((heading, i) => {
      const { innerText, tagName } = heading as HTMLHeadingElement
      const level = parseInt(tagName[1])
      heading.id = `heading-${i}`

      if (i === 0) {
        output += `<li>`
      } else if (previousHeadingLevel === level) {
        output += `</li><li>`
      } else if (previousHeadingLevel < level) {
        output += `<ul><li>`
      } else if (previousHeadingLevel > level) {
        const subtraction =
          i + 1 === allHeadings.length
            ? level + 1
            : previousHeadingLevel - level 
        for (let n = 0; n <= subtraction; n++) {
          output += '</li></ul>'
        }
        output += `</li><li>`
      }
      output += `<a href="#heading-${i}">${innerText}</a>`
      previousHeadingLevel = level
    }) 
  })
</script>

{#if showTableOfContents}
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
    width: 100%;
    
    .toc-list {
      list-style-type: decimal;
      font-size: 0.85rem;
      margin: 0;
  
      li::marker {
        color: var(--ink);
        content: unset;
        font-weight: normal;
      }

      > li {
        font-weight: bold;

        &::marker {
          font-weight: bold;
        }

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