<template>
  <v-flex>
    <helpers-input-header>What is your proposed solution?</helpers-input-header>
    <v-textarea
      v-model="model"
      label="And we can solve it by..."
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
      ...mapState('issue', ['solution']),
      model: {
        get () {
          return this.solution
        },
        set (val) {
          this.setSolution(val)
        }
      }
    },

    methods: {
      ...mapMutations('issue', ['setSolution'])
    }
  })
</script>
