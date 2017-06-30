import Vue from 'vue';
import Vuex from 'vuex';
import AppPageStore from '@/pages/AppPage/store';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    AppPage: AppPageStore,
  },
});

export default store;
