import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const AddExpensePage = (props) =>{
    console.log(props);
    return (
        <div>
        this is from my .AddExpensePage page {props.match.params.id}
        <NavLink to="/" activeClassName="is-active" exact={true}> Go Home </NavLink>           
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
        <NavLink to="/create"activeClassName="is-active">Create Page</NavLink>
         
    </div>
    );
 
};

export default AddExpensePage;
