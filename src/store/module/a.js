export const moduleA = {
    namespaced: true,
  state: () => ({ a: 'moduleA' , countA: 0 }),
  mutations: {
    increment (state, n=1) {
        state.countA += n
      }
  },
  actions: {},
  getters: {},
};
