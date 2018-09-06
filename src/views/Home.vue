<template>
  <v-layout
    align-start
    justify-center
    wrap
  >
    <v-flex xs12>
      <info-cta />
    </v-flex>

    <v-flex xs7>
      <v-fade-transition group>
        <issue-card key="form" />

        <component
          v-if="hasPreview"
          id="preview"
          key="card"
          :is="component"
        />
      </v-fade-transition>
    </v-flex>
  </v-layout>
</template>

<script>
// Utilities
  import { mapGetters, mapState } from 'vuex'

  export default {
    data: () => ({
      timeout: null
    }),

    computed: {
      ...mapGetters('issue', ['hasPreview']),
      ...mapState('issue', [
        'repository',
        'type',
        'vueVersion',
        'vuetifyVersion'
      ]),
      component () {
        return `${this.type}-card`
      }
    },

    watch: {
      hasPreview (val) {
        clearTimeout(this.timeout)

        if (!val) return

        this.timeout = setTimeout(() => {
          this.$vuetify.goTo('#preview')
        }, 300)
      }
    }
  }
</script>
