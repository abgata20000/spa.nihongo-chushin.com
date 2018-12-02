export const state = () => ({
  isHeaderMenuActive: false,
});

export const getters = {
  isHeaderMenuActive(state) {
    return state.isHeaderMenuActive
  },
};

export const mutations = {
  updateIsHeaderMenuActive(state, payload) {
    state.isHeaderMenuActive = payload
  }
};

export const actions = {
  updateIsHeaderMenuActive({commit}, payload) {
    commit('updateIsHeaderMenuActive', payload)
  }
};
