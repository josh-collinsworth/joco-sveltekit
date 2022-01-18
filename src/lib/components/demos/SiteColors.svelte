<script lang="ts">
  const colors: string[] = [
    '#ffd100',
    '#34657f',
    '#7ba7bc',
    '#ff6a13',
    '#e4002b',
    '#a7a8aa',
    '#888b8d',
    '#53565a',
    '#341F23',
    '#101820',
  ]
</script>

<ul class="brand-colors no-bullets">
  {#each colors as color}
    <li class="color">
      <div class="swatch" style="background-color: {color}">
      </div>
      <span>{color}</span>
    </li>
  {/each}
</ul>


<style lang="scss">
  .brand-colors {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8.5rem, 1fr));
    padding: 0;
    
    .color {
      list-style-type: none;
      display: flex;
      align-items: center;
      font-size: .9rem;
      font-family: var(--codeFont);
      text-shadow: 0 0 1px var(--trueWhite);
      
      .swatch {
        width: 3.5em;
        height: 3.5em;
        margin-right: .5rem;
      }
    }
  }
</style>