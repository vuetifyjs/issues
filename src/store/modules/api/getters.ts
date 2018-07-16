// Types
import { Repository } from '@/fields/Repository.vue'

export default {
  getRepositories (state: any): Repository[] {
    return state.repositories.sort((a: Repository, b: Repository) => {
      if (a.full_name === 'vuetifyjs/vuetify') return -1
      if (a.full_name === 'vuetifyjs/vuetifyjs.com') return -1
      if (b.full_name === 'vuetifyjs/vuetify') return 1
      if (b.full_name === 'vuetifyjs/vuetifyjs.com') return 1

      return a.full_name > b.full_name ? 1 : -1
    })
  },
}
