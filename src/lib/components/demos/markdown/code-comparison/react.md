```jsx
// CounterButton.jsx
import React, { useState } from 'react'

export const Button = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={incrementCount}>
      This button's been clicked {count} times.
    </button>
  )
}
```
