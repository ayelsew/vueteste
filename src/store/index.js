import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personagens: []
  },
  mutations: {
    savePersonganes(state, data) {
      state.personagens = state.personagens.concat(data)
    },
    rmPersonagem(state, index) {
      state.personagens.splice(index, 1)
    }
  },
  actions: {
    setPersonagens({ commit }, data) {
      commit('savePersonganes', data)
    },
    rmPersonagenByIndex({ commit }, index) {
      commit('rmPersonagem', index)
    }
  },
  modules: {
  }
})
