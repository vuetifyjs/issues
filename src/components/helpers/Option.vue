<template>
  <div class="mb-1">
    <strong>{{ title }}:</strong>&nbsp;<span>{{ value }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: null
      },
      value: {
        type: String,
        default: null
      }
    }
  }
</script>
