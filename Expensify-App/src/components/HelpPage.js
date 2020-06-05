import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const HelpPage =()=>{
    return (
       <div>Help 
           <Link to="/">Home Page</Link>
           <NavLink to="/" activeClassName="is-active"> Go Home </NavLink>           
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
        <NavLink to="/create"activeClassName="is-active">Create Page</NavLink>
         
       </div>
    );
}
export default HelpPage;