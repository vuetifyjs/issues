<template>
  <v-app>
    <core-toolbar />

    <core-view />

    <core-footer />

    <core-snackbar />
  </v-app>
</template>

<script lang="ts">
  // Libs
  import UAParser from 'ua-parser-js'

  // Utilities
  import {
    mapActions,
    mapMutations
  } from 'vuex'

  // Types
  import Vue from 'vue'

  const userAgent = new UAParser()
  const currentBrowser = userAgent.getBrowser()
  const currentBrowserString = `${currentBrowser.name} ${currentBrowser.version}`
  const currentBrowserItem = `Current browser - ${currentBrowserString}`
  const currentOS = userAgent.getOS()
  const currentOSString = `${currentOS.name} ${currentOS.version}`
  const currentOSItem = `Current OS - ${currentOSString}`

  export default Vue.extend({
    metaInfo: {
      title: 'Vuetify Issue Helper',
      meta: [
        { name: 'description', content: 'Hello World' }
      ]
    },

    mounted () {
      this.fetchRepositories()
      this.pushDefaultBrowser(currentBrowserItem)
      this.pushDefaultOs(currentOSItem)
      this.setBrowsers([currentBrowserItem])
      this.setOs([currentOSItem])
    },

    methods: {
      ...mapActions('api', ['fetchRepositories']),
      ...mapMutations('issue', {
        pushDefaultBrowser: 'PUSH_DEFAULT_BROWSER',
        pushDefaultOs: 'PUSH_DEFAULT_OS',
        setBrowsers: 'SET_BROWSERS',
        setOs: 'SET_OS'
      })
    }
  })
</script>

<style lang="stylus">
  .primary-transition
    transition: .2s cubic-bezier(.25,.8,.50,1)
</style>
