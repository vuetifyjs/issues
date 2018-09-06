<template>
  <div>
    <helpers-input-header>Operating System</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="defaultOs"
      label="Operating System(s)"
      multiple
      box
    />
  </div>
</template>

<script>
// Utilities
  import { mapMutations, mapState } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
      ...mapState('issue', ['defaultOs', 'os']),

      model: {
        get () {
          return this.os
        },
        set (val) {
          this.setOs(val)
        }
      }
    },

    methods: {
      ...mapMutations('issue', {
        setOs: 'SET_OS'
      })
    }
  })
</script>
