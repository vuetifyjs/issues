export default {
  hasPreview: (state: any) => {
    return Boolean(
      state.repository &&
        state.vueVersion &&
        state.vuetifyVersion &&
        state.type &&
        state.title &&
        state.os.length > 0 &&
        state.browsers.length > 0
    )
  }
}
