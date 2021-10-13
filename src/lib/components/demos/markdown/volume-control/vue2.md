```vue
<!-- VolumeControl.vue -->
<script>
  export default {
    data: () => ({
      volume: 0
    })
  }
</script>

<​template>
  <div>
    <label for="volume-control">
      Volume: {{ volume }}%
    </label>

    <input 
      id="volume-control"
      type="range"
      min="0"
      max="100"
      v-model="volume"
    />
  </div>
</template>
```