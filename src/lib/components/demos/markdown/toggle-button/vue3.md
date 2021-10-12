```vue
<!-- ToggleButton.vue -->
<script setup>
  import { ref } from 'vue'

  const showText = ref(false)

  const toggleShowText = () => {
    showText.value = !showText.value
  }
</script>

<​template>
  <button 
    @click="toggleShowText"
    :aria-pressed="showText"
    :class="{'enabled': showText}"
  >
    Toggle text
  </button>

  <p v-if="showText">
    👻 Boo! I am some hidden text!
  </p>
</template>

<style>
  .enabled {
    background: #34657f;
    color: #fff;
  }
</style>
```