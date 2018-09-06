<template>
  <div>
    <helpers-input-header>I am submitting a</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="items"
      flat
      label="Report"
      box
    />
  </div>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    data: () => ({
      items: ['Bug', 'Feature Request']
    }),

    computed: {
      model: {
        get () {
          return this.$store.state.issue.type
        },
        set (val) {
          this.setType(val)
        }
      }
    },

    methods: {
      ...mapMutations('issue', {
        setType: 'SET_TYPE'
      })
    }
  })
</script>
