```vue
<!-- ToggleButton.vue -->
<script setup>
  import { ref, computed } from 'vue'

  const isTextShown = ref(0)

  const toggleIsTextShown = () => {
    isTextShown.value = !isTextShown.value
  }

  const buttonText = computed(() => (
    isTextShown.value ? 'Show less' : 'Show more'
  ))
</script>

<​template>
  <p>
    Svelte is a JavaScript framework.
  
    <​template v-if="isTextShown">
      Though actually, if you want to get technical...
    </template>
  </p>

  <button @click="toggleIsTextShown">
    {{ buttonText }}
  </button>
</template>
```