import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  msg: 'vue-start-kit',
};

const AppPageStore = {
  state,
  mutations,
  actions,
  getters,
};
export default AppPageStore;
