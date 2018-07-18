<template>
  <v-layout
    align-start
    justify-center
    wrap
  >
    <info-cta />

    <v-flex xs12 md4 mx-4>
      <form-card />
    </v-flex>

    <v-flex xs12 md4 mx-4>
      <core-card>
        <v-card-title class="headline grey lighten-4">
          {{ title || 'Preview' }}
        </v-card-title>
        <v-card-text>
          <div class="mb-3">
            <helpers-chip
              icon="package-variant"
              value="Versions and Environment"
            />

            <helpers-option
              :value="vuetifyVersion || 'Pending'"
              title="Vuetify"
            />

            <helpers-option
              :value="vueVersion || 'Pending'"
              title="Vue"
            />

            <helpers-option
              :value="browsers.join(', ')"
              title="Browsers"
            />

            <helpers-option
              :value="os.join(', ')"
              title="OS"
            />
          </div>

          <div class="mb-3">
            <helpers-chip
              icon="step-forward-2"
              value="Reproduction Steps"
            />
          </div>

          <div class="mb-3">
            <helpers-chip
              icon="checkbox-blank"
              value="Expected Behavior"
            />
          </div>

          <div class="mb-3">
            <helpers-chip
              icon="arrange-bring-forward"
              value="Actual Behavior"
            />
          </div>

          <div>
            <helpers-chip
              icon="comment"
              value="Other Comments"
            />
          </div>
        </v-card-text>
      </core-card>
    </v-flex>
  </v-layout>
</template>

<script>
  // Utilities
  import { mapActions, mapState } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    metaInfo: {
      title: 'Vuetify Issue Helper',
      meta: [
        { name: 'description', content: 'Hello World' }
      ]
    },

    computed: {
      ...mapState('issue', [
        'browsers',
        'os',
        'repository',
        'title',
        'type',
        'vuetifyVersion',
        'vueVersion'
      ])
    },

    mounted () {
      this.fetchRepositories()
    },

    methods: {
      ...mapActions('api', ['fetchRepositories'])
    }
  })
</script>
