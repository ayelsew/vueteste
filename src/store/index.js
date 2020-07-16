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
      let personagem = state.personagens[index]
      personagem['selected'] = status
      state.personagens = [
        ...state.personagens.filter((item, i) => i !== index),
        personagem
      ]

    },
    REMOVE_PERSONAGEM(state, arrayIndex = []) {
      state.personagens = [
        ...state.personagens.filter((item, i) => !(arrayIndex.includes(i)))
      ]
    }
  },
  actions: {
    setSelectedPersonagem({ commit }, { index, status }) {
      commit('SET_SELECTED_PERSONAGEM', { index, status });
    },
    setPersonagens({ commit }, data) {
      commit('SAVE_PERSONAGENS', data);
    },
    rmPersonagenByIndex({ commit }, arrayIndex) {
      commit('REMOVE_PERSONAGEM', arrayIndex);
    }
  },
  getters: {
    sortPersonagens(state) {
      return state.personagens.sort((a, b) => (
        a.name.localeCompare(b.name)
      ))
    },
    selectedPersonagensByIndex(state) {
      let selected = [];
      state.personagens.forEach((personagem, index) => {
        if (personagem.selected === true) {
          selected.push(index)
        }
      })

      return selected;
    },
  },
  modules: {
  }
})
