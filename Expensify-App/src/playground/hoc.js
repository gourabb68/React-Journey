//Higher Order Component (HOC): A HOC component renders a regular
//component
// Goal of HOC is to reuse code .
// Render Hijacking .
// Props manipulation. 
// Abstract state


import React from 'react';
import ReactDOM from 'react-dom';


//regular component
const Info =(props) =>{
    return (
        <div>
        <h1>Info</h1>
        <p>Simple Component : {props.info}</p>
    </div>
    );
   
};

//create higher order component
//creating a regular function which can take a regular component 
//and create a higher order component
const withAdminWarning =(WrappedComponent) =>{
    return (props)=>{
        return (
            <div>
            {props.isAdmin && <p>This is Private Info Don't share</p>}
            <WrappedComponent {...props}/>
            </div>
        );
        
    }
}
//here AdminInfo is a higher order component 
//we can reuse withAdminWaring for creating higher order component
//and if we want the admin message should be there in all component we can pass that through
//this function
const AdminInfo = withAdminWarning(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info='there are details'/>,document.getElementById('app'));

//2nd example
////Authentication It will show if authenticated as isAuth true
// then we can see Info otherwise showing please login
const requireAuthenticate =(WrappedComponent)=>{
    return (props)=>{
        return(
            <div>
                {props.isAuth? <WrappedComponent {...props}/> : 'Please log in' }
            </div>
        );
    }
}

const AuthInfo = requireAuthenticate(Info);//if isAuth is true i info comp should show up
ReactDOM.render(<AuthInfo isAuth={true} info='there are details'/>,document.getElementById('app'));