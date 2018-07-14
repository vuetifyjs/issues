<template>
  <v-toolbar app>
    <v-toolbar-side-icon
      @click="toggleDrawer"
    />
  </v-toolbar>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    methods: {
      ...mapMutations('app', {
        toggleDrawer: 'TOGGLE_DRAWER'
      })
    }
  }
</script>
