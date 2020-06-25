import React, {useContext,useState,useEffect}from 'react'
import NoteContext from '../context/note-context';


//creating custom react hooks
const useMousePosition = ()=>{
    //useState
    const [position,setPosition]=useState({x:0,y:0});
    useEffect(()=>{
        //using useEffect with condition [] means it will run
        //only once so multiple time it will not re render
            //register event listener to lister on mouse movement
    console.log('setting up event')
    document.addEventListener('mousemove',(e)=>{
      setPosition({
          x: e.pageX,
          y: e.pageY
      })
    })
    //need to clean up event when element gets unmount or removed
    return()=>{
        document.removeEventListener('mousemove',(e)=>{
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        })
    }
    },[])
    
    return position;
}

const Note = ({ note }) => {
    
    const {dispatch}=useContext(NoteContext);
    //using custom hooks just by calling
    const position = useMousePosition();
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
            <p>{position.x} , {position.y}</p>
            <button onClick={() => dispatch({type:'REMOVE_NOTE',title:note.title})}>Remove</button>
        </div>
    )
}

export { Note as default }