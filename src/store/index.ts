import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import notes from './Note';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  modules: {
    notes,
  },
};

export default new Vuex.Store<RootState>(store);
