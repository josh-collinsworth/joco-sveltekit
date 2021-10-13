<script>
  let volume = 0
</script>


<label for="volume">
  Volume: {volume}%
</label>

<input 
  id="volume"
  type="range"
  min="0"
  max="100"
  bind:value={volume}
/>


<style lang="scss">
  input {
    padding: 0;
    width: 100%;
    max-width: 12rem;
    margin-bottom: calc(var(--rhythm) * 3);
    display: block;
  }

  label {
    font-family: var(--heading-font);
    font-weight: bold;
    margin-top: calc(var(--rhythm) * 2);
  }
</style>
