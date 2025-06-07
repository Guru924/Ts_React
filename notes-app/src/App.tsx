import React, { useState } from 'react';
import './App.css';
import { NoteItems } from './components/note/data';
import Notes from './components/note/Notes';
import AddNote from './components/add-note/Add-note';
import { NoteType } from './components/note/notes-types';


function App() {

  const [notes, setNotes] = useState(NoteItems)

  const addNote = (note : NoteType )=> {
    setNotes([note, ...notes]);
  }

  return (
    <div className="App">
      <h2 style={{textAlign: 'center'}}>Notes App</h2>

      <AddNote addNote={addNote}/>

      <div>
        {
        notes.map(item => (
          <Notes key={item.id} text={item.text} priority={item.priority} />
        ))
      }
      </div>
    </div>
  );
}

export default App;
