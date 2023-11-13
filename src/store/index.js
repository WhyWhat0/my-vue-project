import { createStore } from 'vuex'
import { postModule } from './postModule'

export default createStore({
  state: {
    isAuth: false,
  },
  getters: {
    myTime(state) {
      const today = new Date();
      let hours = today.getHours();
      let minuets = today.getMinutes();
      const formattedToday = hours + ':' + minuets;
      return formattedToday;
    },
    getAuthInfo(state){
      return state.isAuth;
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    post: postModule
  }
})
