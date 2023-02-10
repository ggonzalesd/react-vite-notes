import Note from "./NoteType"

interface UseNoteType {
  data: Note[];
  add: (text: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
}

export default UseNoteType