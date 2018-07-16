export const set = (property: string) => {
  return (state: any, payload: any) => (state[property] = payload)
}

export const push = (property: string) => {
  return (state: any, payload: any) => {
    const arr = state[property].slice()

    arr.push(payload)

    state[property] = arr
  }
}
