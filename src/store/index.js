import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personagens: []
  },
  mutations: {
    SAVE_PERSONAGENS(state, data) {
      state.personagens = state.personagens.concat(data)
    },
    REMOVE_PERSONAGEM(state, index) {
      state.personagens.splice(index, 1)
    }
  },
  actions: {
    setPersonagens({ commit }, data) {
      commit('SAVE_PERSONAGENS', data)
    },
    rmPersonagenByIndex({ commit }, index) {
      commit('REMOVE_PERSONAGEM', index)
    }
  },
  modules: {
  }
})
