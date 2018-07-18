<template>
  <v-flex>
    <helpers-input-header>Issue Title</helpers-input-header>
    <v-text-field
      v-model="title"
      background-color="primary lighten-3"
      flat
      label="Title"
      solo
    />
  </v-flex>
</template>

<script lang="ts">
  // Types
  import Vue from 'vue'

  export default Vue.extend({
    data: () => ({
      title: ''
    })
  })
</script>
