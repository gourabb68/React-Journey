import React, { useState, useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NoteContext from '../context/note-context';
const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])

    // const removeNote = (title) => {
    //     dispatch({
    //         type: 'REMOVE_NOTE',
    //         title
    //     })
    // }

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))

        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        //wrap the content in NoteCOntext.Provider
        //means value that we are passing as props 
        //can be shared in child and child's child component
        <NoteContext.Provider value={{notes,dispatch}}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm dispatch={dispatch}/>
        </NoteContext.Provider>
    )
}

export { NoteApp as default }