import React, {useContext}from 'react'
import NoteContext from '../context/note-context';
const Note = ({ note }) => {
    
    const {dispatch}=useContext(NoteContext);
    
      //we can create it locallyas using use context we can access the context 
      const removeNote = (title) => {
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
    }
    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => dispatch({type:'REMOVE_NOTE',title:note.title})}>Remove</button>
        </div>
    )
}

export { Note as default }