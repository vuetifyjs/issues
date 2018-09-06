<template>
  <v-layout>
    <v-flex xs12 sm6>
      <helpers-input-header>Vuetify Version</helpers-input-header>
      <v-autocomplete
        v-model="vuetifyModel"
        :items="vuetifyVersions"
        flat
        label="Version"
        box
      />
    </v-flex>
    <v-flex xs12 sm6>
      <helpers-input-header>Vue Version</helpers-input-header>
      <v-autocomplete
        v-model="vueModel"
        :items="vueVersions"
        flat
        label="Version"
        box
      />
    </v-flex>
  </v-layout>
</template>

<script>
  // Utilities
  import capitalize from 'lodash/capitalize'

  import { mapMutations, mapState } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
      ...mapState('api', ['vuetifyVersions', 'vueVersions']),
      ...mapState('issue', ['repository']),
      vuetifyModel: {
        get () {
          return this.$store.state.issue.repositoryVersion
        },
        set (val) {
          this.setRepositoryVersion(val)
        }
      },
      repositoryName () {
        return capitalize(this.repository.name)
      },
      vueModel: {
        get () {
          return this.$store.state.issue.vueVersion
        },
        set (val) {
          this.setVueVersion(val)
        }
      }
    },

    methods: {
      ...mapMutations('api', {
        setvuetifyVersions: 'SET_VUETIFY_VERSIONS'
      }),
      ...mapMutations('issue', {
        setRepositoryVersion: 'SET_VUETIFY_VERSION',
        setVueVersion: 'SET_VUE_VERSION'
      })
    }
  })
</script>
