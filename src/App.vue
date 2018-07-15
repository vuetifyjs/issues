<template>
  <v-app>
    <core-toolbar />

    <core-drawer />

    <core-view />

    <core-footer />

    <core-snackbar />
  </v-app>
</template>

<script>
  export default {
    mounted () {
      this.snackbar$.default('Welcome to Vuetify')
    }
  }
</script>
