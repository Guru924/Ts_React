import React, { useState } from 'react';
import './App.css';
import { NoteItems } from './components/note/data';
import Notes from './components/note/Notes';
import AddNote from './components/add-note/Add-note';
import { NoteType } from './components/note/notes-types';


function App() {

  const [notes, setNotes] = useState(NoteItems)
  const [noteToBeEdit, setNoteToBeEdit] = useState<NoteType | null>(null)

  const addNote = (note: NoteType) => {
    setNotes([note, ...notes]);
  }

  const deleteNote = (id: string | Number) => {
    // const index = notes.findIndex(n => n.id === id)
    // const copyNote = [...notes]
    // copyNote.splice(index, 1);
    // setNotes(copyNote)
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  const editNote = (id: string | Number) => {
    const note = notes.find(note => note.id === id) as NoteType;
    setNoteToBeEdit(note)
  }

  const updateNote = (updatedNote: NoteType) => {
    const index = notes.findIndex(note => note.id === updatedNote.id);
    const copyNote = [...notes]
    copyNote.splice(index, 1, updatedNote);
    setNotes(copyNote)
    setNoteToBeEdit(null)
  }
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>Notes App{" "} [{notes.length}]</h2>

      <AddNote
        addNote={addNote}
        noteToBeEdit={noteToBeEdit}
        updateNote={updateNote}
      />

      <div>
        {
          notes.map(item => (
            <Notes
              key={item.id}
              text={item.text}
              priority={item.priority}
              deleteNote={deleteNote}
              editNote={editNote}
              id={item.id} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
