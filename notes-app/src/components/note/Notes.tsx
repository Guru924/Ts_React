import React from 'react'
import './notes.css'
import { NoteProps, Colors } from './notes-types'
import Card from '../cards/Card'



const Notes : React.FC<NoteProps> = ({text, priority}) => {
  return (
    <Card bgColor={priority ? Colors[priority] : ""}
    height='2' padding='1'
    >
      <div>
        {text}
    </div>
    </Card>
  )
}

export default Notes