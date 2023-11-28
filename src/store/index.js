import { createStore } from 'vuex'
import { postModule } from './postModule'

export default createStore({
  state: {
    isAuth: false,
    currentMessage: '',
    dialogVisible: false,
    navbarVisible: true,
    size_footer_area: 8,
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
    setCurrentMessage(state, message){
      state.currentMessage = message;
    },
    setDialogVisible(state, a){
      state.dialogVisible = a;
    },
    setNavbarVisible(state, a){
      state.navbarVisible = a;
    },
  },
  actions: {
  },
  modules: {
    post: postModule
  }
})
