<template>
  <v-app>
    <core-toolbar />

    <core-view />

    <core-footer />

    <core-snackbar />
  </v-app>
</template>

<script>
  export default {
    mounted () {
      //
    }
  }
</script>

<style lang="stylus">
  .primary-transition
    transition: .2s cubic-bezier(.25,.8,.50,1)
</style>
