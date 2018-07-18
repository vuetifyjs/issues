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

  const userAgent = new UAParser()
  const currentBrowser = userAgent.getBrowser()
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
      ...mapState('issue', {
        browsers: 'browsers'
      }),
      model: {
        get (): string[] {
          return this.browsers
        },
        set (val: string) {
          this.setBrowsers(val)
        }
      }
    },

    created () {
      this.setBrowsers([currentBrowserItem])
    },

    methods: {
      ...mapMutations('issue', {
        setBrowsers: 'SET_BROWSERS'
      })
    }
  })
</script>
