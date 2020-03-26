/* eslint-disable class-methods-use-this */
// @ts-nocheck
import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';
import mock from '@/mock';
import { Category, Note } from '../types';


@Module({ namespaced: true, name: 'notes' })
class Notes extends VuexModule {
  public categories: Category[] = [];

  public get categoryById(): Category {
    // TODO
  }

  public get note(): Note {
    // TODO
  }

  public get noteById(): Note {
    // TODO
  }

  @Mutation
  addCategory(category: Category) {
    this.categories.push(category);
  }

  @Mutation
  updateCategory(categories: Category[]) {
    this.categories = categories;
  }

  @Mutation
  removeCategory(category: Category) {
    this.categories = this.categories.filter((c) => c.id !== category.id);
  }

  @Mutation
  addNote(note: Note) {
    // TODO
  }

  @Mutation
  removeNote(note: Note) {
    // TODO
  }

  @Action
  fetchData() {
    // 最初にデータ全部とってきて入れる
    this.context.commit('updateCateogry', mock);
  }

  @Action
  createCategory(category: Category) {
    this.context.commit('addCategory', categorhis.categories.push(newCategory));
  }

  @Action
  deleteCategory(category: Category) {
    // TODO
    this.context.commit('removeCategory', category);
  }

  @Action
  createNote(note: Note) {
    // TODO
  }

  @Action
  deleteNote(note: Note) {
    // TODO
  }
}

export default getModule(Notes);
