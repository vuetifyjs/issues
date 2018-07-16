// Libs
import axios from 'axios'

const Api = axios.create({
  baseURL: '/api'
})

export default {
  fetchRepositories: ({ commit }: any): Promise<any> => {
    return Api.get('repositories')
      .then(res => commit(
        'SET_REPOSITORIES',
        res.data.repositories
      ))
      .catch(err => {
        console.log(err)

        commit('app/SET_SNACKBAR', {
          type: 'error',
          msg: 'Unable to fetch Repositories'
        }, { root: true })
      })
  },
  fetchVersions: ({ commit }: any, repository: string): any => {
    return Api.get(`versions/${repository}`)
      .then(res => res)
      .catch(err => {
        console.log(err)

        commit('app/SET_SNACKBAR', {
          type: 'error',
          msg: `Unable to fetch versions for ${repository}`
        }, { root: true })
      })
  },
  fetchVueVersions: ({ commit, dispatch }: any): Promise<any> => {
    return dispatch('fetchVersions', 'vue')
      .then((res: any) => commit('SET_VUE_VERSIONS', res.data.versions))
  },
  fetchVuetifyVersions: ({ commit, dispatch }: any): Promise<any> => {
    return dispatch('fetchVersions', 'vuetify')
      .then((res: any) => commit('SET_VUETIFY_VERSIONS', res.data.versions))
  },
}
