import React,{useState} from 'react';//useState hook
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


const NoteApp =()=>{
  const [notes, setNotes]=useState([]);
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('');
  const addNote =(e)=>{
       e.preventDefault();
       setNotes([

         ...notes,
         {
           title,body
         }
        
       ])
       setTitle('')
  }
  const remove =(title,body)=>{
    // console.log('rm'+title)
    setNotes(notes.filter((note)=>note.title!==title))
    setBody(notes.filter((note)=>note.body!==body))
  }
  return(
     <div>
       <h1>Notes</h1>
       {notes.map((note)=>(
         <div key={note.title}>
           <h3>{note.title}</h3>
           <h3>{note.body}</h3>
           <button onClick={()=>remove(note.title,note.body)}>Remove</button>
           </div>
       ))}
       <p>Add Note</p>
       <form onSubmit={addNote}>
         <input value={title} onChange={(e)=> setTitle(e.target.value)}/>
         <textarea placeholder=
                    'Add a note for your expense'
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}></textarea>
         <button > Add Note</button>
       </form>
     </div>
  )
}

// //trying to create state as class using singl useState call
// const App = (props) =>{
//   const [state,setState]=useState({
//     count: props.count,
//     text: ''
//   })

//     return (
//       <div>
//         <p> The current {state.text ||'count'} is {state.count}</p>
//         <button onClick={()=>  setState({count: state.count+1})}> +1</button>
//         <button onClick={() =>  setState({count: state.count-1})}> -1</button>
//         <button onClick={()=>  setState({count: state.count})}> reset</button>
//         <input value={state.text} onChange={(e)=> setState({text: e.target.value})}></input>
//       </div>
//     )
//   }
  
// const App = (props) =>{
// const [count,setCount]=useState(props.count);
// const [text,setText]=useState('');//2nd state value
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
