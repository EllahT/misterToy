import Vue from 'vue';
import Vuex from 'vuex';
import ToyService from './services/ToyService';
import UtilService from './services/UtilService';
import UserService from './services/UserService';
import moment from 'moment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toys: [],
    filterBy: {
      name: '',
      inStock: null,
      toyType: 'all',
      sortBy: 'name',
      sortWay: 'up'
    },
    showChat: false,
    chats: [{_id: 'cht1', txt:'Support: Hello, what\'s on your mind?'}],
    loadingChatLine: false,
    loadingToys: false,
    userData: {
      _id: 'usr1', 
      name: 'Puki Levi', 
      gender:{
        type: 'female', 
        display: '🙋‍♀️ Female'
      }, 
      time: {
        hours: 6,
        minutes: 10,
        AMPM: 'pm'
      }, 
      color: null,
      email: null
    },
    genders: [
              {
                type: 'female', 
                display: '🙋‍♀️ Female'
              },
              {
                type: 'male', 
                display: '🙋‍♂️ Male'
              },
              {
                type: 'unknown', 
                display: 'I\'d rather not say'
              }
          ],
    colors: [],
  },

  getters: {
    toys(state) {
      return state.toys;
    },

    filterBy(state) {
      return state.filterBy;
    },

    toyById: (state) => (id) => {
      return state.toys.find(toy => toy._id === id); 
    },

    toyTypes(state) {
      if (state.toys) {
        const typesMap = state.toys.reduce((acc, toy) => {
          if (!acc[toy.type]) acc[toy.type] = 0;
          return acc;
      }, {})

      return Object.keys(typesMap);
      }

      return [];
    },

    toyTypesAndPrices(state) {
      if (state.toys) {
        const typesAndPriceMap = state.toys.reduce((acc, toy) => {
          if (!acc[toy.type]) acc[toy.type] = JSON.parse(toy.price);
          else acc[toy.type] += JSON.parse(toy.price);
          return acc;
      }, {})

      return typesAndPriceMap;
      }

      return [];
    },

    toysCountByYear(state) {
      if (state.toys) {
        const toysCountByYear = state.toys.reduce((acc, toy) => {
          if (!acc[moment(toy.createdAt).year()]) acc[moment(toy.createdAt).year()] = 1;
          else acc[moment(toy.createdAt).year()]++;
          return acc;
        }, {})

        return toysCountByYear;
      }
    },

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
    },

    userData(state) {
      return state.userData;
    },

    genders(state) {
      return state.genders;
    },

    colors (state) {
      return state.colors;
    }
  },

  mutations: {
    setToys(state, {filteredToys}) {
      state.toys = filteredToys;
    },

    updateToy(state, {updatedToy}) {
      const idx = state.toys.findIndex(toy => toy._id === updatedToy._id);
      state.toys.splice(idx, 1, updatedToy);
    },

    addToy(state, {addedToy}) {
      state.toys.unshift(addedToy);
    },

    removeToy(state, {toyId}) {
      const idx = state.toys.findIndex(toy => toy._id === toyId);
      state.toys.splice(idx, 1);
    },

    setFilter(state, {filterBy}) {
      state.filterBy = JSON.parse(JSON.stringify(filterBy));
    },

    toggleShowChat(state) {
      state.showChat = !state.showChat;
    },

    addChatLine(state, {chatLine}) {
      state.chats.push(chatLine);      
    },

    toggleLoadingChatLine(state) {
      state.loadingChatLine = !state.loadingChatLine;
    },

    setLoadingToys(state, {val}) {
      state.loadingToys = val;
    },

    setUser(state, {userData}) {
      state.userData = JSON.parse(JSON.stringify(userData));
    },

    setColors(state, {colors}) {
      state.colors = colors;
    }
  },
  actions: {
    loadToys(context) {
      context.commit({type:'setLoadingToys', val: true});
        ToyService.query(context.state.filterBy)
        .then(filteredToys => {
          context.commit({type: 'setToys', filteredToys});
          context.commit({type:'setLoadingToys', val: false});
        })
    },

    updateToy(context, {toy}) {
      return ToyService.update(toy)
      .then(updatedToy => {
        context.commit({type: 'updateToy', updatedToy});
        return updatedToy;
      })
    },

    addToy(context, {toy}) {
      return ToyService.add(toy)
      .then(addedToy => {
        console.log(addedToy)
        context.commit({type: 'addToy', addedToy});
        return addedToy;
      })
    },

    removeToy(context, {toyId}) {
      return ToyService.remove(toyId)
      .then(() => {
        context.commit({type: 'removeToy', toyId});
        return toyId;
      })
    },

    setFilter(context, {filterBy}) {
      context.commit({type:'setLoadingToys', val: true});
      context.commit({type: 'setFilter', filterBy})
      ToyService.query(filterBy)
      .then((filteredToys) => {
        context.commit({type: 'setToys', filteredToys})
        context.commit({type:'setLoadingToys', val: false});
      })
    },

    toggleChat(context) {
      context.commit({type: 'toggleShowChat'})
    },

    addChatLine(context, {chatLine}) {
      context.commit({type: 'addChatLine', chatLine: {txt: 'User: '+chatLine, _id: UtilService.makeId()}})
      context.commit({type: 'toggleLoadingChatLine'})
      setTimeout(()=> {
        context.commit({type: 'addChatLine', chatLine: {txt: 'Support: Sure thing honey', _id: UtilService.makeId()}});
        context.commit({type: 'toggleLoadingChatLine'});
      },1300)
    },

    loadUserData(context) {
      UserService.getById('usr1')
      .then(userData => {
        context.commit({type: 'setUser', userData});
      })
    },

    updateUserData(context, {userData}) {
      UserService.update(userData)
      .then(() => {
        context.commit({type: 'setUser', userData});
      })
    },

    loadColors(context) {
      UserService.getPreSetColors()
      .then(colors => {
        context.commit({type: 'setColors', colors});
      })
    },

    changeColors(context) {
      UserService.changeColors()
      .then(colors => {
        context.commit({type: 'setColors', colors})
      })
    }
  },
});
