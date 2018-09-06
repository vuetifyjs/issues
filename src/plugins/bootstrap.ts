import Vue from 'vue'

Vue.mixin(
  Vue.extend({
    computed: {
      snackbar$ () {
        return {
          default: (m: string, t: number) => this.message$('', m, t),
          error: (m: string, t: number) => this.message$('error', m, t),
          info: (m: string, t: number) => this.message$('info', m, t),
          success: (m: string, t: number) => this.message$('success', m, t),
          warning: (m: string, t: number) => this.message$('warning', m, t)
        }
      }
    },

    methods: {
      message$ (type: string, msg: string, timeout: number = 6000) {
        this.$store.commit('app/SET_SNACKBAR', {
          type,
          msg,
          timeout
        })
      }
    }
  })
)
