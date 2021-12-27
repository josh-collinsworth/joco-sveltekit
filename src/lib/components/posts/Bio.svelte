<script lang="ts">
  null
</script>

<div class="bio-wrapper">
  <hr />
  <div class="bio">
    <img src="/images/bio-photo.jpg" alt="" class="thumbnail" width="1" height="1">
    <div>
      <p class="about">
        Josh Collinsworth is a frontend developer, designer, teacher, and writer. He currently lives in Omaha, Nebraska, and works for Shopify as a senior frontend developer. 
      </p>
      <ul class="link-list">
        <li class="link-list__kofi">
          <a href="https://ko-fi.com/collinsworth" rel="external">
            Buy me a coffee
          </a>
        </li>
        <li class="link-list__contact">
          <a href="/contact">
            Send me a note about this post
          </a>
        </li>
        <li class="link-list__more">
          <a href="/">More about me</a>
        </li>
      </ul>
    </div>
  </div>
  <hr />
</div>


<style lang="scss">
  .bio {
    font-size: 0.85rem;
    overflow: auto;
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;

    @media (min-width: $xxs) {
      flex-wrap: nowrap;
    }
    
    .about {
      font-style: italic;
      font-family: var(--body-font);
    }

    .link-list {
      font-family: var(--heading-font);
      margin: var(--rhythm) 0 0;
      padding-left: 1rem;

      li {
        margin: 0 0 0.25rem;

        a {
          text-decoration-color: var(--lightGray);
        }
      }

      &__kofi::marker {
        content: '☕ '
      }

      &__contact::marker {
        content: '📩 '
      }

      &__more::marker {
        content: '💁🏼‍♂️ '
      }
    }

    &-wrapper {
      margin-top: calc(var(--rhythm) * 5);
    }

    .thumbnail {
      width: 6rem;
      border-radius: 3rem;
      margin: 0 auto var(--rhythm);

      @media (min-width: $xxs) {
        margin: 0 var(--rhythm) 0 0;
      }
    }

    p {
      margin: 0;
    }
  }
</style>