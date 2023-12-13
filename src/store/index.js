import { createStore } from 'vuex'
import { postModule } from './postModule'

export default createStore({
  state: {
    isAuth: false,
    currentMessage: '',
    dialogVisible: false,
    navbarVisible: true,
    messagesBot: [],
    messagesHuman:[],
    humanAssistantName: 'какой-то чел',
    sizeFooterArea: 1,
    chatBodyHeight: 84,
    chatFooterHeight: 8,
    messangerMode: {
      human: false,
      bot: true
  }
  },
  getters: {
    getMessageModeName(state) {
      if (state.messangerMode.bot) {
          return 'Бот'
      }
      else {
          return state.humanAssistantName
      }
  },
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
    
    changeModeMessange(state) {
      state.messangerMode.human = !state.messangerMode.human;
      state.messangerMode.bot = !state.messangerMode.bot;
      console.log(state.messangerMode.human, state.messangerMode.bot)
    },
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
