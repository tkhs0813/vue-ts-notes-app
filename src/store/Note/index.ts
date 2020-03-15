import { Module } from 'vuex';
import { NoteState, RootState } from '@/store/types';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state: NoteState = {
  categories: [],
};

const notes: Module<NoteState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default notes;
