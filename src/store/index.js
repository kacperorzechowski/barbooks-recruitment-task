import Vue from 'vue'
import Vuex from 'vuex'
import candidates from './modules/candidates'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: true,
  modules: {
    candidates
  }
})

export default store
