import React from 'react'
import './notes.css'
import { NoteProps } from './notes-types'



const Notes : React.FC<NoteProps> = ({text, priority}) => {
  return (
    <div className={`note ${priority}`}>
        {text}
    </div>
  )
}

export default Notes