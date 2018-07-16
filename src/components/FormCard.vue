<template>
  <v-flex
    px-2
    xs12 sm8 md6
    style="margin-top: -32px; position: relative;"
  >
    <v-card
      class="elevation-24 pa-3"
    >
      <v-card-title
        class="title"
        primary-title
      >Issue Helper</v-card-title>
      <v-form>
        <v-container>
          <fields-for />

          <fields-repository />

          <fields-title />

          <forms-issue v-if="isBug" />
        </v-container>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script lang="ts">
  // Utilities
  import { mapState } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({


    computed: {
      ...mapState('issue', ['repository', 'type']),
      isBug () {
        return (
          !!this.repository &&
          this.type === 'Bug'
        )
      }
    },
  })
</script>
