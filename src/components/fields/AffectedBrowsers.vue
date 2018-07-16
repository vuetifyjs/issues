<template>
  <div>
    <helpers-input-header>Affected Browser(s)</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="items"
      background-color="primary lighten-3"
      flat
      label="Browser(s)"
      multiple
      solo
    />
  </div>
</template>

<script lang="ts">
  // Libs
  import UAParser from 'ua-parser-js'

  // Utilities
  import {
    mapMutations,
    mapState
  } from 'vuex'

  // Types
  import Vue from 'vue'

  const userAgent = UAParser()
  const currentBrowser = userAgent.browser
  const currentBrowserString = `${currentBrowser.name} ${currentBrowser.version}`
  const currentBrowserItem = `Current browser - ${currentBrowserString}`

  export default Vue.extend({
    data: () => ({
      items: [
        currentBrowserItem,
        'Google Chrome',
        'Mozilla Firefox',
        'Safari',
        'Microsoft Edge',
        'Internet Explorer',
        'Opera',
        'Other'
      ]
    }),

    computed: {
      model: {
        get (): string[] {
          return this.$store.state.issue.browsers
        },
        set (val: string) {
          this.setBrowsers(val)
        }
      }
    },

    created () {
      this.setBrowsers(currentBrowserItem)
    },

    methods: {
      ...mapMutations('issue', {
        setBrowsers: 'SET_BROWSERS'
      })
    }
  })
</script>
