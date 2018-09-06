<template>
  <div>
    <helpers-input-header>Affected Browser(s)</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="defaultBrowsers"
      flat
      label="Browser(s)"
      multiple
      box
    />
  </div>
</template>

<script>
// Utilities
  import { mapMutations, mapState } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
      ...mapState('issue', ['browsers', 'defaultBrowsers']),
      model: {
        get () {
          return this.browsers
        },
        set (val) {
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
