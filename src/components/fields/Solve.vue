<template>
  <v-flex>
    <helpers-input-header>What problem does this feature solve?</helpers-input-header>
    <v-textarea
      v-model="model"
      label="My problem is..."
      box
    />
  </v-flex>
</template>

<script>
// Utilities
  import { mapMutations, mapState } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
      ...mapState('feature', ['solve']),
      model: {
        get () {
          return this.solve
        },
        set (val) {
          this.setSolve(val)
        }
      }
    },

    methods: {
      ...mapMutations('feature', ['setSolve'])
    }
  })
</script>
