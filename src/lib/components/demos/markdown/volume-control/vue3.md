```vue
<!-- VolumeControl.vue -->
<script setup>
  import { ref } from 'vue'

  const volume = ref(0)
</script>

<​template>
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
</template>
```