import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
const app = {
    title: "Indecision App",
    subtitle: " put your info",
    options: []

}

//passing childer to component
const Layout =(props)=>{ //parent
    return (
        <div>
            <h1> Title</h1>
            {props.children} 
        </div>
    );
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));














//with old syntax create property 
// of instance using constructor
class OldSyntax{
    constructor(){
        this.name= 'mike';
        this.getName = this.getName.bind(this);
    }
    getName(){
        console.log(this.name);
    }
}
const oldSyntax = new OldSyntax();//let  try to loose this binding
console.log(oldSyntax.getName()); //initially it gives error so we need to bind this 

console.log(oldSyntax);
///with new syntax
class NewSyntax{
    name= 'mike';//we will write only key value pair
    getName =()=>{
        console.log(this.name); //as we know arrow funtion brings 
        //  parent this keywrd into it so no loose of this binding

    }
    
}
const newSyntax = new NewSyntax();
console.log(newSyntax.getName())
console.log(newSyntax);




