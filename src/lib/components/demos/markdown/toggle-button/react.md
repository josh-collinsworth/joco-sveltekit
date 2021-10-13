```jsx
// ToggleButton.jsx
import React, { useState } from 'react'

export const ToggleButton = () => {
  const [isTextShown, setIsTextShown] = useState(false)

  const handleClick = () => {
    setIsTextShown(!isTextShown)
  }

  const buttonText = isTextShown ? 'Show less' : 'Show more'

  return (
    <div>
      <p>
        Svelte is a JavaScript framework.
        
        {isTextShown && 
          `Though actually, if you want to get technical...`
        }
      </p>

      <button onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  )
}
```
