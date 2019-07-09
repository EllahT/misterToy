import UserService from "../services/UserService";

export default {
  strict: true,

  state: {
    users: [],
    loggedUser: {},
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
    users(state) {
      return state.users;
    },

    userById: state => id => {
      return state.users.find(user => user._id === id);
    },

    loggedUser(state) {
      return state.loggedUser;
    },

    genders(state) {
      return state.genders;
    },

    colors(state) {
      return state.colors;
    }
  },

  mutations: {
    setLoggedUser(state, {user}) {
      state.loggedUser = user;
    },

    setUsers(state, {users}) {
      state.users = users;
    },

    clearLoggedUser(state) {
      state.loggedUser = {};
    },

    updateUser(state, {updatedUser}) {
      const idx = state.users.findIndex(user => user._id === updatedUser._id);
      state.users.splice(idx, 1, updatedUser);
    },

    setColors(state, { colors }) {
      state.colors = colors;
    }
  },

  actions: {
    loadUsers(context) {
      return UserService.query()
        .then(users => {
        context.commit({ type: "setUsers", users });
        return users;
      });
    },

    loginUser(context, {username}) {
      return UserService.login(username).then((user) => {
        context.commit({type: 'setLoggedUser', user});
        return user;
      })
    },

    logout(context) {
      return UserService.logout().then(() => {
        context.commit({type: 'clearLoggedUser'});
        return {};
      })
    },

    updateUserData(context, { userData }) {
      return UserService.update(userData).then(() => {
        context.commit({ type: "updateUser", userData });
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
