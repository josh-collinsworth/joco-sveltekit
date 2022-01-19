```vue
<!-- PageHeading.vue -->
<script setup>
  const props = defineProps({
    pageTitle: {
      required: true
    },
    pageSubtitle: {
      default: ''
    }
  })
</script>

<​template>
  <h1>
    {{ pageTitle }}
    <small v-if="pageSubtitle">
      {{ pageSubtitle }}
    </small>
  </h1>
</template>
```