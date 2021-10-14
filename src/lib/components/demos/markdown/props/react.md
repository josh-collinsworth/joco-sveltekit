```jsx
// PageHeading.jsx
const PostPreview = ({ pageTitle, pageSubtitle }) => {
  return (
    <h1>
      {pageTitle}
      {pageSubtitle &&
        <small>{pageSubtitle}</small>
      }
    </h1>
  )
}
```
