<template>
  <core-card>
    <v-card-text class="pb-0">
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
    </v-card-text>
    <v-divider />
    <v-card-actions class="justify-center">
      <v-btn
        flat
        @click="clear"
      >
        Clear All
      </v-btn>
    </v-card-actions>
  </core-card>
</template>

<script lang="ts">
  // Utilities
  import { mapState } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
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
      clear () {
        this.$refs.form.reset()
      }
    }
  })
</script>
