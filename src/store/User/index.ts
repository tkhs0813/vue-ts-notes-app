/* eslint-disable class-methods-use-this */
// @ts-nocheck
import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { Category, Note } from '../types';


@Module({
  dynamic: true,
  namespaced: true,
  name: 'Users',
  store,
})
class Users extends VuexModule {
  public user = {};


  public get isLogged(): boolean {
    return state.user !== null;
  }

  @Mutation
  setUser(user) {
    this.user = user;
  }

  @Action({ commit: 'setUser' })
  setUser(user) {
    return user;
  }
}

export default getModule(Users);
