import UserService from "../services/UserService";

export default {
  strict: true,

  state: {
    userData: {
      _id: "usr1",
      name: "Puki Levi",
      gender: {
        type: "female",
        display: "🙋‍♀️ Female"
      },
      time: {
        hours: 6,
        minutes: 10,
        AMPM: "pm"
      },
      color: null,
      email: null
    },
    genders: [
      {
        type: "female",
        display: "🙋‍♀️ Female"
      },
      {
        type: "male",
        display: "🙋‍♂️ Male"
      },
      {
        type: "unknown",
        display: "I'd rather not say"
      }
    ],
    colors: []
  },

  getters: {
    userData(state) {
      return state.userData;
    },

    genders(state) {
      return state.genders;
    },

    colors(state) {
      return state.colors;
    }
  },

  mutations: {
    setUser(state, { userData }) {
      state.userData = JSON.parse(JSON.stringify(userData));
    },

    setColors(state, { colors }) {
      state.colors = colors;
    }
  },

  actions: {
    loadUserData(context) {
      return UserService.getById("usr1").then(userData => {
        context.commit({ type: "setUser", userData });
        return userData;
      });
    },

    updateUserData(context, { userData }) {
      return UserService.update(userData).then(() => {
        context.commit({ type: "setUser", userData });
        return userData;
      });
    },

    loadColors(context) {
      UserService.getPreSetColors().then(colors => {
        context.commit({ type: "setColors", colors });
      });
    },

    changeColors(context) {
      UserService.changeColors().then(colors => {
        context.commit({ type: "setColors", colors });
      });
    }
  }
};
