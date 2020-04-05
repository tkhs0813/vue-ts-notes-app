<template>
  <v-navigation-drawer app>
    <v-list nav dense>
      <template v-for="nav_list in nav_lists">
        <v-list-item v-if="!nav_list.lists" :to="nav_list.link" :key="nav_list.name">
          <v-list-item-icon>
            <v-icon>{{ nav_list.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          v-else
          no-action
          :prepend-icon="nav_list.icon"
          :key="nav_list.name"
          v-model="nav_list.active"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.active}}{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
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

@Component({
  components: {},
})
export default class Main extends Vue {
  nav_lists = [
    {
      name: 'All Notes',
      icon: 'mdi-speedometer',
    },
    {
      name: 'Tags',
      icon: 'mdi-speedometer',
      link: '',
      lists: [
        {
          name: 'Tag Name',
        },
        {
          name: 'Tag Name',
        },
      ],
    },
  ];
}
</script>
