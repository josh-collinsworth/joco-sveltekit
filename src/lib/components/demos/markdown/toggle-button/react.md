```jsx
// ToggleButton.jsx
import React, { useState } from 'react'
import './toggleButtonCSS' // Assume the `.on` class CSS is in this file

export const ToggleButton = () => {
  const [showText, setShowText] = useState(false)

  const handleClick = () => {
    setShowText(!showText)
  }

  return (
    <div>
      <button 
        onClick={handleClick}
        aria-pressed={showText}
        className={showText && 'on'}
      >
        Toggle text
      </button>

      { showText &&
        <p>👻 Boo! I am some hidden text!</p>
      }
    </div>
  )
}
```
