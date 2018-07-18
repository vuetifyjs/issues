import { push, set } from '@/utils/vuex'

export default {
  PUSH_OS: push('os'),
  SET_BROWSERS: set('browsers'),
  SET_OS: set('os'),
  SET_REPOSITORY: set('repository'),
  SET_TYPE: set('type'),
  SET_TITLE: set('title'),
  SET_VUETIFY_VERSION: set('vuetifyVersion'),
  SET_VUE_VERSION: set('vueVersion'),
}
