<template>
  <v-content>
    <v-container
      fluid
      pa-0
    >
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-container>
  </v-content>
</template>

<script>
  // Types
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      lang: {
        type: String,
        default: 'en'
      }
    },

    metaInfo: {
      titleTemplate: '%s'
    }
  })
</script>
