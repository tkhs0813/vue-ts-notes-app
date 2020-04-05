<template>
  <div class="main">
    <!-- <Login /> -->

    <!-- サイドバー -->
    <Sidebar />
    <div class="sidebar">
      <div class="categoryList">
        <button @click="createCategory()">Create Category</button>
        <ul :key="category.id" v-for="category in categories">
          <li>
            <button @click="deleteCategory(category)">🗑</button>
            <span class="categoryName" @click="openCategory(category)">{{ category.name }}</span>
          </li>
        </ul>
      </div>
      <div class="noteList" v-if="selectedCategory">
        <button @click="createNote()">Create Note</button>
        <ul :key="note.id" v-for="note in selectedCategory.notes">
          <li>
            <button @click="deleteNote(note)">🗑</button>
            <span class="noteTitle" @click="openNote(note)">{{ note.title }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- メインのエディタ部分 -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <div class="editor">
            <div v-if="selectedNote">
              <h2>{{ selectedNote.title }}</h2>
              <!-- <button @click="saveNote()">save</button> -->
              <textarea v-model="selectedNote.body"></textarea>
            </div>
          </div>
        </v-layout>
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

  // eslint-disable-next-line class-methods-use-this
  get notes() {
    return noteModle.findAllNote;
  }

  // eslint-disable-next-line class-methods-use-this
  public created() {
    noteModle.fetchData();
  }

  openNote(note: Note): void {
    if (this.selectedNote === null || this.selectedNote?.id !== note.id) {
      this.selectedNote = note;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  createCategory(): void {
    const newNote: Note = {
      id: `note_id_${createUUID()}`,
      title: 'note name',
      tags: [],
      body: 'note body',
    };
    noteModle.createNote(newNote);
  }

  // eslint-disable-next-line class-methods-use-this
  deleteCategory(note: Note): void {
    noteModle.deleteNote(note);
  }
}
</script>
