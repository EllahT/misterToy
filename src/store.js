import Vue from 'vue';
import Vuex from 'vuex';
import ToyService from './services/ToyService';
import UtilService from './services/UtilService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toys: [],
    filterBy: {
      name: '',
      stockStatus: true,
      toyType: 'all',
      sort: {
        sortBy: 'name',
        way: '+'
      }
    }
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
      const typesMap = state.toys.reduce((acc, toy) => {
          if (!acc[toy.type]) acc[toy.type] = 0;
          return acc;
      }, {})

      return Object.keys(typesMap);
    }
  },

  mutations: {
    setToys(state, {toys}) {
      state.toys = toys;
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
    }

  },
  actions: {
    loadToys(context) {
      ToyService.query()
      .then(toys => {
        context.commit({type: 'setToys', toys})
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
      toy._id = UtilService.makeId();
      toy.createdAt = new Date().getTime();
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
      context.commit({type: 'setFilter', filterBy})
      ToyService.query(filterBy)
      .then((filteredToys) => {
        context.commit({type: 'setToys', filteredToys})
      })

    }
  },
});
