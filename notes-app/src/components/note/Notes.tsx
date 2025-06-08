import React from 'react'
import './notes.css'
import { Colors, Priority } from './notes-types'
import Card from '../cards/Card'
import { FaTrash, FaEdit } from "react-icons/fa";


export interface NoteProps {
  id: number | string;
  text: string;
  priority?: Priority
  deleteNote: (id: string | Number) => void
  editNote: (id: string | Number) => void
}

const Notes: React.FC<NoteProps> = ({ text, priority, id, deleteNote, editNote }) => {
  return (
    <Card bgColor={priority ? Colors[priority] : ''} height='2' padding='1'>
      <div>{text}</div>
      <div className='right-corner'>
        <FaEdit onClick={() => editNote(id)} />{" "}
        <FaTrash onClick={() => deleteNote(id)} />
      </div>
    </Card>
  );
};

export default Notes