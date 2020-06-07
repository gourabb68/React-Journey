import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const Header =() =>{
    return (
     <header>
     <h1>Expensify</h1>
     <div>
     <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>           
        <NavLink to="/create"activeClassName="is-active">Create Page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
     </div>
     </header>
    ); 
 };
 export default Header;