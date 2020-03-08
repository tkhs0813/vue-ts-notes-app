<template>
  <div class="main">
    <div class="sidebar">
      <div class="categoryList">
        <div :key="category.id" v-for="category in categories">
          <div class="categoryName" @click="openCategory(category)">{{ category.name  }}</div>
        </div>
      </div>
      <div class="noteList" v-if="selectedCategory">
        <div :key="note.id" v-for="note in selectedCategory.notes">
          <div class="noteTitle" @click="openNote(note)">{{ note.title }}</div>
        </div>
      </div>
    </div>
    <div class="editor">
      <div v-if="selectedNote">
        <h2>{{ selectedNote.title }}</h2>
        <textarea v-model="selectedNote.body"></textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import mockCategories from '../mock';

interface Note {
  id: string;
  title: string;
  body: string;
}

interface Category {
  id: string;
  name: string;
  notes: Note[];
}

@Component
export default class Main extends Vue {
  categories: Category[] = mockCategories;

  selectedCategory: Category | null = null;

  selectedNote: Note | null = null;

  openCategory(category: Category): void {
    if (this.selectedCategory === null || this.selectedCategory?.id !== category.id) {
      this.selectedCategory = category;
    }
  }

  openNote(note: Note): void {
    if (this.selectedNote === null || this.selectedNote?.id !== note.id) {
      this.selectedNote = note;
    }
  }
}
</script>
