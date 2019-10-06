const state = {
  candidates: [{
    'name': 'Test Name',
    'email': 'testmail@gmail.com',
    'skills': ['Angular', 'MySql']
  }]
}

const getters = {}

const actions = {}

const mutations = {
  addCandidate (state, candidate) {
    state.candidates.push(candidate)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
