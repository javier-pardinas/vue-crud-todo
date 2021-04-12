import Vue from 'vue'
import Vuex from 'vuex'

//MODULES
import todos from '../modules/todos';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos
  }
})
