<template>
  <v-toolbar
    color="primary"
    dark
    flat
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
    <v-btn
      :icon="$vuetify.breakpoint.xsOnly"
      flat
    >
      <v-icon>mdi-file-document-box</v-icon>
      <span class="hidden-xs-only ml-3">Documentation</span>
    </v-btn>
    <v-btn
      :icon="$vuetify.breakpoint.xsOnly"
      flat
    >
      <v-icon>mdi-account-multiple</v-icon>
      <span class="hidden-xs-only ml-3">Community</span>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
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
