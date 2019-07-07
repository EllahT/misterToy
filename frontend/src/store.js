import Vue from "vue";
import Vuex from "vuex";
import UtilService from "./services/UtilService";
import UserStore from "./modules/UserStore.js";
import ToyStore from "./modules/ToyStore.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showChat: false,
    chats: [{ _id: "cht1", txt: "Support: Hello, what's on your mind?" }],
    loadingChatLine: false,
    loadingToys: false
  },

  getters: {
    showChat(state) {
      return state.showChat;
    },

    chats(state) {
      return state.chats;
    },

    loadingChatLine(state) {
      return state.loadingChatLine;
    },

    loadingToys(state) {
      return state.loadingToys;
    }
  },

  mutations: {
    toggleShowChat(state) {
      state.showChat = !state.showChat;
    },

    addChatLine(state, { chatLine }) {
      state.chats.push(chatLine);
    },

    toggleLoadingChatLine(state) {
      state.loadingChatLine = !state.loadingChatLine;
    },

    setLoadingToys(state, { val }) {
      state.loadingToys = val;
    }
  },

  actions: {
    toggleChat(context) {
      context.commit({ type: "toggleShowChat" });
    },

    addChatLine(context, { chatLine }) {
      context.commit({
        type: "addChatLine",
        chatLine: { txt: "User: " + chatLine, _id: UtilService.makeId() }
      });
      context.commit({ type: "toggleLoadingChatLine" });
      setTimeout(() => {
        context.commit({
          type: "addChatLine",
          chatLine: { txt: "Support: Sure thing honey", _id: UtilService.makeId() }
        });
        context.commit({ type: "toggleLoadingChatLine" });
      }, 1300);
    }
  },

  modules: {
    ToyStore,
    UserStore
  }
});
