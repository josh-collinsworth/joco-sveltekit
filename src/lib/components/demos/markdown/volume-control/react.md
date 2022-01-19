```jsx
// VolumeControl.jsx
import React, { useState } from 'react'

const VolumeControl = () => {
  const [volume, setVolume] = useState(0)
  
  return (
    <div>
      <input 
        id="colume-control"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(e.target.value)} 
      />

      <label for="colume-control">
        Volume: {volume}%
      </label>
    </div>
  )
}
```
