```vue
<!-- CounterButton.vue -->
<script>
  export default {
    data: () => ({
      count: 0
    }),

    methods: {
      incrementCount() {
        this.count++
      }
    }
  }
</script>

<​template>
  <button @click="incrementCount">
    This button's been clicked {{ count }} times.
  </button>
</template>
```