```vue
<!-- PageHeading.vue -->
<script>
  export default {
    props: {
      pageTitle: {
        required: true
      },
      pageSubtitle: {
        default: ''
      }
    }
  }
</script>

<‚Äčtemplate>
  <h1>
    {{ pageTitle }}
    <small v-if="pageSubtitle">
      {{ pageSubtitle }}
    </small>
  </h1>
</template>
```