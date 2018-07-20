<template>
  <core-card title="Issue Information">
    <v-form ref="form">
      <v-container grid-list-md>
        <fields-for />

        <fields-repository />

        <v-expand-transition>
          <v-flex
            v-if="!!repository"
            primary-transition
            wrap
            xs12
          >
            <fields-title />

            <forms-issue v-if="isBug" />
          </v-flex>
        </v-expand-transition>
      </v-container>
    </v-form>
    <v-divider />
    <v-card-actions>
      <v-btn
        flat
        @click="clear"
      >
        Clear All
      </v-btn>
      <v-spacer />
      <v-btn
        :disabled="!hasPreview"
        color="primary"
        depressed
        @click="$vuetify.goTo('#preview')"
      >
        Next
      </v-btn>
    </v-card-actions>
  </core-card>
</template>

<script lang="ts">
  // Utilities
  import {
    mapGetters,
    mapMutations,
    mapState
  } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
      ...mapGetters('issue', ['hasPreview']),
      ...mapState('issue', {
        repository: 'repository',
        type: 'type'
      }),

      isBug (): boolean {
        return (
          !!this.repository &&
          this.type === 'Bug'
        )
      }
    },

    methods: {
      ...mapMutations('issue', {
        setType: 'SET_TYPE'
      }),
      clear () {
        this.$refs.form.reset()
        this.$vuetify.goTo(0)
        this.$nextTick(() => {
          this.setType('Bug')
        })
      }
    }
  })
</script>
