import React, { useContext } from 'react'
import Note from './Note'
import NoteContext from '../context/note-context';

const NoteList = () => {
    //now instead of passing removeNote function from root
  
    const {notes}=useContext(NoteContext);//return the value provided in props
    return notes.map((note) => (
        <Note key={note.title} note={note} />
    ))
}

export { NoteList as default }