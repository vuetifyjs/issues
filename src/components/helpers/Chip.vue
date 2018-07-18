<template>
  <v-chip
    class="font-weight-bold ma-0 mb-2"
    color="brown lighten-4"
    label
    style="pointer-events: none;"
    tabindex="-1"
  >
    <v-icon
      class="mr-2"
      color="grey darken-2"
      size="20"
    >{{ `mdi-${icon}` }}</v-icon>
    {{ value }}
  </v-chip>
</template>

<script>
  export default {
    props: {
      icon: null,
      value: null
    }
  }
</script>
