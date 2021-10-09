```vue
<!-- CounterButton.vue -->
<script setup>
  import { ref } from 'vue'

  const showText = ref(false)

  const toggleShowText = () => {
    showText.value = !showText.value
  }
</script>

<​template>
  <div>
    <button 
      @click="toggleShowText"
      :aria-pressed="showText"
      :class="{on: showText}"
    >
      Toggle text
    </button>

    <p v-if="showText">
      👻 Boo! I am some hidden text!
    </p>
  </div>
</template>

<style>
  .on {
    background: #ffd100;
  }
</style>
```