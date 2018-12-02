export const state = () => ({
  selectedIcon: null,
});

export const getters = {
  selectedIcon(state) {
    return state.selectedIcon
  },
};

export const mutations = {
  updateSelectedIcon(state, payload) {
    state.selectedIcon = payload
  },
};

export const actions = {
  updateSelectedIcon({commit}, payload) {
    commit('updateSelectedIcon', payload)
  },
};
