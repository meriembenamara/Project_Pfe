// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    selectedImage: null
  },
  mutations: {
    SET_SELECTED_IMAGE(state, image) {
      state.selectedImage = image;
    }
  },
  actions: {
    setSelectedImage({ commit }, image) {
      commit('SET_SELECTED_IMAGE', image);
    }
  }
});

export default store;
