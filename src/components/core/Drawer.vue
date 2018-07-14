<template>
  <v-navigation-drawer
    :value="drawer"
    app
    @input="setDrawer"
  >
    <v-list>
      <v-list-tile :to="{ name: 'Home', params: { lang: 'en' } }" exact>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>
      <v-list-tile :to="{ name: 'Settings', params: { lang: 'en' } }">
        <v-list-tile-title>Settings</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    computed: {
      ...mapState('app', ['drawer'])
    },

    methods: {
      ...mapMutations('app', {
        setDrawer: 'SET_DRAWER'
      })
    }
  }
</script>
