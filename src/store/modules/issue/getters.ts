export default {
  hasPreview: (state: any) => {
    return Boolean(
      state.repository &&
      state.vueVersion &&
      state.vuetifyVersion
    )
  }
}
