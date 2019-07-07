import ToyService from "../services/ToyService";
import moment from "moment";

export default {
  strict: true,
  state: {
    toys: [],
    filterBy: {
      name: "",
      inStock: null,
      toyType: "all",
      sortBy: "name",
      sortWay: "up"
    }
  },

  getters: {
    toys(state) {
      return state.toys;
    },

    filterBy(state) {
      return state.filterBy;
    },

    toyById: state => id => {
      return state.toys.find(toy => toy._id === id);
    },

    toyTypes(state) {
      if (state.toys) {
        const typesMap = state.toys.reduce((acc, toy) => {
          if (!acc[toy.type]) acc[toy.type] = 0;
          return acc;
        }, {});

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
        }, {});

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
        }, {});

        return toysCountByYear;
      }
    }
  },

  mutations: {
    setToys(state, { filteredToys }) {
      state.toys = filteredToys;
    },

    updateToy(state, { updatedToy }) {
      const idx = state.toys.findIndex(toy => toy._id === updatedToy._id);
      state.toys.splice(idx, 1, updatedToy);
    },

    addToy(state, { addedToy }) {
      state.toys.unshift(addedToy);
    },

    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex(toy => toy._id === toyId);
      state.toys.splice(idx, 1);
    },

    setFilter(state, { filterBy }) {
      state.filterBy = JSON.parse(JSON.stringify(filterBy));
    }
  },

  actions: {
    loadToys(context) {
      context.commit({ type: "setLoadingToys", val: true });
      return ToyService.query(context.state.filterBy).then(filteredToys => {
        context.commit({ type: "setToys", filteredToys });
        context.commit({ type: "setLoadingToys", val: false });
        return filteredToys;
      });
    },

    updateToy(context, { toy }) {
      return ToyService.update(toy).then(updatedToy => {
        context.commit({ type: "updateToy", updatedToy });
        return updatedToy;
      });
    },

    addToy(context, { toy }) {
      return ToyService.add(toy).then(addedToy => {
        context.commit({ type: "addToy", addedToy });
        return addedToy;
      });
    },

    removeToy(context, { toyId }) {
      return ToyService.remove(toyId).then(() => {
        context.commit({ type: "removeToy", toyId });
        return toyId;
      });
    },

    setFilter(context, { filterBy }) {
      context.commit({ type: "setLoadingToys", val: true });
      context.commit({ type: "setFilter", filterBy });
      ToyService.query(filterBy).then(filteredToys => {
        context.commit({ type: "setToys", filteredToys });
        context.commit({ type: "setLoadingToys", val: false });
      });
    },

    changeImg(context, {toyId}) {
      return ToyService.changeImg(toyId).then(updatedToy => {
        context.commit({ type: "updateToy", updatedToy });
        return updatedToy;
      })
    }
  }
};
