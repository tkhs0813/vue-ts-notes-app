// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState { }

export interface Note {
  id: string;
  title: string;
  tags: string[];
  body: string;
}

export interface NoteState {
  notes: Note[];
}
