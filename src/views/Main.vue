<template>
  <div>
    <!-- サイドバー -->
    <Sidebar :tags="tags" :tagClick="onTagClickHandler"/>

    <!-- メイン -->
    <v-content style="border: 1px solid black;">
      <v-container fluid fill-height>
        <v-navigation-drawer>
          <v-list nav dense>
            <template v-for="note in notes">
              <v-list-item :key="note.id">
                <v-list-item-content>
                  <v-list-item-title>{{ note.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-navigation-drawer>
        aaaa
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';
import Sidebar from '@/components/Sidebar.vue';
import noteModle from '@/store/Note';
import createUUID from '../common/uuid';
import { Note } from '../store/types';

@Component({
  components: {
    Sidebar,
  },
})
export default class Main extends Vue {
  selectedNote: Note | null = null;

  selectedTag: string | null = null;

  // eslint-disable-next-line class-methods-use-this
  get tags() {
    return noteModle.findAllTags;
  }

  // eslint-disable-next-line class-methods-use-this
  get notes() {
    return noteModle.findNote(this.selectedTag);
  }

  // eslint-disable-next-line class-methods-use-this
  public created() {
    noteModle.fetchData();
  }

  // eslint-disable-next-line class-methods-use-this
  public onTagClickHandler(tag: string) {
    console.log('onClickHandler', tag);
    this.selectedTag = tag;
  }
}
</script>
