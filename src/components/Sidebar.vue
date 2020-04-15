<template>
  <v-navigation-drawer app>
    <v-list nav dense>
      <template v-for="navList in navLists">
        <v-list-item
          v-if="!navList.lists"
          :to="navList.link"
          :key="navList.name"
          @click="tagClick(navList.name)"
        >
          <v-list-item-icon>
            <v-icon>{{ navList.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ navList.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          v-else
          no-action
          :prepend-icon="navList.icon"
          :key="navList.name"
          v-model="navList.active"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ navList.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="list in navList.lists"
            :key="list.name"
            :to="list.link"
            @click="tagClick(list.name)"
          >
            <v-list-item-title>{{ list.name }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import firebase from 'firebase';
// import Login from '@/views/Login.vue';
import noteModle from '@/store/Note';
import createUUID from '../common/uuid';

interface NavList {
  name: string;
  icon: string;
  link?: string;
  lists?: string[];
}

@Component({
  components: {},
})
export default class Main extends Vue {
  defaultNavList: NavList[] = [
    {
      name: 'AllNotes',
      icon: 'mdi-speedometer',
    },
    {
      name: 'Tags',
      icon: 'mdi-speedometer',
      link: '',
      lists: [],
    },
  ];

  @Prop({ type: Array, required: true })
  tags!: string[]

  @Prop({ type: Function, required: true })
  tagClick!: Function

  get navLists() {
    const navList = this.defaultNavList;
    navList[1].lists = this.tags;

    return navList;
  }
}
</script>
