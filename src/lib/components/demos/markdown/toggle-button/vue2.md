```vue
<!-- ToggleButton.vue -->
<script>
  export default {
    data: () => ({
      isTextShown: false
    }),

    methods: {
      toggleIsTextShown() {
        this.isTextShown = !this.isTextShown
      }
    },

    computed: {
      buttonText() {
        return this.isTextShown ? 'Show less' : 'Show more'
      }
    }
  }
</script>

<​template>
  <div>
    <p>
      Svelte is a JavaScript framework.
    
      <​template v-if="isTextShown">
        Though actually, if you want to get technical...
      </template>
    </p>

    <button @click="toggleIsTextShown">
      {{ buttonText }}
    </button>
  </div>
</template>
```