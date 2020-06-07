
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const ExpenseDashboradPage = () =>{
    return (
        <div>
        this is from my dashboard page
        <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard </NavLink>           
        <NavLink to="/create"activeClassName="is-active">Create Page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
        </div>
         
    </div>
    );
 
};
export default ExpenseDashboradPage;