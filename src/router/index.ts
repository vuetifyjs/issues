import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import View from '@/components/core/View.vue'

// Function to create routes
// Is default lazy but can be changed
function route (path: string, name: string) {
  return {
    name,
    path,
    component: (resolve: any) => import(
      /* webpackChunkName: "views" */
      `@/views/${name}.vue`
    ).then(resolve)
  }
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/:lang',
      component: View,
      children: [
        route('', 'Home'),
        route('settings', 'Settings')
      ]
    },
    // Global redirect for 404
    { path: '*', redirect: '/en' }
  ]
})

Vue.use(Meta)

export default router
