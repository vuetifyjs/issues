<template>
  <div>
    <helpers-input-header>Operating System</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="items"
      background-color="primary lighten-3"
      flat
      label="Operating System(s)"
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
  const currentOS = userAgent.getOS()
  const currentOSString = `${currentOS.name} ${currentOS.version}`
  const currentOSItem = `Current OS - ${currentOSString}`

  export default Vue.extend({
    data: () => ({
      items: [
        currentOSItem,
        'Windows',
        'Android',
        'iOS',
        'Mac OSX',
        'Linux'
      ]
    }),

    computed: {
      model: {
        get (): string[] {
          return this.$store.state.issue.os
        },
        set (val: string[]) {
          this.setOs(val)
        }
      }
    },

    created () {
      this.setOs([currentOSItem])
    },

    methods: {
      ...mapMutations('issue', {
        setOs: 'SET_OS'
      })
    }
  })
</script>
