<template>
  <v-snackbar
    v-model="model"
    :color="snackbar.type"
    :timeout="snackbar.timeout"
    right
  >
    <v-icon
      :dark="snackbar.type !== 'warning'"
      v-text="icon"
    />
    <span
      :class="snackbar.type === 'warning' ? 'black--text' : 'white--text'"
      v-text="snackbar.msg"
    />
  </v-snackbar>
</template>

<script lang="ts">
  // Types
  import Vue from 'vue'

  // Utilities
  import {
    mapState
  } from 'vuex'

  interface IconMap {
    [name: string]: string
  }

  const ICON_MAP: IconMap = {
    error: 'mdi-alert-octagon',
    info: 'mdi-information',
    success: 'mdi-check-circle',
    warning: 'mdi-alert-circle'
  }

  export default Vue.extend({
    data: () => ({
      model: false
    }),

    computed: {
      ...mapState('app', ['snackbar']),
      icon (): string {
        return ICON_MAP[this.snackbar.type] || 'mdi-playlist-check'
      }
    },

    watch: {
      snackbar () {
        this.model = true
      }
    }
  })
</script>
