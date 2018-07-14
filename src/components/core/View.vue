<template>
  <v-content>
    <v-container
      fill-height
      fluid
    >
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    props: {
      lang: {
        type: String,
        default: 'en'
      }
    },

    metaInfo: {
      titleTemplate: '%s — Application Name'
    }
  }
</script>
