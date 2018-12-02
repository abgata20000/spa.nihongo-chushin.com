const ROOMS_URL = "/rooms";

export const state = () => ({
  rooms: [],
});

export const getters = {
  rooms(state) {
    return state.rooms
  },
};

export const mutations = {
  updateRooms(state, payload) {
    state.rooms = payload
  },
};

export const actions = {
  updateRooms({commit}, payload) {
    commit('updateRooms', payload)
  },
  async fetchRooms({dispatch}, payload) {
    const rooms = await this.$axios.$get(ROOMS_URL);
    dispatch('updateRooms', rooms)
  },
};
