// Polyfills
import '@babel/polyfill'

// Libs
import Vue from 'vue'

// Plugins
import '@/plugins/bootstrap'
import '@/plugins/vuetify'
import '@/components'

// Application
import App from './App.vue'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
