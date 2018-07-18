import { Repository, VersionResponse } from '@/types'
// Libs
import axios, { AxiosResponse } from 'axios'

const Api = axios.create({
  baseURL: '/api'
})

export default {
  fetchRepositories: ({ commit }: any): Promise<any> => {
    return Api.get('repositories')
      .then((res: AxiosResponse) => commit(
        'SET_REPOSITORIES',
        res.data.repositories as Repository[]
      ))
      .catch((err: AxiosResponse) => {
        console.log(err)

        commit('app/SET_SNACKBAR', {
          type: 'error',
          msg: 'Unable to fetch Repositories'
        }, { root: true })
      })
  },
  fetchVersions: ({ commit }: any, repository: string): any => {
    return Api.get(`versions/${repository}`)
      .then((res: AxiosResponse) => res)
      .catch((err: AxiosResponse) => {
        console.log(err)

        commit('app/SET_SNACKBAR', {
          type: 'error',
          msg: `Unable to fetch versions for ${repository}`
        }, { root: true })
      })
  },
  fetchVueVersions: ({ commit, dispatch }: any): Promise<void> => {
    return dispatch('fetchVersions', 'vue')
      .then((res: AxiosResponse) => {
        const { versions }: VersionResponse = res.data

        commit('SET_VUE_VERSIONS', versions)
      })
  },
  fetchVuetifyVersions: ({ commit, dispatch }: any): Promise<void> => {
    return dispatch('fetchVersions', 'vuetify')
      .then((res: AxiosResponse) => {
        const { versions }: VersionResponse = res.data

        commit('SET_VUETIFY_VERSIONS', versions)
      })
  },
}
