```svelte
<!-- VolumeControl.svelte -->
<script>
  let volume = 0
</script>


<label for="volume-control">
  Volume: {volume}%
</label>

<input 
  id="volume-control"
  type="range"
  min="0"
  max="100"
  bind:value={volume}
/>
```