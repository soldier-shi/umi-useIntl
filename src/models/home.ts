export default {
  namespace: 'home',
  state: {
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
  }
}
