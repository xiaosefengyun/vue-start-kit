import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  msg: 'vue-start-kit',
  count: 0,
};

const AppPageStore = {
  state,
  mutations,
  actions,
  getters,
};
export default AppPageStore;
