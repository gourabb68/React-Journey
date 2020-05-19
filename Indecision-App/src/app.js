import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
const app = {
    title: "Indecision App",
    subtitle: " put your info",
    options: []

}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//with old syntax create property 
// of instance using constructor
class OldSyntax{
    constructor(){
        this.name= 'mike';
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);
///with new syntax
class NewSyntax{
    name= 'mike';//we will write only key value pair
    
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
