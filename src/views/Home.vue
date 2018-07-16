<template>
  <v-layout
    align-start
    justify-center
    wrap
  >
    <info-cta />

    <form-card />
  </v-layout>
</template>

<script>
  // Utilities
  import { mapActions } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    metaInfo: {
      title: 'Vuetify Issue Helper',
      meta: [
        { name: 'description', content: 'Hello World' }
      ]
    },

    mounted () {
      this.fetchRepositories()
    },

    methods: {
      ...mapActions('api', ['fetchRepositories'])
    }
  })
</script>
