```vue
<div v-for="post in posts">
  <h2>
    <a :href="post.link">
      {{ post.title }}
    </a>
  </h2>

  <p>{{ post.excerpt }}</p>
</div>
```