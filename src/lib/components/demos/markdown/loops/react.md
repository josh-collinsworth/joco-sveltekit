```jsx
posts.map(post => (
  <div key={post.link}>
    <h2>
      <a href={post.link}>
        {post.title}
      </a>
    </h2>

    <p>{post.excerpt}</p>
  </div>
))
```
