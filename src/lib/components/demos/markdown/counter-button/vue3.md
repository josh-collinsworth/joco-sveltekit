```vue
<!-- CounterButton.vue -->
<script setup>
  import { ref } from 'vue'

  const count = ref(0)

  const incrementCount = () => {
    count.value++
  }
</script>

<​template>
  <button @click="incrementCount">
    Number of clicks: {{ count }}
  </button>
</template>
```