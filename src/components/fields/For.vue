<template>
  <div>
    <helpers-input-header>I am submitting a</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="items"
      background-color="primary lighten-3"
      color="black"
      flat
      label="Report"
      solo
    />
  </div>
</template>

<script lang="ts">
  // Libs
  import axios from 'axios'

  // Utilities
  import {
    mapMutations,
    mapState
  } from 'vuex'

  // Types
  import Vue from 'vue'

  enum Type {
    'Bug',
    'Feature Request'
  }

  export default Vue.extend({
    data: () => ({
      items: [
        'Bug',
        'Feature Request'
      ]
    }),

    computed: {
      model: {
        get (): Type {
          return this.$store.state.issue.type
        },
        set (val: Type) {
          this.setType(val)
        }
      }
    },

    methods: {
      ...mapMutations('issue', {
        setType: 'SET_TYPE'
      })
    }
  })
</script>
