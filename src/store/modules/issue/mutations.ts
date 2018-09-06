import { push, set } from '@/utils/vuex'

export default {
  PUSH_DEFAULT_BROWSER: push('defaultBrowsers'),
  PUSH_DEFAULT_OS: push('defaultOs'),
  SET_BROWSERS: set('browsers'),
  SET_OS: set('os'),
  SET_REPOSITORY: set('repository'),
  SET_TYPE: set('type'),
  setTitle: set('title'),
  SET_VUETIFY_VERSION: set('vuetifyVersion'),
  SET_VUE_VERSION: set('vueVersion')
}
