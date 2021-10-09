```vue
<!-- ToggleButton.vue -->
<script>
  export default {
    data: () => ({
      showText: false
    }),

    methods: {
      toggleShowText() {
        this.showText = !this.showText
      }
    }
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