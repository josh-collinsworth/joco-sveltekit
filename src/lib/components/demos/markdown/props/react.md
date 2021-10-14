```jsx
// PageHeading.jsx
const PostPreview = (props) => {
  return (
    <h1>
      {props.pageTitle}
      {props.pageSubtitle &&
        <small>{props.pageSubtitle}</small>
      }
    </h1>
  )
}
```
