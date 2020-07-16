import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiswurl: 'https://swapi.dev/api/',
    personagens: [],
  },
  mutations: {
    SAVE_PERSONAGENS(state, data) {
      state.personagens = state.personagens.concat(data)
    },
    SET_SELECTED_PERSONAGEM(state, { index, status }) {
      state.personagens[index]['selected'] = status
    },
    REMOVE_PERSONAGEM(state, index) {
      state.personagens.splice(index, 1)
    }
  },
  actions: {
    setSelectedPersonagem({ commit }, { index, status }) {
      commit('SET_SELECTED_PERSONAGEM', { index, status });
    },
    setPersonagens({ commit }, data) {
      commit('SAVE_PERSONAGENS', data);
    },
    rmPersonagenByIndex({ commit }, index) {
      commit('REMOVE_PERSONAGEM', index);
    }
  },
  getters: {
    sortPersonagens(state) {
      return state.personagens.sort((a, b) => (
        a.name.localeCompare(b.name)
      ))
    }
  },
  modules: {
  }
})
