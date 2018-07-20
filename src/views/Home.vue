<template>
  <v-layout
    align-start
    justify-center
    wrap
  >
    <v-flex xs12>
      <info-cta />
    </v-flex>

    <transition-group
      name="slide-y-transition"
      tag="v-flex"
      class="xs9"
    >
      <form-card key="form" />

      <component
        v-if="hasPreview"
        :is="component"
        id="preview"
        key="card"
      />
    </transition-group>
  </v-layout>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapState
  } from 'vuex'

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
