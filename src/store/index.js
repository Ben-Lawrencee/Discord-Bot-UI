import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    client: {
      guilds: [
        {
          id: "0"
        },
        {
          id: "1"
        },
        {
          id: "2"
        },
        {
          id: "3"
        },
      ],
      users: {}
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
