<template>
  <v-card
    :style="style"
    class="elevation-20"
  >
    <v-card-title class="headline">
      {{ title }}
      <slot name="actions" />
    </v-card-title>
    <slot />
  </v-card>
</template>

<script>
// Types
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      title: String
    },

    computed: {
      style () {
        return {
          marginBottom: '156px',
          marginTop: '-96px',
          position: 'relative'
        }
      }
    }
  })
</script>
