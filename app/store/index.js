const LOGIN_PATH = "/sessions";

export const state = () => ({
  isHeaderMenuActive: false,
  isLoggedIn: false,
  userSession: null
});

export const getters = {
  isHeaderMenuActive(state) {
    return state.isHeaderMenuActive
  },
  isLoggedIn(state) {
    return state.isLoggedIn
  },
  userSession(state) {
    return state.userSession
  },
};

export const mutations = {
  updateIsHeaderMenuActive(state, payload) {
    state.isHeaderMenuActive = payload
  },
  updateIsLoggedIn(state, payload) {
    state.isLoggedIn = payload
  },
  updateUserSession(state, payload) {
    state.userSession = payload
  },
};

export const actions = {
  updateIsHeaderMenuActive({commit}, payload) {
    commit('updateIsHeaderMenuActive', payload)
  },
  updateIsLoggedIn({commit}, payload) {
    commit('updateIsLoggedIn', payload)
  },
  updateUserSession({commit}, payload) {
    commit('updateUserSession', payload)
  },
  loggedIn({commit}, payload) {
    commit('updateUserSession', payload);
    commit('updateIsLoggedIn', true);
  },
  loggedOut({commit}, payload) {
    commit('updateUserSession', null);
    commit('updateIsLoggedIn', false);
  },
  async fetchUserSession({dispatch}, payload) {
    const userSession = await this.$axios.$get(LOGIN_PATH);
    dispatch('loggedIn', userSession);
  }
};
