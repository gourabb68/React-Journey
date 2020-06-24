import React,{useState,useEffect,useReducer} from 'react';//useState hook
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const Note =({note,remove}) =>{
  useEffect(()=>{
    //setting up effect
    console.log('setting up effect');

    ///clean effect i.e when remove some state value
    return()=>{
      console.log('Cleaning up the effect');
    }
  })
  return (
        <div >
           <h3>{note.title}</h3>
           <h3>{note.body}</h3>
           <button onClick={()=>remove(note.title,note.body)}>Remove</button>
           </div>
  )

}

const notesReducer = (state, action) => {
  switch (action.type) {
      case 'POPULATE_NOTES':
          return action.notes
      case 'ADD_NOTE':
          return [
              ...state,
              { title: action.title, body: action.body }
          ]
      case 'REMOVE_NOTE':
          return state.filter((note) => note.title !== action.title )
      default:
          return state
  }
}

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
      e.preventDefault()
      dispatch({
          type: 'ADD_NOTE',
          title,
          body
      })
      setTitle('')
      setBody('')
  }

  const removeNote = (title) => {
      dispatch({
          type: 'REMOVE_NOTE',
          title
      })
  }

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
      <div>
          <h1>Notes</h1>
          {notes.map((note) => (
              <Note key={note.title} note={note} removeNote={removeNote}/>
          ))}
          <p>Add note</p>
          <form onSubmit={addNote}>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
              <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
              <button>add note</button>
          </form>
      </div>
  )
}

//trying to create state as class using singl useState call
const App = (props) =>{
  const [state,setState]=useState({
    count: props.count,
    text: ''
  })

    return (
      <div>
        <p> The current {state.text ||'count'} is {state.count}</p>
        <button onClick={()=>  setState({count: state.count+1})}> +1</button>
        <button onClick={() =>  setState({count: state.count-1})}> -1</button>
        <button onClick={()=>  setState({count: state.count})}> reset</button>
        <input value={state.text} onChange={(e)=> setState({text: e.target.value})}></input>
      </div>
    )
  }
  
// const App = (props) =>{
// const [count,setCount]=useState(props.count);
// const [text,setText]=useState('');//2nd state value

// useEffect(()=>{
//   console.log('This should ran once')
// },[])//it is depended on  nothing means it will run only once 
// //at the beginning componentDidMount

// useEffect(()=>{//useEffect is combination with
//   // componentDidMount() and componentDidUpdate()
//   document.title = count;
//   console.log("useEffect ran")
// },[count])


// const increment = ()=>{
//   setCount(count+1);
// }
// const decrement = ()=>{
//   setCount(count-1);
// }
// const reset = ()=>{
//   setCount(props.count);
// }
//   return (
//     <div>
//       <p> The current {text || count} is {count}</p>
//       <button onClick={increment}> +1</button>
//       <button onClick={decrement}> -1</button>
//       <button onClick={reset}> reset</button>
//       <input value={text} onChange={(e)=> setText(e.target.value)}></input>
//     </div>
//   )
// }

// App.defaultProps ={
//   count:10
// }
ReactDOM.render(
 <NoteApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
