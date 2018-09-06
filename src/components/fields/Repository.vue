<template>
  <div>
    <helpers-input-header>For Repository</helpers-input-header>
    <v-autocomplete
      v-model="model"
      :items="getRepositories"
      autocorrect="off"
      clearable
      item-text="full_name"
      item-value="full_name"
      label="Repository"
      return-object
      spellcheck="false"
      box
    />
  </div>
</template>

<script>
// Utilities
  import { mapGetters, mapMutations } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    computed: {
      ...mapGetters('api', ['getRepositories']),
      model: {
        get () {
          return this.$store.state.issue.repository
        },
        set (val) {
          this.setRepository(val)
        }
      }
    },

    methods: {
      ...mapMutations('issue', {
        setRepository: 'SET_REPOSITORY'
      })
    }
  })
</script>
