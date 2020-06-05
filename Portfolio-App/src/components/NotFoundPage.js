import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const NotFoundPage =()=>{
    return (
       <div>404!
           <NavLink to="/" activeClassName="is-active"> Go Home </NavLink>           
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
        <NavLink to="/create"activeClassName="is-active">Create Page</NavLink>
         
       </div>
    );
}
export default NotFoundPage;