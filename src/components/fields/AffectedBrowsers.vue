<template>
  <div>
    <helpers-input-header>Affected Browser(s)</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="defaultBrowsers"
      background-color="primary lighten-3"
      flat
      label="Browser(s)"
      multiple
      solo
    />
  </div>
</template>

<script lang="ts">
  // Utilities
  import {
    mapMutations,
    mapState
  } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
      ...mapState('issue', [
        'browsers',
        'defaultBrowsers'
      ]),
      model: {
        get (): string[] {
          return this.browsers
        },
        set (val: string) {
          this.setBrowsers(val)
        }
      }
    },

    methods: {
      ...mapMutations('issue', {
        setBrowsers: 'SET_BROWSERS'
      })
    }
  })
</script>
