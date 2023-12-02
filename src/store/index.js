import { createStore } from 'vuex'
import { postModule } from './postModule'

export default createStore({
  state: {
    isAuth: false,
    currentMessage: '',
    dialogVisible: false,
    navbarVisible: true,
    messages: [],
    sizeFooterArea: 1,
    chatBodyHeight: 84,
    chatFooterHeight: 8,
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
    setChatFooterHeight(state, size){
      state.chatFooterHeight = size
    },
    setChatBodyHeight(state, size){
      state.chatBodyHeight = size
    },
    setSizeFooterArea(state, size){
      state.sizeFooterArea = size
    },
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
