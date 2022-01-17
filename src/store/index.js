import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({
    gallery: state.gallery
  })
});

let clientId = process.env.ACCESS_KEY;

export default new Vuex.Store({
  state: {
    gallery: [],
    currentTerm: ""
  },
  plugins: [vuexLocal.plugin],
  getters: {
    getCurTerm(state) {
      return state.currentTerm;
    },
    getGallery(state) {
      return state.gallery;
    }
  },
  mutations: {
    createGallery(state, list) {
      state.gallery = list;
    },
    searchedGallery(state, list) {
      state.gallery = list;
    }
  },
  actions: {
    async createGallery({ commit }) {
      try {
        // let response = await axios.get(
        //   `https://api.unsplash.com/search/photos?page=1&per_page=8&order_by=latest&query=african&client_id=${clientId}`
        // );
        let response = await axios.get(
          `https://api.unsplash.com/photos/random?count=9&query=africa&order_by=latest&client_id=${clientId}`
        );
        console.log(response.data);
        commit("createGallery", response.data);
      } catch (error) {
        console.log(error);
        commit("createGallery", []);
      }
    },
    async searchGallery({ state, commit }, criteria) {
      try {
        let response = await axios.get(`
        https://api.unsplash.com/search/photos?page=1&order_by=latest&query=${criteria}&client_id=${clientId}
        `);
        let allItems = Object.keys(response.data.results);
        state.currentTerm = criteria;
        commit("searchedGallery", allBreeds);
      } catch (error) {
        console.log(error);
        commit("searchedGallery", []);
      }
    }
  },
  modules: {}
});
