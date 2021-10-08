<script lang="ts">
  null
</script>

<div class="bio-wrapper">
  <hr />
  <div class="bio">
    <img src="/images/bio-photo.jpg" alt="" class="thumbnail" width="1" height="1">
    <div>
      <p>
        Josh Collinsworth is a frontend developer, designer, teacher, and writer. He currently lives in Omaha, Nebraska, and works for Shopify as a senior frontend developer. 
      </p>
      <p><a href="/">More about me</a></p>
    </div>
  </div>
  <hr />
</div>


<style lang="scss">
  .bio {
    font-size: 0.85rem;
    font-style: italic;
    overflow: auto;
    display: flex;
    align-items: center;
    align-content: center;

    &-wrapper {
      margin-top: calc(var(--rhythm) * 5);
    }

    .thumbnail {
      width: 6rem;
      margin: 0 1rem 0 0;
      border-radius: 3rem;
    }

    p {
      margin: 0;

      + p {
        margin-top: 1rem;
      }
    }
  }
</style>