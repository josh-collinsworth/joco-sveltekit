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
    Number of clicks: {{ count }}
  </button>
</template>
```