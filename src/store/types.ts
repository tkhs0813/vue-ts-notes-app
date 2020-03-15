// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}

export interface Note {
  id: string;
  title: string;
  body: string;
}

export interface Category {
  id: string;
  name: string;
  notes: Note[];
}

export interface NoteState {
  categories: Category[];
}
