import UserService from "../services/UserService";

export default {
  strict: true,

  state: {
    users: [],
    loggedUser: null,
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
      state.loggedUser = null;
    },

    updateUser(state, {updatedUser}) {
      const idx = state.users.findIndex(user => user._id === updatedUser._id);
      state.users.splice(idx, 1, updatedUser);
    },

    addUser(state, {addedUser}) {
      state.users.push(addedUser);
    },

    removeUser(state, {userId}) {
      const idx = state.users.findIndex(user => user._id === userId);
      state.users.splice(idx, 1);
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

    loginUser(context, {email}) {
      return UserService.login(email).then((user) => {
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

    updateUser(context, { user }) {
      return UserService.update(user).then((updatedUser) => {
        context.commit({ type: 'updateUser', updatedUser });
        return updatedUser;
      });
    },

    addUser(context, {user}) {
      return UserService.add(user).then((addedUser) => {
        context.commit({type: 'addUser', addedUser});
        return addedUser;
      })
    },

    removeUser(context, {userId}) {
      return UserService.remove(userId).then(() => {
        context.commit({type: 'removeUser', userId});
        return {};
      })
    },

    loadColors(context) {
      UserService.getPreSetColors().then(colors => {
        context.commit({ type: 'setColors', colors });
      });
    },

    changeColors(context) {
      UserService.changeColors().then(colors => {
        context.commit({ type: 'setColors', colors });
      });
    }
  }
};
