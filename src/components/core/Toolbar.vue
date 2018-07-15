<template>
  <v-toolbar
    app
    color="primary"
    dark
  >
    <v-avatar
      size="36"
      tile
    >
      <img
        :src="require('@/assets/v-alt.svg')"
        alt="Vuetify"
      >
    </v-avatar>
    <v-toolbar-title
      class="ml-2 headline font-weight-regular"
    >
      Vuetify Issue Helper
    </v-toolbar-title>
    <v-spacer />
    <v-btn flat>
      <v-icon left>mdi-file-document-box</v-icon>
      Documentation
    </v-btn>
    <v-btn flat>
      <v-icon left>mdi-account-multiple</v-icon>
      Community
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
  import Vue from 'vue'

  // Utilities
  import { mapMutations } from 'vuex'

  export default Vue.extend({
    methods: {
      ...mapMutations('app', {
        toggleDrawer: 'TOGGLE_DRAWER'
      })
    }
  })
</script>
