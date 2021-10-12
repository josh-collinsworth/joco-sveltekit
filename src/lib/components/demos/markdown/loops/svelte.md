```svelte
{#each posts as post}
  <h2>
    <a href={post.link}>
      {post.title}
    </a>
  </h2>

  <p>{post.excerpt}</p>
{/each}
```