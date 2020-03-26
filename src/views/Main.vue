<template>
  <div class="main">
    <div class="sidebar">
      <div class="categoryList">
        <button @click="createCategory()">Create Category</button>
        <ul :key="category.id" v-for="category in categories">
          <li>
            <button @click="deleteCategory(category)">🗑</button>
            <span class="categoryName" @click="openCategory(category)">{{ category.name  }}</span>
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
    <div class="editor">
      <div v-if="selectedNote">
        <h2>{{ selectedNote.title }}</h2>
        <!-- <button @click="saveNote()">save</button> -->
        <textarea v-model="selectedNote.body"></textarea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import noteModle from '@/store/Note';
import createUUID from '../common/uuid';
import { Category, Note } from '../store/types';

@Component
export default class Main extends Vue {
  selectedCategory: Category | null = null;

  selectedNote: Note | null = null;

  // eslint-disable-next-line class-methods-use-this
  get categories() {
    return noteModle.findAllCategory;
  }

  // eslint-disable-next-line class-methods-use-this
  public created() {
    noteModle.fetchData();
  }

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

  // eslint-disable-next-line class-methods-use-this
  createCategory(): void {
    const newCategory: Category = {
      id: `category_id_${createUUID()}`,
      name: 'category name',
      notes: [],
    };
    noteModle.createCategory(newCategory);
  }

  createNote(): void {
    if (!this.selectedCategory) return;

    const newNote: Note = {
      id: `note_id_${createUUID()}`,
      title: 'note title',
      body: 'note body',
    };
    this.selectedCategory.notes.push(newNote);
  }

  // eslint-disable-next-line class-methods-use-this
  deleteCategory(category: Category): void {
    console.log(category.id);
    noteModle.deleteCategory(category);
  }

  deleteNote(note: Note): void {
    const { selectedCategory } = this;
    if (!selectedCategory) return;

    selectedCategory.notes = selectedCategory.notes.filter((n) => n.id !== note.id);
  }

  // saveNote(note: Note): void {
  //   const { selectedNote } = this;
  //   if (!selectedNote) return;
  // }

  // updateCategory(category: Category): void {}

  // updateNote(note: Note): void {}
}
</script>
