<template>
  <v-layout>
    <v-flex xs12 sm6>
      <helpers-input-header>Vuetify Version</helpers-input-header>
      <v-autocomplete
        v-model="vuetifyModel"
        :items="vuetifyVersions"
        background-color="primary lighten-3"
        color="black"
        flat
        label="Version"
        solo
      />
    </v-flex>
    <v-flex xs12 sm6>
      <helpers-input-header>Vue Version</helpers-input-header>
      <v-autocomplete
        v-model="vueModel"
        :items="vueVersions"
        background-color="primary lighten-3"
        color="black"
        flat
        label="Version"
        solo
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  // Libs
  import axios from 'axios'

  // Utilities
  import capitalize from 'lodash/capitalize'

  import {
    mapActions,
    mapMutations,
    mapState
  } from 'vuex'

  // Types
  import { Repository } from '@/types'
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
      ...mapState('api', [
        'vuetifyVersions',
        'vueVersions'
      ]),
      ...mapState('issue', ['repository']),
      vuetifyModel: {
        get (): string {
          return this.$store.state.issue.repositoryVersion
        },
        set (val: any) {
          this.setRepositoryVersion(val)
        }
      },
      repositoryName () {
        return capitalize(this.repository.name)
      },
      vueModel: {
        get (): string {
          return this.$store.state.issue.vueVersion
        },
        set (val: any) {
          this.setVueVersion(val)
        }
      }
    },

    mounted () {
      this.fetchVueVersions()
      this.fetchVuetifyVersions()
    },

    methods: {
      ...mapActions('api', ['fetchVuetifyVersions', 'fetchVueVersions']),
      ...mapMutations('api', {
        setvuetifyVersions: 'SET_VUETIFY_VERSIONS',
      }),
      ...mapMutations('issue', {
        setRepositoryVersion: 'SET_VUETIFY_VERSION',
        setVueVersion: 'SET_VUE_VERSION'
      })
    }
  })
</script>
