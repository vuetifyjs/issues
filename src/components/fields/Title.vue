<template>
  <v-flex>
    <helpers-input-header>Issue Title</helpers-input-header>
    <v-text-field
      v-model="model"
      label="Title"
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
      ...mapState('issue', ['title']),
      model: {
        get () {
          return this.title
        },
        set (val) {
          this.setTitle(val)
        }
      }
    },

    methods: {
      ...mapMutations('issue', {
        setTitle: 'setTitle'
      })
    }
  })
</script>
