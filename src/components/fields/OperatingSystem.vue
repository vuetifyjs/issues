<template>
  <div>
    <helpers-input-header>Operating System</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="defaultOs"
      background-color="primary lighten-3"
      flat
      label="Operating System(s)"
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
        'defaultOs',
        'os'
      ]),

      model: {
        get (): string[] {
          return this.os
        },
        set (val: string[]) {
          this.setOs(val)
        }
      }
    },

    methods: {
      ...mapMutations('issue', {
        setOs: 'SET_OS'
      })
    }
  })
</script>
