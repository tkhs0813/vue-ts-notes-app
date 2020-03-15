import { MutationTree } from 'vuex';
import {
  NoteState, Category, Note,
} from '@/store/types';

const mutation: MutationTree<NoteState> = {
  addCategory: (state, category: Category) => {
    // TODO
  },
  deleteCategory: (state, category: Category) => {
    // TODO
  },
  addNote: (state, note: Note) => {
    // tTODO
  },
  deleteNote: (state, note: Note) => {
    // TODO
  },
};

export default mutation;
