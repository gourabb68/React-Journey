

//// inndecision APP


// const appRoot = document.getElementById('app');
// const app = {
//     "title": 'Indecision APP',
//      "subtitle": 'put your info',
//      "options": []
// }
// const submitForm=(e)=>{
//    e.preventDefault();
//    let option = e.target.elements.option.value;
//    if(option){
//        app.options.push(option);
//         console.log(app.options)

//    }
//    e.target.elements.option.value='';
//    render();

// }
// const remove = ()=>{
//     app.options = [];
//     render();
// }

// const onMake =()=>{
//     const random = Math.floor(Math.random()*app.options.length);
//     const option = app.options[random];
//     alert(option);
// }

// function render(){

//     const temp = [
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length>0 ? ' Here is the Options ': 'no Option'}</p>
//     <button disabled={app.options.length===0} onClick={onMake}>What should  i do?</button>
//     <button onClick={remove}>Remove All</button>
//     <ol>
        
//     {app.options.map((num)=> <li key={num}>{ num }</li>)}
//     </ol>
//     <form onSubmit ={submitForm}>
//          <input type='text' name='option'/>
//          <button>Add Option</button>
//     </form>
   
      
//         </div>
//     ];

//     ReactDOM.render(temp,appRoot);
    
// }
// render();


///visibility toggle
const appRoot = document.getElementById('app');
const act =()=>{
    app.desc=app.desc===true?false:true;
  console.log(app.desc)
  render();
}
const app ={
    desc: true
}
const render = ()=>{

 const temp = [
  <div>
      <h1>Visibility Toggle</h1>
 <button onClick={act}>{app.desc === true? 'show details':'hide details'}</button>
 { app.desc=== false && <p> Here is the details</p>}
  </div>
 ];
    ReactDOM.render(temp,appRoot);


};

render();

