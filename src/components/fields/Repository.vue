<template>
  <div>
    <helpers-input-header>For Repository</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="getRepositories"
      autocorrect="off"
      background-color="primary lighten-3"
      flat
      item-text="full_name"
      item-value="full_name"
      label="Repository"
      return-object
      spellcheck="false"
      solo
    />
  </div>
</template>

<script lang="ts">
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
      ...mapGetters('api', ['getRepositories']),
      model: {
        get (): string {
          return this.$store.state.issue.repository
        },
        set (val: any) {
          this.setRepository(val)
        }
      }
    },

    methods: {
      ...mapMutations('issue', {
        setRepository: 'SET_REPOSITORY'
      })
    }
  })
</script>
