import { set } from '@/utils/vuex'

export default {
  SET_DRAWER: set('drawer'),
  SET_SNACKBAR: set('snackbar'),
  TOGGLE_DRAWER: (state: any) => (state.drawer = !state.drawer)
}
