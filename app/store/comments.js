export const state = () => ({
  comments: [],
  currentComment: "",
});

export const getters = {
  comments(state) {
    return state.comments
  },
  currentComment(state) {
    return state.currentComment
  },
};

export const mutations = {
  updateComments(state, payload) {
    state.comments = payload
  },
  addComment(state, payload) {
    state.comments.push(payload)
  },
  updateCurrentComment(state, payload) {
    state.currentComment = payload
  },
  addMentionToCurrentComment(state, payload) {
    state.currentComment = `@${payload} ${state.currentComment}`
  },
};

export const actions = {
  updateComments({commit}, payload) {
    commit('updateComments', payload)
  },
  addComment({commit}, payload) {
    commit('addComment', payload)
  },
  updateCurrentComment({commit}, payload) {
    commit('updateCurrentComment', payload)
  },
  addMentionToCurrentComment({commit}, payload) {
    commit('addMentionToCurrentComment', payload)
  },
};
