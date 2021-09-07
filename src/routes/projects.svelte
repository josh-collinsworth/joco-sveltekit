<script lang="ts" context="module">

	export async function load({}) {
    try {
      const images = await Promise.all(
        Object.entries(import.meta.glob('../../static/images/projects/*.png')).map(async ([path, page]) => {
          const { metadata } = await page()
          const slug = path.split('/').pop().split('.').shift()
          return { ...metadata, slug }
        })
      )
      return {
        props: { images }
      }
    }

    catch( error ) {
      return {
        props: { 
          images: [],
          error: 'Could not fetch images'
        }
      }
    }
  }
</script>

<script lang="ts">
  export let images: object[]
</script>

<h1>Projects</h1>

<ul id="gallery">
  {#each images as image}
    <li>
      <img src="/images/projects/{image.slug}.png" alt="">
    </li>
  {/each}
</ul>


<style lang="scss">
#gallery {
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));

  img,
  li {
    margin: 0;
    padding: 0;
    display: block;
  }
}
</style>