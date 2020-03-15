import { ActionTree } from 'vuex';
import {
  NoteState, RootState, Note, Category,
} from '../types';

const actions: ActionTree<NoteState, RootState> = {
  addCategory: async (store, category: Category) => {
    // TODO
  },
  deleteCategory: async (store, category: Category) => {
    // TODO
  },
  addNote: async (store, note: Note) => {
    // TODO
  },
  deleteNote: async (store, note: Note) => {
    // TODO
  },
};

export default actions;
