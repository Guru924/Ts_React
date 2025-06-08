import React, { useEffect, useState } from 'react'
import './add-note.css'
import { NoteType, Priority } from '../note/notes-types';
import { v4 as uuidv4 } from 'uuid'
import Card from '../cards/Card';

interface AddNoteProps {
  addNote: (note: NoteType) => void;
  noteToBeEdit: NoteType | null;
  updateNote: (updatedNote: NoteType) => void
}

const AddNote: React.FC<AddNoteProps> = ({ addNote, noteToBeEdit, updateNote }) => {
  const [inputText, setInputText] = useState<string>("");
  const [selectedText, setSelectedText] = useState<Priority>("low");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (noteToBeEdit) {
      updateNote({
        id: noteToBeEdit.id,
        text: inputText,
        priority: selectedText
      })
    } else {
      addNote({
        id: uuidv4(),
        priority: selectedText,
        text: inputText,
      })
    }
    setInputText("");
    setSelectedText("low")
  }
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedText(e.target.value as Priority)
  }

  useEffect(() => {
    if (noteToBeEdit) {
      setInputText(noteToBeEdit.text)
      setSelectedText(noteToBeEdit.priority)
    }
  }, [noteToBeEdit])

  return (
    <Card
      bgColor='#333'
      height='2' padding='1'
    >
      <form className='add-note'>
        <input type="text" onChange={handleChange} value={inputText} />
        <select onChange={handleSelect} value={selectedText}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={handleClick}>{noteToBeEdit ? "Edit" : "Add"}</button>
      </form>
    </Card>
  )
}

export default AddNote
