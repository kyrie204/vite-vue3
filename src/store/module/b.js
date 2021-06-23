export const moduleB = {
    namespaced: true,
    state: () => ({ moduleB: 'moduleB' , countB: 0 }),
    mutations: {
      increment (state, n=1) {
          state.countB += n
        }
    },
    actions: {  },
    getters: {  }
  }